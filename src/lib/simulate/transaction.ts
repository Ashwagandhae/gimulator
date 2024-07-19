export type ChannelTransaction = {
  type: 'channel';
  channel: string;
};
export type SetPropertyTransaction = {
  type: 'setProperty';
  property: string;
  value: string | number | boolean;
};
export type SetTextTransaction = {
  type: 'setText';
  text: string;
};

export type SetColorTransaction = {
  type: 'setColor';
  color: Color;
};

export type Color = string;

export type EntityTransaction = SetTextTransaction | SetColorTransaction;

export type PureTransaction = ChannelTransaction | SetPropertyTransaction;

export type Transaction = PureTransaction | EntityTransaction;
