/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = /* color: #bf04c2 */ee.Geometry.Point([85.33012590136718, 27.67870638406305]),
    urban = /* color: #ff0101 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([85.3359603881836, 27.696448239298583]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([85.34282684326172, 27.695080295210225]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([85.33201217651367, 27.687632298881745]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([85.33012390136719, 27.701919844206397]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([85.30540466308594, 27.70115991548484]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([85.30557632446289, 27.699336064962168]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([85.30729293823242, 27.699488053669917]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([85.308837890625, 27.698120147680104]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([85.31089782714844, 27.707543152262193]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([85.30643463134766, 27.707695129538678]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([85.34540176391602, 27.713622078178442]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([85.30540466308594, 27.719244783025815]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([85.30488967895508, 27.716813378666966]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([85.31415939331055, 27.71802908762283]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([85.32857894897461, 27.700855942514483]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([85.29905319213867, 27.687024276749625]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([85.35123825073242, 27.68991235172242]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([85.33132553100586, 27.68672026441393]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([85.32995223999023, 27.68565621457348]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([85.3443717956543, 27.683072050366672]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([85.3388786315918, 27.679727747093843]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([85.32342910766602, 27.677295462214314]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([85.34368515014648, 27.69325634309158]),
            {
              "landcover": 0,
              "system:index": "22"
            })]),
    vegetation = /* color: #188b03 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([85.23948669433594, 27.653121688456565]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([85.23536682128906, 27.64582289489237]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([85.22712707519531, 27.637915318904433]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([85.22506713867188, 27.634265475685623]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([85.44273376464844, 27.695080295210225]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([85.49491882324219, 27.704199598618246]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([85.48805236816406, 27.735199528712794]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([85.19416809082031, 27.686568257928688]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([85.20103454589844, 27.687784303885763]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16670227050781, 27.6731908586731]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16464233398438, 27.662244495358113]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([85.19828796386719, 27.662244495358113]),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([85.19210815429688, 27.653729899265727]),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([85.26557922363281, 27.746746268526383]),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([85.27381896972656, 27.74431547763969]),
            {
              "landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([85.26969909667969, 27.738238263104016]),
            {
              "landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([85.24703979492188, 27.74370777144197]),
            {
              "landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([85.25596618652344, 27.754038315679356]),
            {
              "landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([85.26145935058594, 27.74066918959956]),
            {
              "landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([85.41252136230469, 27.77651905327432]),
            {
              "landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([85.41389465332031, 27.77105119317227]),
            {
              "landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([85.38093566894531, 27.797780340741376]),
            {
              "landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([85.39329528808594, 27.791098669825594]),
            {
              "landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([85.35072326660156, 27.807498401524757]),
            {
              "landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([85.31089782714844, 27.809320441155894]),
            {
              "landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([85.46195983886719, 27.788668869482176]),
            {
              "landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([85.462646484375, 27.77651905327432]),
            {
              "landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([85.21820068359375, 27.844540532189555]),
            {
              "landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([85.24497985839844, 27.849397578791727]),
            {
              "landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([85.51139831542969, 27.801424715387416]),
            {
              "landcover": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([85.17494201660156, 27.77651905327432]),
            {
              "landcover": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16120910644531, 27.775303997001277]),
            {
              "landcover": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16120910644531, 27.769836075830344]),
            {
              "landcover": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([85.17425537109375, 27.77165874675444]),
            {
              "landcover": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([85.35364151000977, 27.70389563411529]),
            {
              "landcover": 1,
              "system:index": "34"
            })]),
    water = /* color: #002bff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([85.15811920166016, 27.591066424185087]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([85.1601791381836, 27.593957033256043]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16258239746094, 27.5962390392109]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16035079956055, 27.600802908597025]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15811920166016, 27.602019908337013]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15520095825195, 27.606279300993812]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15348434448242, 27.606887772143075]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15983581542969, 27.592283532030677]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15623092651367, 27.591979256335996]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15914916992188, 27.5913707024132]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15897750854492, 27.60110715979902]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16009330749512, 27.590914284754337]),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16129493713379, 27.59388096557275]),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16180992126465, 27.59912951188779]),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16069412231445, 27.600194403659017]),
            {
              "landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15734672546387, 27.604605987910006]),
            {
              "landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15580177307129, 27.605670826465445]),
            {
              "landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15022277832031, 27.61061458419642]),
            {
              "landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15451431274414, 27.609397679914597]),
            {
              "landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15228271484375, 27.612363860418835]),
            {
              "landcover": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15142440795898, 27.61441732294871]),
            {
              "landcover": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15005111694336, 27.61031035939323]),
            {
              "landcover": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15382766723633, 27.60574688596629]),
            {
              "landcover": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15786170959473, 27.601183222467544]),
            {
              "landcover": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([85.15966415405273, 27.60049865655035]),
            {
              "landcover": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([85.1616382598877, 27.59859706212215]),
            {
              "landcover": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16172409057617, 27.596391171252126]),
            {
              "landcover": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([85.16112327575684, 27.59243566956134]),
            {
              "landcover": 2,
              "system:index": "27"
            })]),
    region = /* color: #00ffff */ee.Geometry.Polygon(
        [[[85.26626586914062, 27.808713098007775],
          [85.27175903320312, 27.7358072823705],
          [85.45166015625, 27.745530879863978],
          [85.42831420898438, 27.81114245022618]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Classification stub.  Draw points by hand by clicking the point
// icon in the geometry drawing tools.  Click '+new layer' to make
// three sets of points, each set representing samples from classes:
// 'urban', 'vegetation', 'water' (in that order).

// For each set of points in the imports, click the gear icon and 
// 'Import as' FeatureCollection.  Also add a property called 
// 'landcover' and set a consecutive integer starting from 0 for 
// the first class.

// Load Landsat 8 TOA images, get the least cloudy 2015 image.
var image = ee.Image(ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
    // Geographically filter.
    .filterBounds(roi)
    // Filter to get only 2015.
    .filterDate('2015-01-01', '2015-12-31')
    // Sort by cloud cover metadata (ascending).
    .sort('CLOUD_COVER')
    // Get the least cloudy image.
    .first());

// Display the input imagery.
Map.centerObject(roi, 11);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'Landsat image');

// Merge the hand-drawn features into a single FeatureCollection.
var newfc = urban.merge(vegetation).merge(water);

// Use these bands in the prediction.
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];

// Make training data by 'overlaying' the points on the image.
var points = image.select(bands).sampleRegions({
  collection: newfc, 
  properties: ['landcover'], 
  scale: 30
}).randomColumn();

var training = points.filter(ee.Filter.lt('random', 0.7));
var validation = points.filter(ee.Filter.gte('random', 0.7));

// Get a CART classifier and train it.
var classifier = ee.Classifier.smileCart().train({
  features: training, 
  classProperty: 'landcover', 
  inputProperties: bands
});

// Classify the image.
var classified = image.select(bands).classify(classifier);

// Display the classification results.
Map.addLayer(classified, {min: 0, max: 2, palette: ['red', 'green', 'blue']}, 'classification');

// Compute pixel area in square meters per landcover type.
var stats = ee.Image.pixelArea().addBands(classified).reduceRegion({
  reducer: ee.Reducer.sum().group(1),
  geometry: region,
  scale: 30
});
print('Area per class', stats);

// To export the map as it appears, call Export.image
// on classified.visualize().

// To export as vectors, use reduceToVectors(), but be careful, 
// you may want to reduceNeighborhood() with a mode() reducer first.

// Classify the validation data.
var validated = validation.classify(classifier);
print(validated);

// Get a confusion matrix representing expected accuracy.
var testAccuracy = validated.errorMatrix('landcover', 'classification');
print('Validation error matrix: ', testAccuracy);
print('Validation overall accuracy: ', testAccuracy.accuracy());


// Add legend
// Create the panel for the legend items.
var legend = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }
});

// Create and add the legend title.
var legendTitle = ui.Label({
  value: 'Legend',
  style: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
  }
});
legend.add(legendTitle);

// Creates and styles 1 row of the legend.
var makeRow = function(color, name) {
  // Create the label that is actually the colored box.
  var colorBox = ui.Label({
    style: {
      backgroundColor: '#' + color,
      // Use padding to give the box height and width.
      padding: '8px',
      margin: '0 0 4px 0'
    }
  });

  // Create the label filled with the description text.
  var description = ui.Label({
    value: name,
    style: {margin: '0 0 4px 6px'}
  });

  return ui.Panel({
    widgets: [colorBox, description],
    layout: ui.Panel.Layout.Flow('horizontal')
  });
};

legend.add(makeRow('FF0000', 'Urban'));
legend.add(makeRow('00FF00', 'Vegetation'));
legend.add(makeRow('0000FF', 'Water'));

// Add the legend to the map.
Map.add(legend);