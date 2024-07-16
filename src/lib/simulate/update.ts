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
    for (const codeGrid of entity.device.codeGrids) {
      if (codeGrid.type != 'channel_radio') continue;
      if (codeGrid.channel != channel) continue;
      excecuteBlocks(state, entity, codeGrid.blocks);
    }
  }
}

function excecuteBlocks(
  state: State,
  entity: Entity,
  blocks: SimProgram
): void {
  let transactionCollector = new TransactionCollector(state);
  blocks(transactionCollector);
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
    }
    if (entity == null)
      throw new Error(`Entity required for transaction ${transaction.type}`);
    switch (transaction.type) {
      case 'setProperty':
        entity.property = transaction.value;
        break;
      case 'setText':
        entity.text!.text = transaction.text;
        break;
      case 'setColor':
        entity.text!.color = transaction.color;
        break;
    }
  }
}
