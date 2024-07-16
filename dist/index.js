// src/lib/builder.ts
import { BuildBuilderGeneric, DeviceBuilderGeneric } from "gimbuild";
import { TransformBuilder, transform } from "gimbuild";
var SimDeviceBuilder = class extends DeviceBuilderGeneric {
  constructor(deviceType) {
    super(deviceType);
  }
};
var SimBuildBuilder = class extends BuildBuilderGeneric {
  constructor(positionType) {
    super(positionType);
  }
};
function device(deviceType) {
  return new SimDeviceBuilder(deviceType);
}
function build(positionType) {
  return new SimBuildBuilder(positionType);
}

// src/lib/build.ts
import { jsToBlocks } from "gimblocks";
function toBuild(simBuild) {
  return {
    ...simBuild,
    devices: simBuild.devices.map(
      (device2) => ({
        ...device2,
        codeGrids: device2.codeGrids.map((codeGrid) => ({
          ...codeGrid,
          blocks: toProgram(codeGrid.blocks)
        }))
      })
    )
  };
}
function toProgram(simProgram) {
  return jsToBlocks(simProgram.toString());
}

// src/lib/simulate/state.ts
import { World } from "miniplex";
function init(build2) {
  const world = new World();
  const channels = {};
  build2.devices.toReversed().forEach((device2) => {
    world.add(newEntity(device2));
  });
  let queries = {
    property: world.with("property")
  };
  return { world, channels, queries };
}
function newEntity(device2) {
  let ret = { device: device2 };
  switch (device2.type) {
    case "property":
      let value;
      switch (device2.options.valueType) {
        case "number":
          value = device2.options.defaultValueNumber;
          break;
        case "string":
          value = device2.options.defaultValueText;
          break;
        case "boolean":
          value = device2.options.defaultValueBoolean;
          break;
      }
      ret.property = value;
      break;
    case "textBillboard":
      ret.text = {
        text: device2.options.text,
        color: device2.options.color
      };
      break;
  }
  return ret;
}

// src/lib/simulate/transactionCollector.ts
function unimpl() {
  throw new Error("Not implemented");
}
var TransactionCollector = class {
  transactions = [];
  state;
  constructor(state) {
    this.state = state;
  }
  logicBoolean(BOOL) {
    return BOOL === "TRUE";
  }
  logicCompare(A, OP, B) {
    switch (OP) {
      case "EQ":
        return A === B;
      case "NEQ":
        return A !== B;
      case "LT":
        return A < B;
      case "LTE":
        return A <= B;
      case "GT":
        return A > B;
      case "GTE":
        return A >= B;
    }
  }
  logicOperation(A, OP, B) {
    switch (OP) {
      case "AND":
        return A && B || false;
      case "OR":
        return A || B || false;
    }
  }
  mathNumber(NUM) {
    return NUM;
  }
  mathArithmetic(A, OP, B) {
    A = A ?? NaN;
    B = B ?? NaN;
    switch (OP) {
      case "ADD":
        return A + B;
      case "MINUS":
        return A - B;
      case "MULTIPLY":
        return A * B;
      case "DIVIDE":
        return A / B;
      case "POWER":
        return Math.pow(A, B);
    }
  }
  mathSingle(OP, NUM) {
    NUM = NUM ?? NaN;
    switch (OP) {
      case "ROOT":
        return Math.sqrt(NUM);
      case "ABS":
        return Math.abs(NUM);
      case "NEG":
        return -NUM;
      case "LN":
        return Math.log(NUM);
      case "LOG10":
        return Math.log10(NUM);
      case "EXP":
        return Math.exp(NUM);
      case "POW10":
        return Math.pow(10, NUM);
    }
  }
  mathTrig(OP, NUM) {
    NUM = NUM ?? NaN;
    switch (OP) {
      case "SIN":
        return Math.sin(NUM);
      case "COS":
        return Math.cos(NUM);
      case "TAN":
        return Math.tan(NUM);
      case "ASIN":
        return Math.asin(NUM);
      case "ACOS":
        return Math.acos(NUM);
      case "ATAN":
        return Math.atan(NUM);
    }
  }
  mathNumberProperty(NUMBER_TO_CHECK, PROPERTY) {
    NUMBER_TO_CHECK = NUMBER_TO_CHECK ?? NaN;
    switch (PROPERTY) {
      case "EVEN":
        return NUMBER_TO_CHECK % 2 === 0;
      case "ODD":
        return NUMBER_TO_CHECK % 2 !== 0;
      case "PRIME":
        for (let i = 2; i < NUMBER_TO_CHECK; i++) {
          if (NUMBER_TO_CHECK % i === 0) {
            return false;
          }
        }
        return NUMBER_TO_CHECK > 1;
      case "WHOLE":
        return Number.isInteger(NUMBER_TO_CHECK);
      case "POSITIVE":
        return NUMBER_TO_CHECK > 0;
      case "NEGATIVE":
        return NUMBER_TO_CHECK < 0;
      case "DIVISIBLE_BY":
        return NUMBER_TO_CHECK % 2 === 0;
    }
  }
  mathRound(OP, NUM) {
    NUM = NUM ?? NaN;
    switch (OP) {
      case "ROUND":
        return Math.round(NUM);
      case "ROUNDUP":
        return Math.ceil(NUM);
      case "ROUNDDOWN":
        return Math.floor(NUM);
    }
  }
  randomIntegerFromTo(FROM, TO) {
    FROM = FROM ?? 0;
    return Math.floor(Math.random() * (TO ?? 0 - FROM + 1) + FROM);
  }
  text(TEXT) {
    return TEXT;
  }
  createTextWith(...args) {
    return args.join("");
  }
  lengthOf(VALUE) {
    return VALUE?.length ?? 0;
  }
  inText(VALUE, END, FIND) {
    if (VALUE == null || FIND == null) {
      return 0;
    }
    return (END === "FIRST" ? VALUE.indexOf(FIND) : VALUE.lastIndexOf(FIND)) + 1;
  }
  textCharAt(VALUE, WHERE, AT) {
    switch (WHERE) {
      case "FROM_START":
        AT = AT ?? 1;
        break;
      case "FROM_END":
        AT = VALUE?.length ?? 0 - (AT ?? 1);
        break;
      case "FIRST":
        AT = 1;
        break;
      case "LAST":
        AT = VALUE?.length ?? 0;
        break;
      case "RANDOM":
        AT = Math.floor(Math.random() * (VALUE?.length ?? 0));
        break;
    }
    return VALUE?.charAt(AT - 1) ?? "";
  }
  inTextGetSubstringFromTo(STRING, WHERE1, AT1, WHERE2, AT2) {
    switch (WHERE1) {
      case "FROM_START":
        AT1 = AT1 ?? 1;
        break;
      case "FROM_END":
        AT1 = STRING?.length ?? 0 - (AT1 ?? 1);
        break;
      case "FIRST":
        AT1 = 1;
        break;
    }
    switch (WHERE2) {
      case "FROM_START":
        AT2 = AT2 ?? 1;
        break;
      case "FROM_END":
        AT2 = STRING?.length ?? 0 - (AT2 ?? 1);
        break;
      case "LAST":
        AT2 = STRING?.length ?? 0;
        break;
    }
    return STRING?.substring(AT1 - 1, AT2) ?? "";
  }
  broadcastMessageOnChannel(broadcast_message_on_channel) {
    if (broadcast_message_on_channel == null) {
      return;
    }
    this.transactions.push({
      type: "channel",
      channel: broadcast_message_on_channel
    });
  }
  setPropertyValue(set_property, value) {
    if (set_property == null || value == null) {
      return;
    }
    this.transactions.push({
      type: "setProperty",
      property: set_property,
      value
    });
  }
  getProperty(get_property) {
    for (let { property, device: device2 } of this.state.queries.property) {
      if (device2.type != "property")
        continue;
      if (device2.options.propertyName != get_property)
        continue;
      return property;
    }
    throw new Error(`Property not found: ${get_property}`);
  }
  triggeringPlayersName() {
    unimpl();
  }
  addActivityFeedItemForEveryone(add_activity_feed_item_for_everyone) {
    unimpl();
  }
  addActivityFeedItemForTriggeringPlayer(add_activity_feed_item_for_triggering_player) {
    unimpl();
  }
  addActivityFeedItemForGameHost(add_activity_feed_item_for_game_host) {
  }
  triggeringPlayersTeamNumber() {
    unimpl();
  }
  triggeringPlayersScore() {
    unimpl();
  }
  getScoreOfTeam(get_score_of_team) {
    unimpl();
  }
  isALiveGame() {
    unimpl();
  }
  isAnAssignment() {
    unimpl();
  }
  secondsIntoGame() {
    unimpl();
  }
  setObjectiveTo(set_objective_to) {
    unimpl();
  }
  setPercentageCompleteTo(set_percentage_complete_to) {
    unimpl();
  }
  incrementPercentageCompleteBy(increment_percentage_complete_by) {
    unimpl();
  }
  sendNotificationTitleContent(title, content) {
    unimpl();
  }
  otherPlayersName() {
    unimpl();
  }
  otherPlayersTeamNumber() {
    unimpl();
  }
  getPropertyAsOtherPlayer(get_property_as_other_player) {
    unimpl();
  }
  setPropertyAsOtherPlayerValue(set_property_as_other_player, value) {
    unimpl();
  }
  broadcastMessageAsOtherPlayerOnChannel(broadcast_message_as_other_player_on_channel) {
    unimpl();
  }
  grantPlayerSelectedItem() {
    unimpl();
  }
  grantPlayerSelectedItemCustomAmountAmount(amount) {
    unimpl();
  }
  setText(set_text) {
    if (set_text == null) {
      return;
    }
    this.transactions.push({
      type: "setText",
      text: set_text
    });
  }
  setTextColorTo(set_text_color_to) {
    if (set_text_color_to == null) {
      return;
    }
    this.transactions.push({
      type: "setColor",
      color: set_text_color_to
    });
  }
  setImageUrl(set_image_url) {
    unimpl();
  }
  setFrameColorTo(set_frame_color_to) {
    unimpl();
  }
  questionsAnsweredCorrectlyInARow() {
    unimpl();
  }
  setMessageShownWhenPlayerAnswersCorrectly(set_message_shown_when_player_answers_correctly) {
    unimpl();
  }
  setMessageShownWhenPlayerAnswersIncorrectly(set_message_shown_when_player_answers_incorrectly) {
    unimpl();
  }
  setHeader(set_header) {
    unimpl();
  }
  setContent(set_content) {
    unimpl();
  }
  getAmountOfCurrentItem() {
    unimpl();
  }
  setGuiText(set_text) {
    unimpl();
  }
  getMinutes() {
    unimpl();
  }
  getSeconds() {
    unimpl();
  }
  getTimeLeftFormatted() {
    unimpl();
  }
  numberOfPlayersOnTeam() {
    unimpl();
  }
  knockedPlayersName() {
    unimpl();
  }
  knockedPlayersTeamNumber() {
    unimpl();
  }
  getPropertyAsKnockedOutPlayer(get_property_as_knocked_out_player) {
    unimpl();
  }
  setPropertyAsKnockedOutPlayerValue(set_property_as_knocked_out_player, value) {
    unimpl();
  }
  broadcastMessageAsKnockedOutPlayerOnChannel(broadcast_message_as_knocked_out_player_on_channel) {
    unimpl();
  }
  tagZoneOtherCharacterName() {
    unimpl();
  }
  tagZoneOtherCharacterTeamNumber() {
    unimpl();
  }
  playersXPosition() {
    unimpl();
  }
  playersYPosition() {
    unimpl();
  }
  damagePlayerCustomAmountAmount(amount) {
    unimpl();
  }
  convertNumberToTextWithCommas(convert_number_to_text_with_commas) {
    let num = convert_number_to_text_with_commas;
    let str = (num ?? 0).toString();
    let ret = "";
    for (let i = 0; i < str.length; i++) {
      if (i > 0 && (str.length - i) % 3 === 0) {
        ret += ",";
      }
      ret += str[i];
    }
    return ret;
  }
};

// src/lib/simulate/update.ts
function update(state) {
  updateChannels(state);
}
function updateChannels(state) {
  let activeChannels = Object.entries(state.channels).filter(([_, broadcastCount]) => broadcastCount > 0).map(([channel, _]) => channel);
  for (let channel of activeChannels) {
    updateWorldFromChannelCall(state, channel);
  }
  for (let channel of activeChannels) {
    state.channels[channel] -= 1;
  }
}
function updateWorldFromChannelCall(state, channel) {
  for (const entity of state.world.entities) {
    for (const codeGrid of entity.device.codeGrids) {
      if (codeGrid.type != "channel_radio")
        continue;
      if (codeGrid.channel != channel)
        continue;
      excecuteBlocks(state, entity, codeGrid.blocks);
    }
  }
}
function excecuteBlocks(state, entity, blocks) {
  let transactionCollector = new TransactionCollector(state);
  blocks(transactionCollector);
  updateFromTransactions(state, transactionCollector.transactions, entity);
}
function updateFromTransactions(state, transactions, entity) {
  for (let transaction of transactions) {
    switch (transaction.type) {
      case "channel":
        state.channels[transaction.channel] = (state.channels[transaction.channel] ?? 0) + 1;
        continue;
    }
    if (entity == null)
      throw new Error(`Entity required for transaction ${transaction.type}`);
    switch (transaction.type) {
      case "setProperty":
        entity.property = transaction.value;
        break;
      case "setText":
        entity.text.text = transaction.text;
        break;
      case "setColor":
        entity.text.color = transaction.color;
        break;
    }
  }
}

// src/lib/simulate.ts
var Sim = class {
  #state;
  constructor(build2) {
    this.#state = init(build2);
  }
  update() {
    update(this.#state);
  }
  broadcastOn(channel) {
    updateFromTransactions(this.#state, [{ type: "channel", channel }]);
  }
  get world() {
    return this.#state.world;
  }
};
function sim(build2) {
  return new Sim(build2);
}
export {
  Sim,
  SimBuildBuilder,
  SimDeviceBuilder,
  TransformBuilder,
  build,
  device,
  sim,
  toBuild,
  transform
};
