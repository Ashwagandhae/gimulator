import { SimBuild } from './builder';
import { init, State } from './simulate/state';
import { update, updateFromTransactions } from './simulate/update';

export class Sim {
  state: State;
  constructor(build: SimBuild) {
    this.state = init(build);
  }
  update() {
    update(this.state);
  }
  broadcastOn(channel: string) {
    updateFromTransactions(this.state, [{ type: 'channel', channel }]);
  }
  getProperty(name: string): number | string | boolean {
    for (let { property, device } of this.state.queries.property) {
      if (device.type == 'property' && device.options.propertyName == name) {
        return property;
      }
    }
    throw new Error(`No property with name ${name}`);
  }
  get world() {
    return this.state.world;
  }
}

export function sim(build: SimBuild) {
  return new Sim(build);
}
