/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = /* color: #d63000 */ee.Geometry.Point([85.32119750976562, 27.718788898837957]),
    l8 = ee.ImageCollection("LANDSAT/LC8_L1T_TOA");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Load a Landsat 8 image.
var image = ee.Image(l8
    .filterBounds(roi)
    .sort('CLOUD_COVER')
    .first());

Map.centerObject(roi, 15);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'image');

var pansharpen1 = function(scene, kernel) {
  // Compute the per-pixel means of the unsharpened bands.
  var bgr = scene.select(['B4', 'B3', 'B2']);
  var pan = scene.select('B8');
  var bgr_mean = bgr.reduce('mean').rename('mean');
  // Compute the aggregate mean of the unsharpened bands and the pan band.
  var mean_values = pan.addBands(bgr_mean).reduceNeighborhood({
    reducer: ee.Reducer.mean(), 
    kernel: kernel,
  });
  var gain = mean_values.select('mean_mean').divide(mean_values.select('B8_mean'));
  return bgr.divide(bgr_mean).multiply(pan).multiply(gain);
};

var kernel = ee.Kernel.square({
  radius: 90, 
  units: 'meters'
});

var sharp1 = pansharpen1(image, kernel);
Map.addLayer(sharp1, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'sharp1');

var pansharpen2 = function(scene, kernel) {
  var hsv = scene.select(['B4', 'B3', 'B2']).rgbToHsv();
  var pan = scene.select('B8');
  return ee.Image.cat(hsv.select(['hue', 'saturation']), pan).hsvToRgb();
};

var sharp2 = pansharpen2(image, kernel);
Map.addLayer(sharp2, {bands: ['red', 'green', 'blue'], max: 0.3}, 'sharp2');