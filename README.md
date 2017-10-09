#Leaflet.ReactiveMeasure

This plugin extends Leaflet.Draw to provide a Measure Control on both visualization and edition mode.

Works with Leaflet 0.7.x and Leaflet.Draw 0.3.x

## Usage

```
L.ReactiveMeasureControl(editionLayer, {
  metric: true,
  feet: false
}).addTo(map)

```

## Installation
  Via NPM: ```npm install leaflet-reactive-measure```

  Include ```dist/reactive_measure.js``` on your page.

  Or, if using via CommonJS (Browerify, Webpack, etc.):
  ```
var L = require('leaflet')
require('leaflet-reactive_measure')
```
## Development  
This plugin is powered by webpack:

* Use ```npm run watch``` to automatically rebuild while developing.
* Use ```npm test``` to run unit tests.
* Use ```npm run build``` to minify for production use, in the ```dist/```
