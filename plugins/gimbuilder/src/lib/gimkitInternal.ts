const sendKeys = {
  ping: 'MAP_PING',
  dropItem: 'DROP_ITEM',
  moved: 'MOVED',
  messageForDevice: 'MESSAGE_FOR_DEVICE',
  placeTerrain: 'PLACE_TERRAIN',
  removeTerrain: 'REMOVE_TERRAIN',
  placeDevice: 'PLACE_DEVICE',
  removeDevice: 'REMOVE_DEVICE',
  startGame: 'START_GAME',
  endGame: 'END_GAME',
  restoreMapEarlier: 'RESTORE_MAP_EARLIER',
  createCodeGrid: 'CREATE_CODE_GRID',
  setCodeGridJSON: 'SET_CODE_GRID_JSON',
  joinCodeGrid: 'JOIN_CODE_GRID',
  leaveCodeGrid: 'LEAVE_CODE_GRID',
  setNewCodeGridOwner: 'SET_NEW_CODE_GRID_OWNER',
  deleteCodeGrid: 'DELETE_CODE_GRID',
  updateDeviceUIPresence: 'UPDATE_DEVICE_UI_PRESENCE',
  kickPlayer: 'KICK_PLAYER',
  save: 'SAVE',
  publish: 'PUBLISH',
  requestInitialWorld: 'REQUEST_INITIAL_WORLD',
  refetchLatestAppearance: 'REFETCH_LATEST_APPEARANCE',
  updateAuthToken: 'UPDATE_AUTH_TOKEN',
  hookAction: 'HOOK_ACTION',
  hookOptionAction: 'HOOK_OPTION_ACTION',
  placeSticker: 'PLACE_STICKER',
  placeWire: 'PLACE_WIRE',
  removeWire: 'REMOVE_WIRE',
  fire: 'FIRE',
  setActiveInteractiveItem: 'SET_ACTIVE_INTERACTIVE_ITEM',
  setInteractiveSlotsOrder: 'SET_INTERACTIVE_SLOTS_ORDER',
  reload: 'RELOAD',
  consume: 'CONSUME',
  aiming: 'AIMING',
  addGameTime: 'ADD_GAME_TIME',
  requestAllProps: 'REQUEST_ALL_PROPS',
  setGlobalPermissions: 'SET_GLOBAL_PERMISSIONS',
  togglePhase: 'TOGGLE_PHASE',
  setSpeed: 'SET_SPEED',
  input: 'INPUT',
} as const;

export function gimkitInternalSend(
  A: (typeof sendKeys)[keyof typeof sendKeys],
  t: any
): void {
  GL.stores.network.room.send(A, t);
}

export type DeviceId = string & { readonly DeviceId: unique symbol };
export function generateDeviceId(): DeviceId {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
  let uniqueId = '';
  for (let i = 0; i < 21; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    uniqueId += chars[randomIndex];
  }
  return uniqueId as DeviceId;
}
