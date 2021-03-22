/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8 = ee.ImageCollection("LANDSAT/LC8_L1T_TOA"),
    roi = /* color: #d63000 */ee.Geometry.Point([85.32119750976562, 27.71027871084622]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var first = ee.Image(l8
    .filterDate('2016-01-01', '2016-12-31')
    .filterBounds(roi)
    .sort('CLOUD_COVER')
    .first());
print(first);

Map.addLayer(first, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'image');

var ndvi = first.normalizedDifference(['B5', 'B4'])
    .rename('NDVI');
Map.addLayer(ndvi, {min: 0, max: 1}, 'ndvi');

var addNDVI = function(image) {
  var cloud = ee.Algorithms.Landsat.simpleCloudScore(image)
      .select('cloud');
  var mask = cloud.lt(50);
  var ndviImage = image.normalizedDifference(['B5', 'B4'])
    .rename('NDVI');
  return image.addBands(ndviImage).updateMask(mask);
};
Map.addLayer(addNDVI(first), 
  {bands: ['NDVI'], min: 0, max: 1}, 'function ndvi');

var median = l8.median();
Map.addLayer(median, 
  {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'median');

var withNDVI = l8.map(addNDVI);
var greenest = withNDVI.qualityMosaic('NDVI');
Map.addLayer(greenest, 
  {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'greenest');

var chart = ui.Chart.image.series({
  imageCollection: withNDVI.select('NDVI'), 
  region: roi, 
  reducer: ee.Reducer.first(), 
  scale: 30,
});
print(chart);