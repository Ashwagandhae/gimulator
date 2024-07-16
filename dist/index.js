// src/lib/device/generated.ts
var defaultDeviceOptions = {
  assignmentCheckpoint: {
    action: "set",
    actionValue: void 0,
    applyActionOnChannel: ""
  },
  assignmentContext: { objective: "" },
  backgroundTilesZone: {
    terrainId: void 0,
    layer: "AdditionalBackground1",
    width: 320,
    height: 320
  },
  ball: {
    appearance: "primary",
    resetCooldown: 3,
    topSpeed: 1500,
    hitSensitivity: 1.5,
    bounciness: 70,
    damping: 10,
    massMultiplier: 1.5,
    radius: 75,
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    identifier: ""
  },
  ballZone: {
    resetTheBall: true,
    visibleInGame: true,
    style: "None",
    side: "Left",
    color: "#FFFFFF",
    backgroundAlpha: 0.2,
    activeOnStart: true,
    ballEntersChannel: "",
    activateChannel: "",
    deactivateChannel: "",
    width: 200,
    height: 200
  },
  barrier: {
    shape: "rectangle",
    activeOnGameStart: true,
    color: "#ffb300",
    scope: "global",
    activateChannel: "",
    deactivateChannel: "",
    alpha: 0.8,
    showBorder: true,
    visibleInGame: true,
    collisionEnabled: true,
    height: 200,
    width: 200,
    angle: 0,
    radius: 100
  },
  blockingZone: {
    blockBuilding: 1,
    visibleInGame: true,
    color: "#FFFFFF",
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    width: 200,
    height: 200
  },
  button: {
    guiMessage: "Interact",
    channel: "",
    visibleInGame: true,
    interactionDuration: 1,
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    scope: "global",
    radius: 100,
    size: 26
  },
  cameraPoint: { activateChannel: "", deactivateChannel: "" },
  cameraSize: { width: 1e3, height: 1e3 },
  character: {
    skinId: "character_vortexAgent",
    flipX: false,
    interactionEnabled: true,
    interactionMessage: "Talk",
    interactionChannel: "",
    interactionDuration: 1,
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    scope: "global",
    radius: 100
  },
  checker: {
    checkWhenReceivedOnChannel: "",
    whenValidTransmitOnChannel: "",
    whenInvalidTransmitOnChannel: "",
    check1Type: "item",
    check1ScoreComparison: "equal",
    check1ScoreValue: 1,
    check1PropertyName: "",
    check1PropertyComparison: "equal",
    check1PropertyValue: 1,
    check1ItemId: void 0,
    check1ItemComparison: "equal",
    check1ItemValue: 1,
    check2Type: "item",
    check2ScoreComparison: "equal",
    check2ScoreValue: 1,
    check2PropertyName: "",
    check2PropertyComparison: "equal",
    check2PropertyValue: 1,
    check2ItemId: void 0,
    check2ItemComparison: "equal",
    check2ItemValue: 1,
    check3Type: "item",
    check3ScoreComparison: "equal",
    check3ScoreValue: 1,
    check3PropertyName: "",
    check3PropertyComparison: "equal",
    check3PropertyValue: 1,
    check3ItemId: void 0,
    check3ItemComparison: "equal",
    check3ItemValue: 1,
    check4Type: "item",
    check4ScoreComparison: "equal",
    check4ScoreValue: 1,
    check4PropertyName: "",
    check4PropertyComparison: "equal",
    check4PropertyValue: 1,
    check4ItemId: void 0,
    check4ItemComparison: "equal",
    check4ItemValue: 1,
    check5Type: "item",
    check5ScoreComparison: "equal",
    check5ScoreValue: 1,
    check5PropertyName: "",
    check5PropertyComparison: "equal",
    check5PropertyValue: 1,
    check5ItemId: void 0,
    check5ItemComparison: "equal",
    check5ItemValue: 1,
    checkCount: 1,
    operation: "and"
  },
  checkpoint: {
    enabled: true,
    visibleInGame: true,
    playAudio: true,
    maxActivations: 0,
    setAsActiveChannel: "",
    onActiveChannel: "",
    width: 125
  },
  classDesigner: { activateChannel: "", allowedToUseGadget: 1, immunity: 1 },
  cosmosModifier: {
    skinId: "",
    trailId: "",
    applyChannel: "",
    resetChannel: ""
  },
  countdown: {
    minutes: 10,
    seconds: 0,
    startWhenReceivingFrom: "",
    onEndTransmitOn: ""
  },
  counter: {
    startingValue: 0,
    incrementWhenReceivingOn: "",
    decrementWhenReceivingOn: "",
    visibleInGame: true,
    scope: "global",
    resetToStartingValueWhenReceivingOn: "",
    updateProperty: false,
    property: "",
    useTarget: false,
    target: 10,
    whenTargetReachedTransmitOn: ""
  },
  craftingRecipe: {
    item: void 0,
    itemAmount: 1,
    numberOfIngredients: 2,
    ingredient1Item: void 0,
    ingredient1Amount: 3,
    ingredient2Item: void 0,
    ingredient2Amount: 3,
    ingredient3Item: void 0,
    ingredient3Amount: 3,
    ingredient4Item: void 0,
    ingredient4Amount: 3,
    ingredient5Item: void 0,
    ingredient5Amount: 3,
    timeToCraftMs: 0,
    itemDisposes: false,
    disposeItemAfterMs: 5e3,
    group: "",
    activeOnGameStart: true,
    whenCraftingStartsChannel: "",
    whenCraftedChannel: "",
    activeScope: "global",
    activateChannel: "",
    deactivateChannel: ""
  },
  craftingTable: {
    style: "craft",
    craftingScope: "global",
    group: "",
    useCrafterCollectionAdvantage: true,
    channelItemBeginsCrafting: "",
    channelItemFinishesCrafting: "",
    channelItemCollected: "",
    channelItemDisposed: ""
  },
  damageBoost: {
    multiplier: 2,
    durationMS: 3e4,
    activateChannel: "",
    deactivateChannel: ""
  },
  damager: { amount: 15, damageOnChannel: "", knockoutActivityFeedMessage: "" },
  dialogue: {
    message: "",
    group: "",
    action1Text: "",
    action1Channel: "",
    action2Text: "",
    action2Channel: "",
    action3Text: "",
    action3Channel: "",
    action4Text: "",
    action4Channel: "",
    font: "Rubik",
    character: "",
    typewriter: true,
    darkenBackground: true,
    openChannel: "",
    closeChannel: "",
    whenClosedChannel: ""
  },
  dialogueAction: {
    text: "",
    group: "",
    selectChannel: "",
    scope: "global",
    activeOnGameStart: true,
    deactivateAfterUse: false,
    activateChannel: "",
    deactivateChannel: ""
  },
  droppedItem: {
    itemId: void 0,
    amount: 0,
    placedByCharacterId: "",
    useCurrentClipCount: false,
    currentClip: 0,
    useCurrentDurability: false,
    currentDurability: 0,
    decay: 0
  },
  endGame: { activateWhenReceivingFrom: "" },
  endOfGameWidget: {
    widgetType: "Statistic",
    widgetPlacement: "Primary",
    statisticProperty: "",
    gameTimeLabel: "",
    statisticLabel: "",
    imageStyle: "Contain",
    imageUrl: "",
    imageHeight: 100,
    imageBackgroundColor: "#ffffff",
    showTo: "all",
    showForModeType: "all",
    activeOnGameStart: true,
    scope: "player",
    activateChannel: "",
    deactivateChannel: ""
  },
  flag: {
    flagColor: "black",
    owningTeamId: "1",
    useSafeZone: true,
    automaticBackToBaseAfterSeconds: 15,
    otherTeamPickupAlerts: true,
    onCapturedBroadcastOnChannel: "",
    captureWhenReceiveFromChannel: "",
    onPickupBroadcastOnChannel: "",
    onPickupFromBaseBroadcastOnChannel: "",
    onDropBroadcastOnChannel: "",
    dropWhenReceiveFromChannel: "",
    onBackToBaseBroadcastOnChannel: "",
    onBackToBaseManuallyBroadcastOnChannel: "",
    backToBaseWhenReceiveFromChannel: "",
    radius: 200
  },
  captureFlagZone: {
    flagColor: "black",
    activeOnStart: true,
    visibleInGame: false,
    color: "#FFFFFF",
    whenCapturedTransmitOnChannel: "",
    activateChannel: "",
    deactivateChannel: "",
    width: 400,
    height: 300,
    rotation: 0
  },
  guiDevice: {
    type: "Text",
    position: "Top Left",
    text: "",
    trackedItemId: void 0,
    showTrackedItemMaximumAmount: false,
    whenButtonClickedTransmitOnChannel: "",
    showOnGameStart: true,
    color: "#ffffff",
    contentScope: "global",
    visibilityScope: "global",
    showWhenReceivingFromChannel: "",
    hideWhenReceivingFromChannel: ""
  },
  healthGranter: { amount: 25, grantType: "health", grantChannel: "" },
  imageBillboard: {
    imageUrl: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=600",
    frameColor: "#212121",
    scope: "global",
    alpha: 1,
    visibleOnGameStart: "Yes",
    showWhenReceivingFrom: "",
    hideWhenReceivingFrom: "",
    visibleDuringPhase: "all",
    width: 200,
    height: 200,
    rotation: 0
  },
  inventoryItemManager: {
    itemId: void 0,
    useAsDefault: true,
    activateWhenReceivingFrom: "",
    useMaxAmount: false,
    maxAmount: 10,
    overrideRespawnBehavior: false,
    respawnBehavior: "Keep",
    showAlert: true,
    customItemName: "",
    customItemDescription: "",
    clearItemFromInventoryOnChannel: "",
    updateProperty: false,
    property: ""
  },
  itemGranter: {
    itemId: void 0,
    itemChange: 1,
    grantWhenReceivingFromChannel: "",
    fullStrategy: "overflow",
    initialWeaponAmmo: void 0
  },
  itemImage: {
    itemId: void 0,
    outline: false,
    outlineColor: "#ffffff",
    outlineSize: "automatic",
    customOutlineSize: 3,
    visibleOnGameStart: true,
    scope: "global",
    showChannel: "",
    hideChannel: "",
    size: 64,
    angle: 0
  },
  itemSpawner: {
    itemId: void 0,
    itemAmount: 1,
    msTimeBetweenSpawns: 1e3,
    scope: "global"
  },
  knockoutManager: {
    target: "player",
    onKnockoutChannel: "",
    grantItem: false,
    itemId: void 0,
    itemAmount: 1,
    grantStrategy: "grant",
    dropChance: false,
    dropPercentage: 50,
    activeOnGameStart: true,
    scope: "global",
    activateChannel: "",
    deactivateChannel: ""
  },
  laserBeam: {
    damageToDeal: 10,
    appearance: "Standard",
    laserColor: "#ff0000",
    activeOnGameStart: true,
    laserGroup: "",
    scope: "global",
    transmitOnWhenHitPlayer: "",
    activateOnChannel: "",
    deactivateOnChannel: "",
    angle: 0,
    distance: 350,
    showPath: true,
    showOrigin: true,
    showEndPoint: true
  },
  laserBeamManager: {
    laserGroup: "",
    autoSwitch: true,
    activatedDuration: 2,
    deactivatedDuration: 3,
    activateOnChannel: "",
    deactivateOnChannel: ""
  },
  lifecycle: { event: "Game Starts", transmitOnChannel: "" },
  mapOptions: {
    backgroundTerrain: "Grass",
    platformerBackground: "sky",
    bottomTerrain: "platformer_grass",
    gameClockMode: "Off",
    countdownTimeMinutes: 10,
    allowedGameClockModeType: "liveGame",
    musicUrl: "",
    presetMusicId: "the_shakedown",
    musicVolume: 100,
    minPlayers: 1,
    teams: "Free For All",
    teamSize: 4,
    teamsNumber: 4,
    splitModeForSpecificTeamAmount: "Split Evenly",
    latePlayersJoinAsSpectators: false,
    allyIndicator: "Disabled",
    enemyIndicator: "Disabled",
    allowGameOwnerToSpectate: true,
    healthMode: "healthAndShield",
    maxHealth: 100,
    maxShield: 100,
    startingHealth: 100,
    startingShield: 100,
    startingFragility: 0,
    showHealthAndShield: true,
    spawnImmunity: 10,
    playerVsPlayerDamageEnabled: true,
    interactiveItemsSlots: 3,
    infiniteAmmo: true,
    instantReload: false,
    allowWeaponDrop: true,
    allowItemDrop: true,
    allowResourceDrop: true,
    weaponRespawnBehavior: "Keep",
    itemRespawnBehavior: "Keep",
    resourceRespawnBehavior: "Keep",
    infiniteDurability: true,
    droppedItemScope: "global",
    useScoreboard: true,
    scoreType: "Knockout",
    scoreResource: "cash",
    propertyResource: "",
    scoreName: "Score",
    scoreGroup: "team",
    sortMode: "Highest to lowest",
    showScoreboardOnGameEnd: true,
    showPlayersPlacement: true,
    knockoutActivityFeedDisabled: false,
    dynamicBuildingAllowFloatingBuilds: true
  },
  mood: {
    useVignette: false,
    vignetteStrength: 50,
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: ""
  },
  movementMeter: {
    itemToTrack: void 0,
    drainAmount: 1,
    drainIntervalMs: 500,
    outOfItemChannel: "",
    speedWhenOutOfItem: 0,
    useAsDefault: true,
    warningAmount: 5,
    warningChannel: "",
    activateChannel: "",
    deactivateChannel: ""
  },
  music: {
    audioUrl: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3",
    volume: 50,
    playWhenReceivingFrom: "",
    stopWhenReceivingFrom: ""
  },
  notification: {
    title: "",
    description: "",
    notifyChannel: "",
    notificationType: "none",
    notificationPlacement: "topRight",
    notificationDurationStrategy: "auto",
    customDurationSeconds: 10,
    sendTo: "characterTriggering"
  },
  outline: {
    shape: "rectangle",
    lineLength: 200,
    circleRadius: 200,
    circlePercentage: 100,
    circleFill: false,
    thickness: 5,
    angle: 0,
    color: "#ffffff",
    alpha: 0.8,
    style: "solid",
    dashLength: 35,
    dashSpacing: 15,
    visibleOnGameStart: true,
    showChannel: "",
    hideChannel: "",
    scope: "global"
  },
  passwordLock: {
    password: "",
    onSuccessChannel: "",
    openChannel: "",
    useMaxAttempts: false,
    maxAttempts: 3,
    maxAttemptsScope: "global",
    outOfAttemptsChannel: ""
  },
  placedSticker: {
    stickerId: "",
    depth: 1,
    scale: 0.15,
    placedByCharacterId: "",
    placedAtTimeStamp: 0
  },
  playerAppearanceModifier: {
    modifyTransparency: false,
    transparencyAmount: 1,
    selfTransparency: "match",
    selfTransparencyAmount: 1,
    modifyTint: false,
    tint: "#ffffff",
    activateChannel: "",
    deactivateChannel: ""
  },
  playerPositionDetector: {
    whenPositionChangeDetectedTransmitOn: "",
    updateProperties: false,
    xProperty: "",
    yProperty: ""
  },
  characterProximity: {
    detectionArea: "everywhere",
    allowedMatch: "everybody",
    channelFound: "",
    channelLost: "",
    broadcastAs: "everybody",
    activeOnGameStart: true,
    activateWhenReceivingFrom: "",
    deactivateWhenReceivingFrom: "",
    detectionDistance: 1.5,
    width: 300,
    height: 300,
    delay: 0
  },
  textExplainer: {
    header: "",
    content: "",
    openWhenReceivingFrom: "",
    iconImage: "",
    style: "modal",
    callToActionLabel: "",
    callToActionChannel: "",
    secondaryCallToActionLabel: "",
    secondaryCallToActionChannel: "",
    scope: "global",
    backgroundColor: "#FFFFFF",
    fontFamily: "Rubik",
    closableByUser: true,
    closeWhenReceivingFrom: "",
    whenClosedTransmitOn: ""
  },
  proceduralTerrainZone: {
    width: 320,
    height: 320,
    variability: 5,
    seed: "",
    collision: true,
    depth: 1
  },
  proceduralTerrainZoneZoneInstruction: {
    terrain: void 0,
    weight: 100,
    constraint1: "none",
    constraint1Column: 1,
    constraint1Row: 1,
    constraint1Column1: 1,
    constraint1Column2: 1,
    constraint1Row1: 1,
    constraint1Row2: 1,
    constraint2: "none",
    constraint2Column: 1,
    constraint2Row: 1,
    constraint2Column1: 1,
    constraint2Column2: 1,
    constraint2Row1: 1,
    constraint2Row2: 1
  },
  prop: {
    propId: "",
    shadowsEnabled: true,
    shadowsPlacement: "Floor",
    UseColliders: true,
    Scale: 1,
    Angle: 0,
    Tint: "#FFFFFF",
    FlipX: false,
    Alpha: 1,
    visibleOnGameStart: true,
    visibilityScope: "global",
    showWhenReceivingFrom: "",
    hideWhenReceivingFrom: "",
    canBeDamaged: false,
    health: 100,
    onDestroyedChannel: "",
    useAdaptiveHealth: false,
    adaptiveHealthPerPlayer: 25
  },
  property: {
    propertyName: "",
    valueType: "string",
    defaultValueText: "",
    defaultValueNumber: 0,
    defaultValueBoolean: true,
    propertyType: "global",
    whenValueChangesBroadcastOnChannel: "",
    broadcastValueChangesOnGameStart: false
  },
  gimkitLiveQuestion: {
    kitId: "",
    whenAnsweredCorrectlyTransmitOn: "",
    whenAnsweredIncorrectlyTransmitOn: "",
    openWhenReceivingOn: "",
    closable: true,
    textShownWhenAnsweringCorrectly: "",
    textShownWhenAnsweringIncorrectly: "",
    textShownWhenAnsweringScope: "global",
    closeWhenReceivingOn: "",
    enableWhenReceivingOn: "",
    disableWhenReceivingOn: "",
    whenOpenedChannel: "",
    whenClosedChannel: "",
    sound: "default",
    correctSound: "default",
    incorrectSound: "default",
    actionSound: "default",
    useCustomAction: false,
    customActionText: "",
    channelToTriggerCustomAction: "",
    size: 48
  },
  relay: {
    relayAs: "All Players",
    team: "1",
    channelToTrigger: "",
    triggerWhenReceivingOnChannel: ""
  },
  repeater: {
    startChannel: "",
    actionChannel: "",
    repeatInterval: 5,
    stopRepeatingStrategy: "time",
    timePeriod: 10,
    numberOfRepetitions: 5,
    stopChannel: "",
    maxConcurrentTasksPerPlayer: 1,
    triggerTaskOnStart: true
  },
  respawn: { respawnOnChannel: "" },
  scorebar: {
    numberOfTeams: 1,
    team1: "1",
    colorTeam1: "#e93d37",
    team2: "2",
    colorTeam2: "#4d56f3",
    team3: "3",
    colorTeam3: "#3ce634",
    team4: "4",
    colorTeam4: "#9d34e6"
  },
  sentry: {
    weapon: "zapper_common",
    aimAccuracy: 0.5,
    fireRate: 0.5,
    baseHealth: 100,
    baseShield: 0,
    useAdaptiveHealth: false,
    adaptiveHealth: 5,
    adaptiveShield: 5,
    skinId: "character_sentryRobot",
    team: "__SENTRY_TEAM",
    doesRespawn: true,
    respawnDurationSeconds: 10,
    characterName: "",
    rangeRadius: 1e3,
    dropItem: false,
    itemId: void 0,
    itemAmount: 1,
    onKnockoutChannel: "",
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: ""
  },
  shadow: { width: 300, height: 130 },
  soundEffect: {
    audioUrl: "https://www.soundjay.com/mechanical/sounds/empty-bullet-shell-fall-02.mp3",
    volume: 50,
    playWhenReceivingFrom: "",
    characterType: "all"
  },
  characterSpawnPad: {
    visibleInGame: false,
    phase: "All",
    teamId: "__ANY_TEAM__",
    characterType: "all"
  },
  speed: { speed: 1, activateWhenReceivingFrom: "" },
  startingInventory: {
    itemId: void 0,
    itemAmount: 1,
    equipOnGrant: false,
    grantDuringPhase: "game",
    grantForSavedCharacters: false,
    enabled: true
  },
  tagZone: {
    taggingTeam: "1",
    whenTaggedTransmitOn: "",
    whenTagsTransmitOn: "",
    respawnWhenTagged: true,
    detectionArea: "everywhere",
    detectionDistance: 1.5,
    activeOnGameStart: true,
    activateWhenReceivingFrom: "",
    deactivateWhenReceivingFrom: "",
    width: 500,
    height: 500
  },
  teamSettings: {
    team: "1",
    teamName: "",
    whenPlayerJoinsTransmitOn: "",
    maxPlayers: 4,
    placementPriorityOnGameStart: 30,
    placementPriorityDuringGame: 30,
    allowCustomHostPlacement: false
  },
  teamSwitcher: {
    switchToStrategy: "randomTeam",
    specificTeam: "__SPECTATORS_TEAM",
    switchChannel: ""
  },
  teleporter: {
    group: "",
    targetGroup: "",
    whenTeleportedHereChannel: "",
    teleportToOnChannel: "",
    teleportToTargetChannel: "",
    visibleInGame: true
  },
  terrainLayerAppearance: {
    layer: "AdditionalBackground1",
    modifyTint: false,
    tint: "#ffffff"
  },
  textBillboard: {
    text: "",
    fontSize: 22,
    scope: "global",
    googleFont: "Rubik",
    color: "#000000",
    alpha: 1,
    strokeThickness: 0,
    strokeColor: "#FFFFFF",
    rotation: 0,
    visibleOnGameStart: "Yes",
    showWhenReceivingFrom: "",
    hideWhenReceivingFrom: ""
  },
  trigger: {
    channelToTrigger: "",
    triggerWhenReceivingOnChannel: "",
    triggerDelay: void 0,
    visibleInGame: true,
    team: "__ANY_TEAM__",
    maxTriggers: void 0,
    scope: "global",
    allowedModeType: "all",
    activeOnGameStart: true,
    activateChannel: "",
    deactivateChannel: "",
    activeScope: "global",
    triggeredByPlayerCollision: true
  },
  vendingMachine: {
    grantAction: "Grant Item",
    requiredItemId: void 0,
    amountOfRequiredItem: 1,
    grantedItemId: void 0,
    amountOfGrantedItem: 1,
    purchaseChannel: "",
    visibleInGame: true,
    grantedItemImageUrl: "",
    grantedItemName: "",
    grantedItemDescription: "",
    deactivateOnPurchase: false,
    useAdaptiveCost: false,
    adaptiveCostIncreasePerPlayer: 0,
    allowFunding: false,
    fundingScope: "global",
    useLimitedStock: false,
    maxStock: 10,
    maxStockScope: "global",
    attachCostToNameWhenHidden: true,
    activeOnStart: true,
    activeScope: "player",
    activateChannel: "",
    deactivateChannel: "",
    allowedPurchaseTeam: "__ANY_TEAM__",
    attemptToPurchaseChannel: "",
    onAttemptedPurchaseFailedChannel: "",
    interactionDuration: 1,
    matchItemRarity: false,
    backgroundColor1: "#d44224",
    backgroundColor2: "#f7d253",
    raysColor: "#f7d253",
    numberOfRays: 16,
    raysWidthFactor: 1.25,
    raysAlpha: 0.5,
    raysAdditive: false,
    soundEnabled: true,
    showShadow: true,
    width: 250,
    height: 250,
    radius: 100
  },
  voiceLine: {
    playBehavior: "interrupt",
    volume: 1,
    playChance: 100,
    audioUrl1: "",
    audioUrl2: "",
    audioUrl3: "",
    audioUrl4: "",
    audioUrl5: "",
    audioUrl6: "",
    audioUrl7: "",
    audioUrl8: "",
    activeOnGameStart: true,
    playWhenReceivingOnChannel: ""
  },
  waypoint: {
    target: "deviceLocation",
    flagColor: "black",
    ballId: "",
    name: "",
    useDeactivateWithinRange: false,
    deactivateWithinRange: 3,
    startFollowingPlayer: "",
    stopFollowingPlayer: "",
    hideWhenFlagIsInBase: true,
    activeOnGameStart: true,
    color: "#FFFFFF",
    activateChannel: "",
    deactivateChannel: "",
    scope: "global"
  },
  wireRepeater: { delaySeconds: 0, team: "__ANY_TEAM__" },
  xp: {
    amount: 10,
    reason: "",
    grantOnChannel: "",
    useIncrementalGrant: false,
    incrementalGrantCharacterRequirement: 10,
    useMinimumCharacterCount: false,
    minimumCharacterCount: 6
  },
  zone: {
    playerEntersChannel: "",
    playerLeavesChannel: "",
    allowWeaponFire: true,
    shape: "rectangle",
    visibleInGame: false,
    color: "#FFFFFF",
    activeOnStart: true,
    activateChannel: "",
    deactivateChannel: "",
    allowWeaponDrop: "Do Not Override",
    allowItemDrop: "Do Not Override",
    allowResourceDrop: "Do Not Override",
    droppedItemDecayEnabled: false,
    droppedItemDecay: 1,
    width: 200,
    height: 200,
    radius: 100,
    rotation: 0
  }
};

// src/lib/device/index.ts
function getDefaultDeviceOptions(id) {
  return defaultDeviceOptions[id];
}

// src/lib/builder.ts
var TransformBuilder = class {
  transform;
  constructor(x = 0, y = 0) {
    this.transform = { x, y };
  }
  x(x) {
    this.transform.x = x;
    return this;
  }
  y(y) {
    this.transform.y = y;
    return this;
  }
  depth(depth) {
    this.transform.depth = depth;
    return this;
  }
  addX(x) {
    this.transform.x += x;
    return this;
  }
  addY(y) {
    this.transform.y += y;
    return this;
  }
  add(transform2) {
    this.transform.x += transform2.x;
    this.transform.y += transform2.y;
    return this;
  }
  negative() {
    this.transform.x = -this.transform.x;
    this.transform.y = -this.transform.y;
    return this;
  }
  build() {
    return this.transform;
  }
};
function defaultDeviceForType(type) {
  return {
    type,
    transform: { x: 0, y: 0 },
    options: getDefaultDeviceOptions(type),
    codeGrids: []
  };
}
var DeviceBuilder = class {
  device;
  constructor(deviceType) {
    this.device = defaultDeviceForType(deviceType);
  }
  transform(transform2) {
    if (transform2 instanceof TransformBuilder) {
      this.device.transform = transform2.build();
    } else {
      this.device.transform = transform2;
    }
    return this;
  }
  options(options) {
    this.device.options = { ...this.device.options, ...options };
    return this;
  }
  setOption(key, value) {
    this.device.options[key] = value;
    return this;
  }
  addCodeGrid(codeGrid) {
    this.device.codeGrids.push(codeGrid);
    return this;
  }
  addTriggerCodeGrid(type, blocks) {
    this.device.codeGrids.push({ type, blocks });
    return this;
  }
  addChannelCodeGrid(channel, blocks) {
    this.device.codeGrids.push({
      type: "channel_radio",
      channel: channel.toString(),
      blocks
    });
    return this;
  }
  build() {
    return this.device;
  }
};
var BuildBuilder = class {
  _build;
  constructor(positionType) {
    this._build = { positionType, devices: [] };
  }
  name(name) {
    this._build.name = name;
    return this;
  }
  devices(devices) {
    this._build.devices = devices;
    return this;
  }
  addDevice(device2) {
    if (device2 instanceof DeviceBuilder) {
      this._build.devices.push(device2.build());
    } else {
      this._build.devices.push(device2);
    }
    return this;
  }
  build() {
    return this._build;
  }
};

// src/lib/build.ts
var DeviceBuilder2 = class extends DeviceBuilder {
  constructor(deviceType) {
    super(deviceType);
  }
};
var BuildBuilder2 = class extends BuildBuilder {
  constructor(positionType) {
    super(positionType);
  }
};
function transform(x = 0, y = 0) {
  return new TransformBuilder(x, y);
}
function device(deviceType) {
  return new DeviceBuilder2(deviceType);
}
function build(positionType) {
  return new BuildBuilder2(positionType);
}
export {
  BuildBuilder2 as BuildBuilder,
  BuildBuilder as BuildBuilderGeneric,
  DeviceBuilder2 as DeviceBuilder,
  DeviceBuilder as DeviceBuilderGeneric,
  TransformBuilder,
  build,
  device,
  transform
};
