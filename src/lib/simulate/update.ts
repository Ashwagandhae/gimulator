import { SimProgram } from '../builder';
import { Entity, State } from './state';
import { TransactionCollector } from './transactionCollector';
import { PureTransaction, Transaction } from './transaction';

export function update(state: State): void {
  updateChannels(state);
}

function updateChannels(state: State): void {
  let channels = structuredClone(state.channels);
  state.channels = {};
  for (let [channel, count] of Object.entries(channels)) {
    for (let i = 0; i < count; i++) {
      updateWorldFromChannelCall(state, channel);
    }
  }
}

function updateWorldFromChannelCall(state: State, channel: string): void {
  for (const entity of state.world.entities) {
    // channels
    for (const codeGrid of entity.device.codeGrids) {
      if (codeGrid.type != 'channel_radio') continue;
      if (codeGrid.channel != channel) continue;
      excecuteBlocks(state, entity, codeGrid.blocks);
    }
    // triggers
    updateTriggerFromChannel(state, entity, channel);
  }
}
function updateTriggerFromChannel(
  state: State,
  entity: Entity,
  channel: string
): void {
  if (entity.device.type != 'trigger') return;
  if (entity.device.options.activateChannel == channel) {
    entity.activated = true;
  }
  if (entity.device.options.deactivateChannel == channel) {
    entity.activated = false;
  }
  if (!entity.activated) return;
  if (entity.device.options.triggerWhenReceivingOnChannel == channel) {
    if (
      entity.device.options.maxTriggers != null &&
      entity.triggerCount! > entity.device.options.maxTriggers
    )
      return;

    if (
      entity.device.options.triggerWhenReceivingOnChannel ==
      entity.device.options.channelToTrigger
    ) {
      entity.recursionCount! += 1;
      if (entity.recursionCount! > 300) {
        entity.recursionCount = 0;
        // skip this trigger
        return;
      }
    }

    if (entity.device.options.channelToTrigger != '') {
      triggerChannel(state, entity.device.options.channelToTrigger);
    }
    for (let codeGrid of entity.device.codeGrids) {
      if (codeGrid.type != 'WHEN_TRIGGERED') continue;
      excecuteBlocks(state, entity, codeGrid.blocks);
    }
    entity.triggerCount!++;
  }
}
function triggerChannel(state: State, channel: string): void {
  updateFromTransactions(state, [{ type: 'channel', channel }]);
}

function excecuteBlocks(
  state: State,
  entity: Entity,
  blocks: SimProgram
): void {
  let transactionCollector = new TransactionCollector(state);
  if (typeof blocks === 'function') {
    blocks(transactionCollector);
  } else {
    blocks.program(transactionCollector);
  }
  updateFromTransactions(state, transactionCollector.transactions, entity);
}

export function updateFromTransactions(
  state: State,
  transactions: PureTransaction[]
): void;
export function updateFromTransactions(
  state: State,
  transactions: Transaction[],
  entity: Entity
): void;
export function updateFromTransactions(
  state: State,
  transactions: Transaction[],
  entity?: Entity
): void {
  for (let transaction of transactions) {
    switch (transaction.type) {
      case 'channel':
        state.channels[transaction.channel] =
          (state.channels[transaction.channel] ?? 0) + 1;
        continue;
      case 'setProperty':
        for (let e of state.queries.property) {
          if (e.device.type != 'property') continue;
          if (e.device.options.propertyName != transaction.property) continue;
          e.property = transaction.value;
          break;
        }
        continue;
    }
    if (entity == null)
      throw new Error(`Entity required for transaction ${transaction.type}`);
    switch (transaction.type) {
      case 'setText':
        entity.text!.text = transaction.text;
        break;
      case 'setColor':
        entity.text!.color = transaction.color;
        break;
    }
  }
}
