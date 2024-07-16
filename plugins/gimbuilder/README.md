# Gimbuilder

A library for [Gimloader](https://github.com/TheLazySquid/Gimloader) that programatically creates devices from [gimbuild](https://github.com/Ashwagandhae/gimbuild) JSON.

## Usage

Add the library to your project by adding

```javascript
/**
 * @needsLib Gimbuilder | https://raw.githubusercontent.com/Ashwagandhae/gimbuild/main/plugins/gimbuilder/build/Gimbuilder.js
 */
```

to your plugin's header (see [Gimloader docs](https://github.com/TheLazySquid/Gimloader/wiki/Plugin---Library-Headers) for more info).

Then, you can build and unbuild:

```javascript
// build a red text billboard at (16000, 16000) with the text 'hello world'
let unbuilder = await GL.lib('Gimbuilder').build({
  positionType: 'absolute',
  devices: [
    {
      type: 'textBillboard',
      transform: { x: 16000, y: 16000 },
      options: {
        text: 'hello world',
        fontSize: 21,
        scope: 'global',
        googleFont: 'Roboto',
        color: '#FF0000',
        alpha: 1,
        strokeThickness: 0,
        strokeColor: '#000000',
        rotation: 0,
        visibleOnGameStart: 'Yes',
        showWhenReceivingFrom: '',
        hideWhenReceivingFrom: '',
      },
      codeGrids: [],
    },
  ],
});

// remove the devices
GL.lib('Gimbuilder').unbuild(unbuilder);
```

See [gimbuild](https://github.com/Ashwagandhae/gimbuild/tree/main) for a more ergonomic way to create the build JSON.
