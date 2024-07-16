import { Union } from 'gimblocks/device';
import { Transaction } from './transaction';
import { State } from './state';
import { Color } from './transaction';

function unimpl(): never {
  throw new Error('Not implemented');
}

export class TransactionCollector {
  transactions: Transaction[] = [];
  readonly state: State;
  constructor(state: State) {
    this.state = state;
  }

  logicBoolean(BOOL: 'TRUE' | 'FALSE'): boolean {
    return BOOL === 'TRUE';
  }
  logicCompare(
    A: any | null,
    OP: 'EQ' | 'NEQ' | 'LT' | 'LTE' | 'GT' | 'GTE',
    B: any | null
  ): boolean {
    switch (OP) {
      case 'EQ':
        return A === B;
      case 'NEQ':
        return A !== B;
      case 'LT':
        return A < B;
      case 'LTE':
        return A <= B;
      case 'GT':
        return A > B;
      case 'GTE':
        return A >= B;
    }
  }

  logicOperation(
    A: boolean | null,
    OP: 'AND' | 'OR',
    B: boolean | null
  ): boolean {
    switch (OP) {
      case 'AND':
        return (A && B) || false;
      case 'OR':
        return A || B || false;
    }
  }

  mathNumber(NUM: number): number {
    return NUM;
  }

  mathArithmetic(
    A: number | null,
    OP: 'ADD' | 'MINUS' | 'MULTIPLY' | 'DIVIDE' | 'POWER',
    B: number | null
  ): number {
    A = A ?? NaN;
    B = B ?? NaN;
    switch (OP) {
      case 'ADD':
        return A + B;
      case 'MINUS':
        return A - B;
      case 'MULTIPLY':
        return A * B;
      case 'DIVIDE':
        return A / B;
      case 'POWER':
        return Math.pow(A, B);
    }
  }

  mathSingle(
    OP: 'ROOT' | 'ABS' | 'NEG' | 'LN' | 'LOG10' | 'EXP' | 'POW10',
    NUM: number | null
  ): number {
    NUM = NUM ?? NaN;
    switch (OP) {
      case 'ROOT':
        return Math.sqrt(NUM);
      case 'ABS':
        return Math.abs(NUM);
      case 'NEG':
        return -NUM;
      case 'LN':
        return Math.log(NUM);
      case 'LOG10':
        return Math.log10(NUM);
      case 'EXP':
        return Math.exp(NUM);
      case 'POW10':
        return Math.pow(10, NUM);
    }
  }

  mathTrig(
    OP: 'SIN' | 'COS' | 'TAN' | 'ASIN' | 'ACOS' | 'ATAN',
    NUM: number | null
  ): number {
    NUM = NUM ?? NaN;
    switch (OP) {
      case 'SIN':
        return Math.sin(NUM);
      case 'COS':
        return Math.cos(NUM);
      case 'TAN':
        return Math.tan(NUM);
      case 'ASIN':
        return Math.asin(NUM);
      case 'ACOS':
        return Math.acos(NUM);
      case 'ATAN':
        return Math.atan(NUM);
    }
  }

  mathNumberProperty(
    NUMBER_TO_CHECK: number | null,
    PROPERTY:
      | 'EVEN'
      | 'ODD'
      | 'PRIME'
      | 'WHOLE'
      | 'POSITIVE'
      | 'NEGATIVE'
      | 'DIVISIBLE_BY'
  ): boolean {
    NUMBER_TO_CHECK = NUMBER_TO_CHECK ?? NaN;
    switch (PROPERTY) {
      case 'EVEN':
        return NUMBER_TO_CHECK % 2 === 0;
      case 'ODD':
        return NUMBER_TO_CHECK % 2 !== 0;
      case 'PRIME':
        for (let i = 2; i < NUMBER_TO_CHECK; i++) {
          if (NUMBER_TO_CHECK % i === 0) {
            return false;
          }
        }
        return NUMBER_TO_CHECK > 1;
      case 'WHOLE':
        return Number.isInteger(NUMBER_TO_CHECK);
      case 'POSITIVE':
        return NUMBER_TO_CHECK > 0;
      case 'NEGATIVE':
        return NUMBER_TO_CHECK < 0;
      case 'DIVISIBLE_BY':
        return NUMBER_TO_CHECK % 2 === 0;
    }
  }

  mathRound(OP: 'ROUND' | 'ROUNDUP' | 'ROUNDDOWN', NUM: number | null): number {
    NUM = NUM ?? NaN;
    switch (OP) {
      case 'ROUND':
        return Math.round(NUM);
      case 'ROUNDUP':
        return Math.ceil(NUM);
      case 'ROUNDDOWN':
        return Math.floor(NUM);
    }
  }

  randomIntegerFromTo(FROM: number | null, TO: number | null): number {
    FROM = FROM ?? 0;
    // inclusive
    return Math.floor(Math.random() * (TO ?? 0 - FROM + 1) + FROM);
  }

  text(TEXT: string): string {
    return TEXT;
  }
  createTextWith(...args: any[]): string {
    return args.join('');
  }

  lengthOf(VALUE: string | null): number {
    return VALUE?.length ?? 0;
  }

  inText(
    VALUE: string | null,
    END: 'FIRST' | 'LAST',
    FIND: string | null
  ): number {
    if (VALUE == null || FIND == null) {
      return 0;
    }
    return (
      (END === 'FIRST' ? VALUE.indexOf(FIND) : VALUE.lastIndexOf(FIND)) + 1
    );
  }

  textCharAt(
    VALUE: string | null,
    WHERE: 'FROM_START' | 'FROM_END' | 'FIRST' | 'LAST' | 'RANDOM',
    AT: number | null
  ): string {
    switch (WHERE) {
      case 'FROM_START':
        AT = AT ?? 1;
        break;
      case 'FROM_END':
        AT = VALUE?.length ?? 0 - (AT ?? 1);
        break;
      case 'FIRST':
        AT = 1;
        break;
      case 'LAST':
        AT = VALUE?.length ?? 0;
        break;
      case 'RANDOM':
        AT = Math.floor(Math.random() * (VALUE?.length ?? 0));
        break;
    }
    return VALUE?.charAt(AT - 1) ?? '';
  }

  inTextGetSubstringFromTo(
    STRING: string | null,
    WHERE1: 'FROM_START' | 'FROM_END' | 'FIRST',
    AT1: number | null,
    WHERE2: 'FROM_START' | 'FROM_END' | 'LAST',
    AT2: number | null
  ): string {
    switch (WHERE1) {
      case 'FROM_START':
        AT1 = AT1 ?? 1;
        break;
      case 'FROM_END':
        AT1 = STRING?.length ?? 0 - (AT1 ?? 1);
        break;
      case 'FIRST':
        AT1 = 1;
        break;
    }
    switch (WHERE2) {
      case 'FROM_START':
        AT2 = AT2 ?? 1;
        break;
      case 'FROM_END':
        AT2 = STRING?.length ?? 0 - (AT2 ?? 1);
        break;
      case 'LAST':
        AT2 = STRING?.length ?? 0;
        break;
    }
    return STRING?.substring(AT1 - 1, AT2) ?? '';
  }

  broadcastMessageOnChannel(broadcast_message_on_channel: string | null): void {
    if (broadcast_message_on_channel == null) {
      return;
    }
    this.transactions.push({
      type: 'channel',
      channel: broadcast_message_on_channel,
    });
  }

  setPropertyValue(
    set_property: string | null,
    value: string | number | boolean | null
  ): void {
    if (set_property == null || value == null) {
      return;
    }
    this.transactions.push({
      type: 'setProperty',
      property: set_property,
      value,
    });
  }

  getProperty(get_property: string | null): string | number | boolean {
    for (let { property, device } of this.state.queries.property) {
      if (device.type != 'property') continue;
      if (device.options.propertyName != get_property) continue;
      return property;
    }
    throw new Error(`Property not found: ${get_property}`);
  }
  triggeringPlayersName(): string {
    unimpl();
  }

  addActivityFeedItemForEveryone(
    add_activity_feed_item_for_everyone: string | null
  ): void {
    unimpl();
  }

  addActivityFeedItemForTriggeringPlayer(
    add_activity_feed_item_for_triggering_player: string | null
  ): void {
    unimpl();
  }

  addActivityFeedItemForGameHost(
    add_activity_feed_item_for_game_host: string | null
  ): void {}
  triggeringPlayersTeamNumber(): number {
    unimpl();
  }
  triggeringPlayersScore(): number {
    unimpl();
  }

  getScoreOfTeam(get_score_of_team: number | null): number {
    unimpl();
  }
  isALiveGame(): boolean {
    unimpl();
  }
  isAnAssignment(): boolean {
    unimpl();
  }
  secondsIntoGame(): number {
    unimpl();
  }

  setObjectiveTo(set_objective_to: string | null): void {
    unimpl();
  }

  setPercentageCompleteTo(set_percentage_complete_to: number | null): void {
    unimpl();
  }

  incrementPercentageCompleteBy(
    increment_percentage_complete_by: number | null
  ): void {
    unimpl();
  }

  sendNotificationTitleContent(
    title: string | null,
    content: string | null
  ): void {
    unimpl();
  }
  otherPlayersName(): string {
    unimpl();
  }
  otherPlayersTeamNumber(): number {
    unimpl();
  }

  getPropertyAsOtherPlayer(
    get_property_as_other_player: string | null
  ): string | number | boolean {
    unimpl();
  }

  setPropertyAsOtherPlayerValue(
    set_property_as_other_player: string | null,
    value: string | number | boolean | null
  ): void {
    unimpl();
  }

  broadcastMessageAsOtherPlayerOnChannel(
    broadcast_message_as_other_player_on_channel: string | null
  ): void {
    unimpl();
  }
  grantPlayerSelectedItem(): void {
    unimpl();
  }

  grantPlayerSelectedItemCustomAmountAmount(amount: number | null): void {
    unimpl();
  }

  setText(set_text: string | null): void {
    if (set_text == null) {
      return;
    }
    this.transactions.push({
      type: 'setText',
      text: set_text,
    });
  }

  setTextColorTo(set_text_color_to: Color | null): void {
    if (set_text_color_to == null) {
      return;
    }
    this.transactions.push({
      type: 'setColor',
      color: set_text_color_to,
    });
  }

  setImageUrl(set_image_url: string | null): void {
    unimpl();
  }

  setFrameColorTo(set_frame_color_to: Color): void {
    unimpl();
  }
  questionsAnsweredCorrectlyInARow(): number {
    unimpl();
  }

  setMessageShownWhenPlayerAnswersCorrectly(
    set_message_shown_when_player_answers_correctly: string | null
  ): void {
    unimpl();
  }

  setMessageShownWhenPlayerAnswersIncorrectly(
    set_message_shown_when_player_answers_incorrectly: string | null
  ): void {
    unimpl();
  }

  setHeader(set_header: string | null): void {
    unimpl();
  }

  setContent(set_content: string | null): void {
    unimpl();
  }
  getAmountOfCurrentItem(): number {
    unimpl();
  }

  setGuiText(set_text: string | null): void {
    unimpl();
  }
  getMinutes(): number {
    unimpl();
  }
  getSeconds(): number {
    unimpl();
  }
  getTimeLeftFormatted(): string {
    unimpl();
  }
  numberOfPlayersOnTeam(): number {
    unimpl();
  }
  knockedPlayersName(): string {
    unimpl();
  }
  knockedPlayersTeamNumber(): number {
    unimpl();
  }

  getPropertyAsKnockedOutPlayer(
    get_property_as_knocked_out_player: string | null
  ): string | number | boolean {
    unimpl();
  }

  setPropertyAsKnockedOutPlayerValue(
    set_property_as_knocked_out_player: string | null,
    value: string | number | boolean | null
  ): void {
    unimpl();
  }

  broadcastMessageAsKnockedOutPlayerOnChannel(
    broadcast_message_as_knocked_out_player_on_channel: string | null
  ): void {
    unimpl();
  }
  tagZoneOtherCharacterName(): string {
    unimpl();
  }
  tagZoneOtherCharacterTeamNumber(): number {
    unimpl();
  }
  playersXPosition(): number {
    unimpl();
  }
  playersYPosition(): number {
    unimpl();
  }

  damagePlayerCustomAmountAmount(amount: number | null): void {
    unimpl();
  }

  convertNumberToTextWithCommas(
    convert_number_to_text_with_commas: number | null
  ): string {
    let num = convert_number_to_text_with_commas;
    let str = (num ?? 0).toString();
    let ret = '';
    for (let i = 0; i < str.length; i++) {
      if (i > 0 && (str.length - i) % 3 === 0) {
        ret += ',';
      }
      ret += str[i];
    }
    return ret;
  }
}
