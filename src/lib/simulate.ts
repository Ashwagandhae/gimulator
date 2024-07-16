import { SimBuild } from './builder';
import { init, State } from './simulate/state';
import { update, updateFromTransactions } from './simulate/update';

export class Sim {
  #state: State;
  constructor(build: SimBuild) {
    this.#state = init(build);
  }
  update() {
    update(this.#state);
  }
  broadcastOn(channel: string) {
    updateFromTransactions(this.#state, [{ type: 'channel', channel }]);
  }
  get world() {
    return this.#state.world;
  }
}

export function sim(build: SimBuild) {
  return new Sim(build);
}
