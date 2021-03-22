/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8raw = ee.ImageCollection("LANDSAT/LC8_L1T"),
    poly = /* color: #d63000 */ee.Geometry.Polygon(
        [[[85.2923583984375, 27.73337624740214],
          [85.08018479876546, 27.720002392408],
          [85.29098510742188, 27.689608347428003],
          [85.32806396484375, 27.624531965340143],
          [85.54916060413962, 27.657984968755738],
          [85.73321405049956, 27.796584294663056],
          [85.34454345703125, 27.90099025981739]]]),
    exportRegion = /* color: #0B4A8B */ee.Geometry.Polygon(
        [[[85.23468017578125, 27.648255880202026],
          [85.42900085449219, 27.648255880202026],
          [85.43174743652344, 27.764975470768842],
          [85.24223327636719, 27.764367879871415]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var composite = ee.Algorithms.Landsat.simpleComposite({
  collection: l8raw, 
  percentile: 50, 
  cloudScoreRange: 10, 
  maxDepth: 40,
  asFloat: true
});

print(composite);
Map.addLayer(composite, {bands: ['B5', 'B4', 'B3'], max: 0.3}, 'composite');

var dictionary = composite.reduceRegion({
  reducer: ee.Reducer.mean(), 
  geometry: poly,
  scale: 30,
  maxPixels: 1e9
});
print(dictionary);

var feature = ee.Feature(null, dictionary);

var description = 'Demo_export_13908fa86bb3c3b0ed127306c38b2833';
Export.table.toDrive({
  collection: ee.FeatureCollection([feature]), 
  description: description, 
  fileNamePrefix: description, 
  fileFormat: 'CSV'
});

// var fc = ee.FeatureCollection('ft:1pZ8L7TZ2XCCRSHmmrpdGM6fEWj7iq-VVq58UFcF4');
// print(fc);
// Map.centerObject(fc);
// Map.addLayer(fc);

// var withSpectralData = composite.reduceRegions({
//   collection: fc, 
//   reducer: ee.Reducer.first(), 
//   scale: 30,
// });
// print(withSpectralData);

var visualization = composite.visualize({
  bands: ['B5', 'B4', 'B3'], 
  max: 0.3
});
Map.addLayer(visualization, {}, 'visualization');

var imageDesc = 'Demo_image_export_4219fc9bf155ab13af7e1b774d920096';
Export.image.toDrive({
  image: visualization, 
  description: imageDesc, 
  fileNamePrefix: imageDesc, 
  scale: 30, 
  region: exportRegion,
  crs: 'EPSG:3857'
});

