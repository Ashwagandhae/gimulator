import { Program } from 'gimblocks';

type DeviceBase = {
    transform: Transform;
};
type Transform = {
    x: number;
    y: number;
    depth?: number;
};
type ChannelCodeGrid<Program> = {
    type: 'channel_radio';
    channel: string;
    blocks: Program;
};
type Color = `#${string}`;

type AssignmentCheckpointDevice<Program> = DeviceBase & {
    type: "assignmentCheckpoint";
    options: {
        action: "set" | "increment" | "decrement";
        actionValue: number | undefined;
        applyActionOnChannel: string;
    };
    codeGrids: ({
        type: "wire";
        blocks: Program;
    } | ChannelCodeGrid<Program>)[];
};
type AssignmentContextDevice<Program> = DeviceBase & {
    type: "assignmentContext";
    options: {
        objective: string;
    };
    codeGrids: {
        type: "WHEN_PLAYER_LOADS_IN";
        blocks: Program;
    }[];
};
type BackgroundTilesZoneDevice = DeviceBase & {
    type: "backgroundTilesZone";
    options: {
        terrainId: string;
        layer: "AdditionalBackground1" | "AdditionalBackground2";
        width: number;
        height: number;
    };
    codeGrids: never[];
};
type BallDevice = DeviceBase & {
    type: "ball";
    options: {
        appearance: "primary" | "inverted" | "blue" | "green" | "purple" | "red" | "solid" | "teal" | "yellow";
        resetCooldown: number;
        topSpeed: 500 | 1000 | 1500 | 2000 | 2500;
        hitSensitivity: 0.5 | 1 | 1.5 | 2 | 2.5;
        bounciness: number;
        damping: number;
        massMultiplier: 0.5 | 1 | 1.5 | 2 | 2.5;
        radius: number;
        activeOnStart: true | false;
        activateChannel: string;
        deactivateChannel: string;
        identifier: string;
    };
    codeGrids: never[];
};
type BallZoneDevice = DeviceBase & {
    type: "ballZone";
    options: {
        resetTheBall: true | false;
        visibleInGame: true | false;
        style: "None" | "Blastball";
        side: "Left" | "Right";
        color: Color;
        backgroundAlpha: number;
        activeOnStart: true | false;
        ballEntersChannel: string;
        activateChannel: string;
        deactivateChannel: string;
        width: number;
        height: number;
    };
    codeGrids: never[];
};
type BarrierDevice = DeviceBase & {
    type: "barrier";
    options: {
        shape: "rectangle" | "circle";
        activeOnGameStart: true | false;
        color: Color;
        scope: "global" | "player" | "team";
        activateChannel: string;
        deactivateChannel: string;
        alpha: number;
        showBorder: true | false;
        visibleInGame: true | false;
        collisionEnabled: true | false;
        height: number;
        width: number;
        angle: number;
        radius: number;
    };
    codeGrids: never[];
};
type BlockingZoneDevice = DeviceBase & {
    type: "blockingZone";
    options: {
        blockBuilding: 1 | 2 | 3;
        visibleInGame: true | false;
        color: Color;
        activeOnStart: true | false;
        activateChannel: string;
        deactivateChannel: string;
        width: number;
        height: number;
    };
    codeGrids: never[];
};
type ButtonDevice = DeviceBase & {
    type: "button";
    options: {
        guiMessage: string;
        channel: string;
        visibleInGame: true | false;
        interactionDuration: 0 | 1 | 3 | 5;
        activeOnStart: true | false;
        activateChannel: string;
        deactivateChannel: string;
        scope: "global" | "player" | "team";
        radius: number;
        size: number;
    };
    codeGrids: never[];
};
type CameraPointDevice = DeviceBase & {
    type: "cameraPoint";
    options: {
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type CameraSizeDevice = DeviceBase & {
    type: "cameraSize";
    options: {
        width: number;
        height: number;
    };
    codeGrids: never[];
};
type CharacterDevice = DeviceBase & {
    type: "character";
    options: {
        skinId: string;
        flipX: false | true;
        interactionEnabled: true | false;
        interactionMessage: string;
        interactionChannel: string;
        interactionDuration: 0 | 1 | 3 | 5;
        activeOnStart: true | false;
        activateChannel: string;
        deactivateChannel: string;
        scope: "global" | "player" | "team";
        radius: number;
    };
    codeGrids: never[];
};
type CheckerDevice = DeviceBase & {
    type: "checker";
    options: {
        checkWhenReceivedOnChannel: string;
        whenValidTransmitOnChannel: string;
        whenInvalidTransmitOnChannel: string;
        check1Type: "none" | "item" | "property" | "score";
        check1ScoreComparison: "less" | "equal" | "greater";
        check1ScoreValue: number;
        check1PropertyName: string;
        check1PropertyComparison: "less" | "equal" | "greater";
        check1PropertyValue: number;
        check1ItemId: string | undefined;
        check1ItemComparison: "less" | "equal" | "greater";
        check1ItemValue: number;
        check2Type: "none" | "item" | "property" | "score";
        check2ScoreComparison: "less" | "equal" | "greater";
        check2ScoreValue: number;
        check2PropertyName: string;
        check2PropertyComparison: "less" | "equal" | "greater";
        check2PropertyValue: number;
        check2ItemId: string | undefined;
        check2ItemComparison: "less" | "equal" | "greater";
        check2ItemValue: number;
        check3Type: "none" | "item" | "property" | "score";
        check3ScoreComparison: "less" | "equal" | "greater";
        check3ScoreValue: number;
        check3PropertyName: string;
        check3PropertyComparison: "less" | "equal" | "greater";
        check3PropertyValue: number;
        check3ItemId: string | undefined;
        check3ItemComparison: "less" | "equal" | "greater";
        check3ItemValue: number;
        check4Type: "none" | "item" | "property" | "score";
        check4ScoreComparison: "less" | "equal" | "greater";
        check4ScoreValue: number;
        check4PropertyName: string;
        check4PropertyComparison: "less" | "equal" | "greater";
        check4PropertyValue: number;
        check4ItemId: string | undefined;
        check4ItemComparison: "less" | "equal" | "greater";
        check4ItemValue: number;
        check5Type: "none" | "item" | "property" | "score";
        check5ScoreComparison: "less" | "equal" | "greater";
        check5ScoreValue: number;
        check5PropertyName: string;
        check5PropertyComparison: "less" | "equal" | "greater";
        check5PropertyValue: number;
        check5ItemId: string | undefined;
        check5ItemComparison: "less" | "equal" | "greater";
        check5ItemValue: number;
        checkCount: 1 | 2 | 3 | 4 | 5;
        operation: "and" | "or";
    };
    codeGrids: never[];
};
type CheckpointDevice = DeviceBase & {
    type: "checkpoint";
    options: {
        enabled: true | false;
        visibleInGame: true | false;
        playAudio: true | false;
        maxActivations: 0 | 1;
        setAsActiveChannel: string;
        onActiveChannel: string;
        width: number;
    };
    codeGrids: never[];
};
type ClassDesignerDevice = DeviceBase & {
    type: "classDesigner";
    options: {
        activateChannel: string;
        allowedToUseGadget: 1 | 2 | 3;
        immunity: 1 | 2 | 3;
    };
    codeGrids: never[];
};
type CosmosModifierDevice = DeviceBase & {
    type: "cosmosModifier";
    options: {
        skinId: string;
        trailId: string;
        applyChannel: string;
        resetChannel: string;
    };
    codeGrids: never[];
};
type CountdownDevice<Program> = DeviceBase & {
    type: "countdown";
    options: {
        minutes: number;
        seconds: number;
        startWhenReceivingFrom: string;
        onEndTransmitOn: string;
    };
    codeGrids: {
        type: "OnTick";
        blocks: Program;
    }[];
};
type CounterDevice = DeviceBase & {
    type: "counter";
    options: {
        startingValue: number;
        incrementWhenReceivingOn: string;
        decrementWhenReceivingOn: string;
        visibleInGame: true | false;
        scope: "global" | "player" | "team";
        resetToStartingValueWhenReceivingOn: string;
        updateProperty: true | false;
        property: string;
        useTarget: true | false;
        target: number;
        whenTargetReachedTransmitOn: string;
    };
    codeGrids: never[];
};
type CraftingRecipeDevice = DeviceBase & {
    type: "craftingRecipe";
    options: {
        item: string | undefined;
        itemAmount: number;
        numberOfIngredients: 1 | 2 | 3 | 4 | 5;
        ingredient1Item: string | undefined;
        ingredient1Amount: number;
        ingredient2Item: string | undefined;
        ingredient2Amount: number;
        ingredient3Item: string | undefined;
        ingredient3Amount: number;
        ingredient4Item: string | undefined;
        ingredient4Amount: number;
        ingredient5Item: string | undefined;
        ingredient5Amount: number;
        timeToCraftMs: 0 | 1000 | 3000 | 5000 | 10000 | 20000 | 30000 | 60000 | 120000 | 180000 | 240000 | 300000 | 600000 | 900000 | 1200000;
        itemDisposes: true | false;
        disposeItemAfterMs: 5000 | 10000 | 20000 | 30000 | 60000 | 120000 | 180000 | 240000 | 300000 | 600000 | 900000 | 1200000;
        group: string;
        activeOnGameStart: true | false;
        whenCraftingStartsChannel: string;
        whenCraftedChannel: string;
        activeScope: "global" | "player" | "team";
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type CraftingTableDevice = DeviceBase & {
    type: "craftingTable";
    options: {
        style: "craft" | "plant";
        craftingScope: "global" | "player" | "team";
        group: string;
        useCrafterCollectionAdvantage: true | false;
        channelItemBeginsCrafting: string;
        channelItemFinishesCrafting: string;
        channelItemCollected: string;
        channelItemDisposed: string;
    };
    codeGrids: never[];
};
type DamageBoostDevice = DeviceBase & {
    type: "damageBoost";
    options: {
        multiplier: 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2.5 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
        durationMS: -1 | 5000 | 10000 | 20000 | 30000 | 60000 | 120000 | 180000 | 300000;
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type DamagerDevice<Program> = DeviceBase & {
    type: "damager";
    options: {
        amount: number;
        damageOnChannel: string;
        knockoutActivityFeedMessage: string;
    };
    codeGrids: ({
        type: "wire";
        blocks: Program;
    } | ChannelCodeGrid<Program>)[];
};
type DialogueDevice = DeviceBase & {
    type: "dialogue";
    options: {
        message: string;
        group: string;
        action1Text: string;
        action1Channel: string;
        action2Text: string;
        action2Channel: string;
        action3Text: string;
        action3Channel: string;
        action4Text: string;
        action4Channel: string;
        font: "Rubik" | "Roboto" | "Staatliches" | "Galindo" | "Kalam" | "Bangers" | "Fugaz One" | "Outfit" | "PT Mono" | "Space Grotesk" | "Lobster" | "Zeyada" | "Titan One" | "Rye" | "Caprasimo";
        character: string;
        typewriter: true | false;
        darkenBackground: true | false;
        openChannel: string;
        closeChannel: string;
        whenClosedChannel: string;
    };
    codeGrids: never[];
};
type DialogueActionDevice = DeviceBase & {
    type: "dialogueAction";
    options: {
        text: string;
        group: string;
        selectChannel: string;
        scope: "global" | "player" | "team";
        activeOnGameStart: true | false;
        deactivateAfterUse: true | false;
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type DroppedItemDevice = DeviceBase & {
    type: "droppedItem";
    options: {
        itemId: string | undefined;
        amount: number;
        placedByCharacterId: string;
        useCurrentClipCount: true | false;
        currentClip: number;
        useCurrentDurability: true | false;
        currentDurability: number;
        decay: number;
    };
    codeGrids: never[];
};
type EndGameDevice = DeviceBase & {
    type: "endGame";
    options: {
        activateWhenReceivingFrom: string;
    };
    codeGrids: never[];
};
type EndOfGameWidgetDevice = DeviceBase & {
    type: "endOfGameWidget";
    options: {
        widgetType: "Statistic" | "Image" | "Game Time";
        widgetPlacement: "Featured" | "Primary" | "Secondary";
        statisticProperty: string;
        gameTimeLabel: string;
        statisticLabel: string;
        imageStyle: "Contain" | "Cover" | "fullWidth";
        imageUrl: string;
        imageHeight: number;
        imageBackgroundColor: Color;
        showTo: "all" | "nonGameOwners" | "gameOwners";
        showForModeType: "all" | "liveGame" | "assignment";
        activeOnGameStart: true | false;
        scope: "global" | "player" | "team";
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type FlagDevice = DeviceBase & {
    type: "flag";
    options: {
        flagColor: "black" | "blue" | "green" | "orange" | "purple" | "red" | "white";
        owningTeamId: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        useSafeZone: true | false;
        automaticBackToBaseAfterSeconds: number;
        otherTeamPickupAlerts: true | false;
        onCapturedBroadcastOnChannel: string;
        captureWhenReceiveFromChannel: string;
        onPickupBroadcastOnChannel: string;
        onPickupFromBaseBroadcastOnChannel: string;
        onDropBroadcastOnChannel: string;
        dropWhenReceiveFromChannel: string;
        onBackToBaseBroadcastOnChannel: string;
        onBackToBaseManuallyBroadcastOnChannel: string;
        backToBaseWhenReceiveFromChannel: string;
        radius: number;
    };
    codeGrids: never[];
};
type CaptureFlagZoneDevice = DeviceBase & {
    type: "captureFlagZone";
    options: {
        flagColor: "black" | "blue" | "green" | "orange" | "purple" | "red" | "white";
        activeOnStart: true | false;
        visibleInGame: true | false;
        color: Color;
        whenCapturedTransmitOnChannel: string;
        activateChannel: string;
        deactivateChannel: string;
        width: number;
        height: number;
        rotation: number;
    };
    codeGrids: never[];
};
type GuiDeviceDevice<Program> = DeviceBase & {
    type: "guiDevice";
    options: {
        type: "Text" | "Button" | "Tracked Item";
        position: "Top Left" | "Top Right" | "Bottom Left" | "Bottom Right";
        text: string;
        trackedItemId: string | undefined;
        showTrackedItemMaximumAmount: true | false;
        whenButtonClickedTransmitOnChannel: string;
        showOnGameStart: true | false;
        color: Color;
        contentScope: "global" | "player" | "team";
        visibilityScope: "global" | "player" | "team";
        showWhenReceivingFromChannel: string;
        hideWhenReceivingFromChannel: string;
    };
    codeGrids: ChannelCodeGrid<Program>[];
};
type HealthGranterDevice = DeviceBase & {
    type: "healthGranter";
    options: {
        amount: number;
        grantType: "health" | "shield" | "healthFirst";
        grantChannel: string;
    };
    codeGrids: never[];
};
type ImageBillboardDevice<Program> = DeviceBase & {
    type: "imageBillboard";
    options: {
        imageUrl: string;
        frameColor: "#212121" | "#fafafa" | "#455a64" | "#8A24E0" | "#1b5e20" | "#01579b" | "#c62828" | "Transparent";
        scope: "global" | "player" | "team";
        alpha: number;
        visibleOnGameStart: "Yes" | "No";
        showWhenReceivingFrom: string;
        hideWhenReceivingFrom: string;
        visibleDuringPhase: "all" | "game" | "preGame";
        width: number;
        height: number;
        rotation: number;
    };
    codeGrids: ({
        type: "wire";
        blocks: Program;
    } | ChannelCodeGrid<Program>)[];
};
type InventoryItemManagerDevice<Program> = DeviceBase & {
    type: "inventoryItemManager";
    options: {
        itemId: string | undefined;
        useAsDefault: true | false;
        activateWhenReceivingFrom: string;
        useMaxAmount: true | false;
        maxAmount: number;
        overrideRespawnBehavior: true | false;
        respawnBehavior: "Keep" | "Delete";
        showAlert: true | false;
        customItemName: string;
        customItemDescription: string;
        clearItemFromInventoryOnChannel: string;
        updateProperty: true | false;
        property: string;
    };
    codeGrids: {
        type: "WHEN_AMOUNT_OF_ITEM_CHANGES";
        blocks: Program;
    }[];
};
type ItemGranterDevice<Program> = DeviceBase & {
    type: "itemGranter";
    options: {
        itemId: string | undefined;
        itemChange: number;
        grantWhenReceivingFromChannel: string;
        fullStrategy: "overflow" | "safeAmount" | "noGrant";
        initialWeaponAmmo: number | undefined;
    };
    codeGrids: ({
        type: "WHEN_GRANTED";
        blocks: Program;
    } | {
        type: "wire";
        blocks: Program;
    } | ChannelCodeGrid<Program>)[];
};
type ItemImageDevice = DeviceBase & {
    type: "itemImage";
    options: {
        itemId: string | undefined;
        outline: true | false;
        outlineColor: Color;
        outlineSize: "automatic" | "custom";
        customOutlineSize: number;
        visibleOnGameStart: true | false;
        scope: "global" | "player" | "team";
        showChannel: string;
        hideChannel: string;
        size: number;
        angle: number;
    };
    codeGrids: never[];
};
type ItemSpawnerDevice = DeviceBase & {
    type: "itemSpawner";
    options: {
        itemId: string | undefined;
        itemAmount: number;
        msTimeBetweenSpawns: 0 | 1000 | 3000 | 5000 | 10000 | 30000 | 60000 | 120000 | 180000 | 300000 | 600000;
        scope: "global" | "player" | "team";
    };
    codeGrids: never[];
};
type KnockoutManagerDevice<Program> = DeviceBase & {
    type: "knockoutManager";
    options: {
        target: "player" | "sentry";
        onKnockoutChannel: string;
        grantItem: true | false;
        itemId: string | undefined;
        itemAmount: number;
        grantStrategy: "grant" | "onPlayer" | "onKnockedOutLocation";
        dropChance: true | false;
        dropPercentage: number;
        activeOnGameStart: true | false;
        scope: "global" | "player" | "team";
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: {
        type: "onKnockout";
        blocks: Program;
    }[];
};
type LaserBeamDevice = DeviceBase & {
    type: "laserBeam";
    options: {
        damageToDeal: number;
        appearance: "Standard" | "Plant";
        laserColor: Color;
        activeOnGameStart: true | false;
        laserGroup: string;
        scope: "global" | "player" | "team";
        transmitOnWhenHitPlayer: string;
        activateOnChannel: string;
        deactivateOnChannel: string;
        angle: number;
        distance: number;
        showPath: true | false;
        showOrigin: true | false;
        showEndPoint: true | false;
    };
    codeGrids: never[];
};
type LaserBeamManagerDevice = DeviceBase & {
    type: "laserBeamManager";
    options: {
        laserGroup: string;
        autoSwitch: true | false;
        activatedDuration: number;
        deactivatedDuration: number;
        activateOnChannel: string;
        deactivateOnChannel: string;
    };
    codeGrids: never[];
};
type LifecycleDevice = DeviceBase & {
    type: "lifecycle";
    options: {
        event: "Game Starts" | "characterStartsMoving" | "characterStopsMoving" | "characterJoinsLate" | "characterKnocksOut" | "characterKnockedOut" | "characterFiresGadget" | "characterDestroysTerrain" | "characterPlacesTerrain";
        transmitOnChannel: string;
    };
    codeGrids: never[];
};
type MapOptionsDevice = DeviceBase & {
    type: "mapOptions";
    options: {
        backgroundTerrain: string;
        platformerBackground: "sky" | "pixelStar";
        bottomTerrain: string;
        gameClockMode: "Off" | "Count Down" | "Count Up";
        countdownTimeMinutes: number;
        allowedGameClockModeType: "all" | "liveGame" | "assignment";
        musicUrl: string;
        presetMusicId: "NONE" | "the_shakedown" | "anchor_crawl" | "stay_up_high" | "whisperer" | "heroes_are_back" | "all_out" | "four_am" | "inferno" | "demogorgon" | "surfin_versailles";
        musicVolume: number;
        minPlayers: 1 | 2;
        teams: "Free For All" | "Cooperative" | "Split Into Size" | "Specific Team Amount";
        teamSize: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
        teamsNumber: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
        splitModeForSpecificTeamAmount: "Split Evenly" | "Random" | "Custom";
        latePlayersJoinAsSpectators: true | false;
        allyIndicator: "Disabled" | "Enabled";
        enemyIndicator: "Disabled" | "Enabled";
        allowGameOwnerToSpectate: true | false;
        healthMode: "healthAndShield" | "fragility";
        maxHealth: 1 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 75 | 100 | 125 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 750 | 1000 | 2000 | 5000;
        maxShield: 1 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 75 | 100 | 125 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 750 | 1000 | 2000 | 5000;
        startingHealth: 1 | 25 | 50 | 75 | 100;
        startingShield: 0 | 25 | 50 | 75 | 100;
        startingFragility: number;
        showHealthAndShield: true | false;
        spawnImmunity: number;
        playerVsPlayerDamageEnabled: true | false;
        interactiveItemsSlots: 0 | 1 | 2 | 3 | 4 | 5;
        infiniteAmmo: true | false;
        instantReload: true | false;
        allowWeaponDrop: true | false;
        allowItemDrop: true | false;
        allowResourceDrop: true | false;
        weaponRespawnBehavior: "Keep" | "Delete";
        itemRespawnBehavior: "Keep" | "Delete";
        resourceRespawnBehavior: "Keep" | "Delete";
        infiniteDurability: true | false;
        droppedItemScope: "global" | "player" | "team";
        useScoreboard: true | false;
        scoreType: "Knockout" | "Resource" | "Property";
        scoreResource: string | undefined;
        propertyResource: string;
        scoreName: string;
        scoreGroup: "player" | "team";
        sortMode: "Highest to lowest" | "Lowest to Highest";
        showScoreboardOnGameEnd: true | false;
        showPlayersPlacement: true | false;
        knockoutActivityFeedDisabled: true | false;
        dynamicBuildingAllowFloatingBuilds: true | false;
    };
    codeGrids: never[];
};
type MoodDevice = DeviceBase & {
    type: "mood";
    options: {
        useVignette: true | false;
        vignetteStrength: number;
        activeOnGameStart: true | false;
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type MovementMeterDevice = DeviceBase & {
    type: "movementMeter";
    options: {
        itemToTrack: string | undefined;
        drainAmount: number;
        drainIntervalMs: 250 | 500 | 1000;
        outOfItemChannel: string;
        speedWhenOutOfItem: number;
        useAsDefault: true | false;
        warningAmount: number;
        warningChannel: string;
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type MusicDevice = DeviceBase & {
    type: "music";
    options: {
        audioUrl: string;
        volume: number;
        playWhenReceivingFrom: string;
        stopWhenReceivingFrom: string;
    };
    codeGrids: never[];
};
type NotificationDevice<Program> = DeviceBase & {
    type: "notification";
    options: {
        title: string;
        description: string;
        notifyChannel: string;
        notificationType: "none" | "info" | "success" | "warning" | "error";
        notificationPlacement: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
        notificationDurationStrategy: "auto" | "manual";
        customDurationSeconds: number;
        sendTo: "characterTriggering" | "allOnTeam" | "allOnTeamExceptTriggeringPlayer" | "allCharacters";
    };
    codeGrids: ({
        type: "wire";
        blocks: Program;
    } | ChannelCodeGrid<Program>)[];
};
type OutlineDevice = DeviceBase & {
    type: "outline";
    options: {
        shape: "rectangle" | "circle";
        lineLength: number;
        circleRadius: number;
        circlePercentage: number;
        circleFill: true | false;
        thickness: number;
        angle: number;
        color: Color;
        alpha: number;
        style: "solid" | "dashed";
        dashLength: number;
        dashSpacing: number;
        visibleOnGameStart: true | false;
        showChannel: string;
        hideChannel: string;
        scope: "global" | "player" | "team";
    };
    codeGrids: never[];
};
type PasswordLockDevice = DeviceBase & {
    type: "passwordLock";
    options: {
        password: string;
        onSuccessChannel: string;
        openChannel: string;
        useMaxAttempts: true | false;
        maxAttempts: number;
        maxAttemptsScope: "global" | "player" | "team";
        outOfAttemptsChannel: string;
    };
    codeGrids: never[];
};
type PlacedStickerDevice = DeviceBase & {
    type: "placedSticker";
    options: {
        stickerId: string;
        depth: number;
        scale: number;
        placedByCharacterId: string;
        placedAtTimeStamp: number;
    };
    codeGrids: never[];
};
type PlayerAppearanceModifierDevice = DeviceBase & {
    type: "playerAppearanceModifier";
    options: {
        modifyTransparency: true | false;
        transparencyAmount: number;
        selfTransparency: "match" | "custom";
        selfTransparencyAmount: number;
        modifyTint: true | false;
        tint: Color;
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type PlayerPositionDetectorDevice<Program> = DeviceBase & {
    type: "playerPositionDetector";
    options: {
        whenPositionChangeDetectedTransmitOn: string;
        updateProperties: true | false;
        xProperty: string;
        yProperty: string;
    };
    codeGrids: {
        type: "On Player Position Change";
        blocks: Program;
    }[];
};
type CharacterProximityDevice<Program> = DeviceBase & {
    type: "characterProximity";
    options: {
        detectionArea: "everywhere" | "zone";
        allowedMatch: "everybody" | "sameTeam" | "differentTeam";
        channelFound: string;
        channelLost: string;
        broadcastAs: "everybody" | "firstPerson";
        activeOnGameStart: true | false;
        activateWhenReceivingFrom: string;
        deactivateWhenReceivingFrom: string;
        detectionDistance: number;
        width: number;
        height: number;
        delay: number;
    };
    codeGrids: ({
        type: "onFound";
        blocks: Program;
    } | {
        type: "onLost";
        blocks: Program;
    })[];
};
type TextExplainerDevice<Program> = DeviceBase & {
    type: "textExplainer";
    options: {
        header: string;
        content: string;
        openWhenReceivingFrom: string;
        iconImage: string;
        style: "modal" | "banner";
        callToActionLabel: string;
        callToActionChannel: string;
        secondaryCallToActionLabel: string;
        secondaryCallToActionChannel: string;
        scope: "global" | "player" | "team";
        backgroundColor: Color;
        fontFamily: "Rubik" | "Roboto" | "Staatliches" | "Galindo" | "Kalam" | "Bangers" | "Fugaz One" | "Outfit" | "PT Mono" | "Space Grotesk" | "Lobster" | "Zeyada" | "Titan One" | "Rye" | "Caprasimo";
        closableByUser: true | false;
        closeWhenReceivingFrom: string;
        whenClosedTransmitOn: string;
    };
    codeGrids: ({
        type: "wire";
        blocks: Program;
    } | ChannelCodeGrid<Program>)[];
};
type ProceduralTerrainZoneDevice = DeviceBase & {
    type: "proceduralTerrainZone";
    options: {
        width: number;
        height: number;
        variability: number;
        seed: string;
        collision: true | false;
        depth: 1 | 2 | 3 | 4 | 5;
    };
    codeGrids: never[];
};
type ProceduralTerrainZoneZoneInstructionDevice = DeviceBase & {
    type: "proceduralTerrainZoneZoneInstruction";
    options: {
        terrain: string | undefined;
        weight: number;
        constraint1: "none" | "above" | "below" | "left" | "right" | "betweenHorizontal" | "betweenVertical";
        constraint1Column: number;
        constraint1Row: number;
        constraint1Column1: number;
        constraint1Column2: number;
        constraint1Row1: number;
        constraint1Row2: number;
        constraint2: "none" | "above" | "below" | "left" | "right" | "betweenHorizontal" | "betweenVertical";
        constraint2Column: number;
        constraint2Row: number;
        constraint2Column1: number;
        constraint2Column2: number;
        constraint2Row1: number;
        constraint2Row2: number;
    };
    codeGrids: never[];
};
type PropDevice = DeviceBase & {
    type: "prop";
    options: {
        propId: string;
        shadowsEnabled: true | false;
        shadowsPlacement: "Floor" | "Beneath Prop";
        UseColliders: true | false;
        Scale: number;
        Angle: number;
        Tint: Color;
        FlipX: true | false;
        Alpha: number;
        visibleOnGameStart: true | false;
        visibilityScope: "global" | "player" | "team";
        showWhenReceivingFrom: string;
        hideWhenReceivingFrom: string;
        canBeDamaged: true | false;
        health: number;
        onDestroyedChannel: string;
        useAdaptiveHealth: true | false;
        adaptiveHealthPerPlayer: number;
    };
    codeGrids: never[];
};
type PropertyDevice = DeviceBase & {
    type: "property";
    options: {
        propertyName: string;
        valueType: "string" | "number" | "boolean";
        defaultValueText: string;
        defaultValueNumber: number;
        defaultValueBoolean: true | false;
        propertyType: "global" | "player" | "team";
        whenValueChangesBroadcastOnChannel: string;
        broadcastValueChangesOnGameStart: true | false;
    };
    codeGrids: never[];
};
type GimkitLiveQuestionDevice<Program> = DeviceBase & {
    type: "gimkitLiveQuestion";
    options: {
        kitId: string;
        whenAnsweredCorrectlyTransmitOn: string;
        whenAnsweredIncorrectlyTransmitOn: string;
        openWhenReceivingOn: string;
        closable: true | false;
        textShownWhenAnsweringCorrectly: string;
        textShownWhenAnsweringIncorrectly: string;
        textShownWhenAnsweringScope: "global" | "player" | "team";
        closeWhenReceivingOn: string;
        enableWhenReceivingOn: string;
        disableWhenReceivingOn: string;
        whenOpenedChannel: string;
        whenClosedChannel: string;
        sound: "none" | "default" | "gimkitLive" | "advanced";
        correctSound: "none" | "default" | "gimkitLive";
        incorrectSound: "none" | "default" | "gimkitLive";
        actionSound: "none" | "default" | "gimkitLive";
        useCustomAction: true | false;
        customActionText: string;
        channelToTriggerCustomAction: string;
        size: number;
    };
    codeGrids: ({
        type: "whenQuestionAnsweredCorrectly";
        blocks: Program;
    } | {
        type: "whenQuestionAnsweredIncorrectly";
        blocks: Program;
    } | {
        type: "wire";
        blocks: Program;
    } | ChannelCodeGrid<Program>)[];
};
type RelayDevice = DeviceBase & {
    type: "relay";
    options: {
        relayAs: "All Players" | "All Other Players" | "All Players On My Team" | "Random Player" | "All Players On Team..." | "Random Player On Team" | "Single Player On Each Team";
        team: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        channelToTrigger: string;
        triggerWhenReceivingOnChannel: string;
    };
    codeGrids: never[];
};
type RepeaterDevice = DeviceBase & {
    type: "repeater";
    options: {
        startChannel: string;
        actionChannel: string;
        repeatInterval: number;
        stopRepeatingStrategy: "time" | "numberOfRepetitions" | "channel";
        timePeriod: number;
        numberOfRepetitions: number;
        stopChannel: string;
        maxConcurrentTasksPerPlayer: number;
        triggerTaskOnStart: true | false;
    };
    codeGrids: never[];
};
type RespawnDevice = DeviceBase & {
    type: "respawn";
    options: {
        respawnOnChannel: string;
    };
    codeGrids: never[];
};
type ScorebarDevice = DeviceBase & {
    type: "scorebar";
    options: {
        numberOfTeams: 1 | 2 | 3 | 4;
        team1: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        colorTeam1: Color;
        team2: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        colorTeam2: Color;
        team3: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        colorTeam3: Color;
        team4: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        colorTeam4: Color;
    };
    codeGrids: never[];
};
type SentryDevice = DeviceBase & {
    type: "sentry";
    options: {
        weapon: string | undefined;
        aimAccuracy: 0 | 0.25 | 0.5 | 0.7 | 0.9 | 1;
        fireRate: 0 | 0.1 | 0.25 | 0.5 | 0.75 | 0.9 | 1;
        baseHealth: number;
        baseShield: number;
        useAdaptiveHealth: true | false;
        adaptiveHealth: number;
        adaptiveShield: number;
        skinId: "character_sentryRobot" | "character_evilPlantGreen" | "character_evilPlantPink" | "character_skeleton" | "character_pirate" | "character_redDinoCostume" | "character_detective" | "character_echoAgent" | "character_redNinja" | "character_luchador" | "character_mummy" | "character_witch" | "character_mustache" | "character_vortexAgent";
        team: "__SENTRY_TEAM" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        doesRespawn: true | false;
        respawnDurationSeconds: number;
        characterName: string;
        rangeRadius: number;
        dropItem: true | false;
        itemId: string | undefined;
        itemAmount: number;
        onKnockoutChannel: string;
        activeOnGameStart: true | false;
        activateChannel: string;
        deactivateChannel: string;
    };
    codeGrids: never[];
};
type ShadowDevice = DeviceBase & {
    type: "shadow";
    options: {
        width: number;
        height: number;
    };
    codeGrids: never[];
};
type SoundEffectDevice = DeviceBase & {
    type: "soundEffect";
    options: {
        audioUrl: string;
        volume: number;
        playWhenReceivingFrom: string;
        characterType: "all" | "gameOwner";
    };
    codeGrids: never[];
};
type CharacterSpawnPadDevice = DeviceBase & {
    type: "characterSpawnPad";
    options: {
        visibleInGame: true | false;
        phase: "All" | "Game" | "Pre-Game";
        teamId: "__ANY_TEAM__" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        characterType: "all" | "gameOwner" | "nonGameOwner";
    };
    codeGrids: never[];
};
type SpeedDevice = DeviceBase & {
    type: "speed";
    options: {
        speed: number;
        activateWhenReceivingFrom: string;
    };
    codeGrids: never[];
};
type StartingInventoryDevice = DeviceBase & {
    type: "startingInventory";
    options: {
        itemId: string | undefined;
        itemAmount: number;
        equipOnGrant: true | false;
        grantDuringPhase: "all" | "game" | "preGame";
        grantForSavedCharacters: true | false;
        enabled: true | false;
    };
    codeGrids: never[];
};
type TagZoneDevice<Program> = DeviceBase & {
    type: "tagZone";
    options: {
        taggingTeam: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        whenTaggedTransmitOn: string;
        whenTagsTransmitOn: string;
        respawnWhenTagged: true | false;
        detectionArea: "everywhere" | "zone";
        detectionDistance: number;
        activeOnGameStart: true | false;
        activateWhenReceivingFrom: string;
        deactivateWhenReceivingFrom: string;
        width: number;
        height: number;
    };
    codeGrids: ({
        type: "onTags";
        blocks: Program;
    } | {
        type: "onTagged";
        blocks: Program;
    })[];
};
type TeamSettingsDevice<Program> = DeviceBase & {
    type: "teamSettings";
    options: {
        team: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        teamName: string;
        whenPlayerJoinsTransmitOn: string;
        maxPlayers: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60;
        placementPriorityOnGameStart: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60;
        placementPriorityDuringGame: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60;
        allowCustomHostPlacement: true | false;
    };
    codeGrids: {
        type: "WHEN_PLAYER_COUNT_CHANGES";
        blocks: Program;
    }[];
};
type TeamSwitcherDevice = DeviceBase & {
    type: "teamSwitcher";
    options: {
        switchToStrategy: "randomTeam" | "specificTeam";
        specificTeam: "__SPECTATORS_TEAM" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        switchChannel: string;
    };
    codeGrids: never[];
};
type TeleporterDevice = DeviceBase & {
    type: "teleporter";
    options: {
        group: string;
        targetGroup: string;
        whenTeleportedHereChannel: string;
        teleportToOnChannel: string;
        teleportToTargetChannel: string;
        visibleInGame: true | false;
    };
    codeGrids: never[];
};
type TerrainLayerAppearanceDevice = DeviceBase & {
    type: "terrainLayerAppearance";
    options: {
        layer: "AdditionalBackground1" | "AdditionalBackground2";
        modifyTint: true | false;
        tint: Color;
    };
    codeGrids: never[];
};
type TextBillboardDevice<Program> = DeviceBase & {
    type: "textBillboard";
    options: {
        text: string;
        fontSize: number;
        scope: "global" | "player" | "team";
        googleFont: "Rubik" | "Roboto" | "Staatliches" | "Galindo" | "Kalam" | "Bangers" | "Fugaz One" | "Outfit" | "PT Mono" | "Space Grotesk" | "Lobster" | "Zeyada" | "Titan One" | "Rye" | "Caprasimo";
        color: Color;
        alpha: number;
        strokeThickness: number;
        strokeColor: Color;
        rotation: number;
        visibleOnGameStart: "Yes" | "No";
        showWhenReceivingFrom: string;
        hideWhenReceivingFrom: string;
    };
    codeGrids: ({
        type: "wire";
        blocks: Program;
    } | ChannelCodeGrid<Program>)[];
};
type TriggerDevice<Program> = DeviceBase & {
    type: "trigger";
    options: {
        channelToTrigger: string;
        triggerWhenReceivingOnChannel: string;
        triggerDelay: number | undefined;
        visibleInGame: true | false;
        team: "__ANY_TEAM__" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        maxTriggers: number | undefined;
        scope: "global" | "player" | "team";
        allowedModeType: "all" | "liveGame" | "assignment";
        activeOnGameStart: true | false;
        activateChannel: string;
        deactivateChannel: string;
        activeScope: "global" | "player" | "team";
        triggeredByPlayerCollision: true | false;
    };
    codeGrids: {
        type: "WHEN_TRIGGERED";
        blocks: Program;
    }[];
};
type VendingMachineDevice = DeviceBase & {
    type: "vendingMachine";
    options: {
        grantAction: "Grant Item" | "Broadcast On Channel";
        requiredItemId: string | undefined;
        amountOfRequiredItem: number;
        grantedItemId: string | undefined;
        amountOfGrantedItem: number;
        purchaseChannel: string;
        visibleInGame: true | false;
        grantedItemImageUrl: string;
        grantedItemName: string;
        grantedItemDescription: string;
        deactivateOnPurchase: true | false;
        useAdaptiveCost: true | false;
        adaptiveCostIncreasePerPlayer: number;
        allowFunding: true | false;
        fundingScope: "global" | "player" | "team";
        useLimitedStock: true | false;
        maxStock: number;
        maxStockScope: "global" | "player" | "team";
        attachCostToNameWhenHidden: true | false;
        activeOnStart: true | false;
        activeScope: "global" | "player" | "team";
        activateChannel: string;
        deactivateChannel: string;
        allowedPurchaseTeam: "__ANY_TEAM__" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
        attemptToPurchaseChannel: string;
        onAttemptedPurchaseFailedChannel: string;
        interactionDuration: 0 | 1 | 3 | 5;
        matchItemRarity: true | false;
        backgroundColor1: Color;
        backgroundColor2: Color;
        raysColor: Color;
        numberOfRays: number;
        raysWidthFactor: number;
        raysAlpha: number;
        raysAdditive: true | false;
        soundEnabled: true | false;
        showShadow: true | false;
        width: number;
        height: number;
        radius: number;
    };
    codeGrids: never[];
};
type VoiceLineDevice = DeviceBase & {
    type: "voiceLine";
    options: {
        playBehavior: "interrupt" | "queue" | "cancel";
        volume: number;
        playChance: number;
        audioUrl1: string;
        audioUrl2: string;
        audioUrl3: string;
        audioUrl4: string;
        audioUrl5: string;
        audioUrl6: string;
        audioUrl7: string;
        audioUrl8: string;
        activeOnGameStart: true | false;
        playWhenReceivingOnChannel: string;
    };
    codeGrids: never[];
};
type WaypointDevice = DeviceBase & {
    type: "waypoint";
    options: {
        target: "deviceLocation" | "player" | "flag" | "ball";
        flagColor: "black" | "blue" | "green" | "orange" | "purple" | "red" | "white";
        ballId: string;
        name: string;
        useDeactivateWithinRange: true | false;
        deactivateWithinRange: number;
        startFollowingPlayer: string;
        stopFollowingPlayer: string;
        hideWhenFlagIsInBase: true | false;
        activeOnGameStart: true | false;
        color: Color;
        activateChannel: string;
        deactivateChannel: string;
        scope: "global" | "player" | "team";
    };
    codeGrids: never[];
};
type WireRepeaterDevice = DeviceBase & {
    type: "wireRepeater";
    options: {
        delaySeconds: number;
        team: "__ANY_TEAM__" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60";
    };
    codeGrids: never[];
};
type XpDevice = DeviceBase & {
    type: "xp";
    options: {
        amount: number;
        reason: string;
        grantOnChannel: string;
        useIncrementalGrant: true | false;
        incrementalGrantCharacterRequirement: number;
        useMinimumCharacterCount: true | false;
        minimumCharacterCount: number;
    };
    codeGrids: never[];
};
type ZoneDevice = DeviceBase & {
    type: "zone";
    options: {
        playerEntersChannel: string;
        playerLeavesChannel: string;
        allowWeaponFire: true | false;
        shape: "rectangle" | "circle";
        visibleInGame: true | false;
        color: Color;
        activeOnStart: true | false;
        activateChannel: string;
        deactivateChannel: string;
        allowWeaponDrop: "Do Not Override" | "Yes" | "No";
        allowItemDrop: "Do Not Override" | "Yes" | "No";
        allowResourceDrop: "Do Not Override" | "Yes" | "No";
        droppedItemDecayEnabled: true | false;
        droppedItemDecay: number;
        width: number;
        height: number;
        radius: number;
        rotation: number;
    };
    codeGrids: never[];
};
type Device$1<Program> = AssignmentCheckpointDevice<Program> | AssignmentContextDevice<Program> | BackgroundTilesZoneDevice | BallDevice | BallZoneDevice | BarrierDevice | BlockingZoneDevice | ButtonDevice | CameraPointDevice | CameraSizeDevice | CharacterDevice | CheckerDevice | CheckpointDevice | ClassDesignerDevice | CosmosModifierDevice | CountdownDevice<Program> | CounterDevice | CraftingRecipeDevice | CraftingTableDevice | DamageBoostDevice | DamagerDevice<Program> | DialogueDevice | DialogueActionDevice | DroppedItemDevice | EndGameDevice | EndOfGameWidgetDevice | FlagDevice | CaptureFlagZoneDevice | GuiDeviceDevice<Program> | HealthGranterDevice | ImageBillboardDevice<Program> | InventoryItemManagerDevice<Program> | ItemGranterDevice<Program> | ItemImageDevice | ItemSpawnerDevice | KnockoutManagerDevice<Program> | LaserBeamDevice | LaserBeamManagerDevice | LifecycleDevice | MapOptionsDevice | MoodDevice | MovementMeterDevice | MusicDevice | NotificationDevice<Program> | OutlineDevice | PasswordLockDevice | PlacedStickerDevice | PlayerAppearanceModifierDevice | PlayerPositionDetectorDevice<Program> | CharacterProximityDevice<Program> | TextExplainerDevice<Program> | ProceduralTerrainZoneDevice | ProceduralTerrainZoneZoneInstructionDevice | PropDevice | PropertyDevice | GimkitLiveQuestionDevice<Program> | RelayDevice | RepeaterDevice | RespawnDevice | ScorebarDevice | SentryDevice | ShadowDevice | SoundEffectDevice | CharacterSpawnPadDevice | SpeedDevice | StartingInventoryDevice | TagZoneDevice<Program> | TeamSettingsDevice<Program> | TeamSwitcherDevice | TeleporterDevice | TerrainLayerAppearanceDevice | TextBillboardDevice<Program> | TriggerDevice<Program> | VendingMachineDevice | VoiceLineDevice | WaypointDevice | WireRepeaterDevice | XpDevice | ZoneDevice;
type DeviceTypeMap<Program> = {
    assignmentCheckpoint: AssignmentCheckpointDevice<Program>;
    assignmentContext: AssignmentContextDevice<Program>;
    backgroundTilesZone: BackgroundTilesZoneDevice;
    ball: BallDevice;
    ballZone: BallZoneDevice;
    barrier: BarrierDevice;
    blockingZone: BlockingZoneDevice;
    button: ButtonDevice;
    cameraPoint: CameraPointDevice;
    cameraSize: CameraSizeDevice;
    character: CharacterDevice;
    checker: CheckerDevice;
    checkpoint: CheckpointDevice;
    classDesigner: ClassDesignerDevice;
    cosmosModifier: CosmosModifierDevice;
    countdown: CountdownDevice<Program>;
    counter: CounterDevice;
    craftingRecipe: CraftingRecipeDevice;
    craftingTable: CraftingTableDevice;
    damageBoost: DamageBoostDevice;
    damager: DamagerDevice<Program>;
    dialogue: DialogueDevice;
    dialogueAction: DialogueActionDevice;
    droppedItem: DroppedItemDevice;
    endGame: EndGameDevice;
    endOfGameWidget: EndOfGameWidgetDevice;
    flag: FlagDevice;
    captureFlagZone: CaptureFlagZoneDevice;
    guiDevice: GuiDeviceDevice<Program>;
    healthGranter: HealthGranterDevice;
    imageBillboard: ImageBillboardDevice<Program>;
    inventoryItemManager: InventoryItemManagerDevice<Program>;
    itemGranter: ItemGranterDevice<Program>;
    itemImage: ItemImageDevice;
    itemSpawner: ItemSpawnerDevice;
    knockoutManager: KnockoutManagerDevice<Program>;
    laserBeam: LaserBeamDevice;
    laserBeamManager: LaserBeamManagerDevice;
    lifecycle: LifecycleDevice;
    mapOptions: MapOptionsDevice;
    mood: MoodDevice;
    movementMeter: MovementMeterDevice;
    music: MusicDevice;
    notification: NotificationDevice<Program>;
    outline: OutlineDevice;
    passwordLock: PasswordLockDevice;
    placedSticker: PlacedStickerDevice;
    playerAppearanceModifier: PlayerAppearanceModifierDevice;
    playerPositionDetector: PlayerPositionDetectorDevice<Program>;
    characterProximity: CharacterProximityDevice<Program>;
    textExplainer: TextExplainerDevice<Program>;
    proceduralTerrainZone: ProceduralTerrainZoneDevice;
    proceduralTerrainZoneZoneInstruction: ProceduralTerrainZoneZoneInstructionDevice;
    prop: PropDevice;
    property: PropertyDevice;
    gimkitLiveQuestion: GimkitLiveQuestionDevice<Program>;
    relay: RelayDevice;
    repeater: RepeaterDevice;
    respawn: RespawnDevice;
    scorebar: ScorebarDevice;
    sentry: SentryDevice;
    shadow: ShadowDevice;
    soundEffect: SoundEffectDevice;
    characterSpawnPad: CharacterSpawnPadDevice;
    speed: SpeedDevice;
    startingInventory: StartingInventoryDevice;
    tagZone: TagZoneDevice<Program>;
    teamSettings: TeamSettingsDevice<Program>;
    teamSwitcher: TeamSwitcherDevice;
    teleporter: TeleporterDevice;
    terrainLayerAppearance: TerrainLayerAppearanceDevice;
    textBillboard: TextBillboardDevice<Program>;
    trigger: TriggerDevice<Program>;
    vendingMachine: VendingMachineDevice;
    voiceLine: VoiceLineDevice;
    waypoint: WaypointDevice;
    wireRepeater: WireRepeaterDevice;
    xp: XpDevice;
    zone: ZoneDevice;
};

type Build$1<Program> = {
    positionType: 'relative' | 'absolute';
    devices: Device$1<Program>[];
    name?: string;
};

declare class TransformBuilder {
    private transform;
    constructor(x?: number, y?: number);
    x(x: number): this;
    y(y: number): this;
    depth(depth: number): this;
    addX(x: number): this;
    addY(y: number): this;
    add(transform: Transform): this;
    negative(): this;
    build(): Transform;
}
declare class DeviceBuilder$1<Program, T extends keyof DeviceTypeMap<Program>> {
    private device;
    constructor(deviceType: T);
    transform(transform: Transform | TransformBuilder): this;
    options(options: Partial<DeviceTypeMap<Program>[T]['options']>): this;
    setOption<K extends keyof DeviceTypeMap<Program>[T]['options']>(key: K, value: DeviceTypeMap<Program>[T]['options'][K]): this;
    addCodeGrid(codeGrid: DeviceTypeMap<Program>[T]['codeGrids'][number]): this;
    addTriggerCodeGrid(type: EnsureTriggerType<DeviceTypeMap<Program>[T]['codeGrids'][number]['type']>, blocks: Program): this;
    addChannelCodeGrid(channel: EnsureHasChannel<Program, T, string>, blocks: Program): this;
    build(): DeviceTypeMap<Program>[T];
}
type EnsureTriggerType<T> = T extends 'channel_radio' ? never : T extends never ? never : T;
type EnsureHasChannel<Program, T extends keyof DeviceTypeMap<Program>, U> = 'channel_radio' extends DeviceTypeMap<Program>[T]['codeGrids'][number]['type'] ? U : never;
declare class BuildBuilder$1<Program> {
    private _build;
    constructor(positionType: 'relative' | 'absolute');
    name(name: string): this;
    devices(devices: Device$1<Program>[]): this;
    addDevice<T extends keyof DeviceTypeMap<Program>>(device: DeviceTypeMap<Program>[T] | DeviceBuilder$1<Program, T>): this;
    build(): Build$1<Program>;
}

type Build = Build$1<Program>;
type Device = Device$1<Program>;
declare class DeviceBuilder<T extends keyof DeviceTypeMap<Program>> extends DeviceBuilder$1<Program, T> {
    constructor(deviceType: T);
}
declare class BuildBuilder extends BuildBuilder$1<Program> {
    constructor(positionType: 'relative' | 'absolute');
}
declare function transform(x?: number, y?: number): TransformBuilder;
declare function device<T extends keyof DeviceTypeMap<Program>>(deviceType: T): DeviceBuilder<T>;
declare function build(positionType: 'relative' | 'absolute'): BuildBuilder;

export { Build, BuildBuilder, BuildBuilder$1 as BuildBuilderGeneric, Device, DeviceBuilder, DeviceBuilder$1 as DeviceBuilderGeneric, Transform, TransformBuilder, build, device, transform };
