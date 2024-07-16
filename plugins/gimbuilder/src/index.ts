/// <reference types='gimloader' />

export { gimkitInternalSend } from './lib/gimkitInternal';

export * from './lib/build';

export function onStop() {
  GL.parcel.stopIntercepts('Gimbuild');
}
