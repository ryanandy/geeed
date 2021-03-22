/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8 = ee.ImageCollection("LANDSAT/LC8_L1T"),
    roi = /* color: #d63000 */ee.Geometry.Point([85.3253173828125, 27.716965343027596]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Load a Landsat 8 image.
var image = ee.Image(l8
    .filterBounds(roi)
    .sort('CLOUD_COVER')
    .first());

Map.centerObject(roi, 13);
var visParams = {bands: ['B4', 'B3', 'B2'], min: 6000, max: 13000};
Map.addLayer(image, visParams, 'image');

// Low-pass filter the image by convolving with a square kernel.
var smooth = image.convolve(ee.Kernel.square(3));
Map.addLayer(smooth, visParams, 'smoothed');

var texture = image.reduceNeighborhood({
  reducer: ee.Reducer.stdDev(), 
  kernel: ee.Kernel.square(5)
});
Map.addLayer(texture, {bands: ['B4_stdDev', 'B3_stdDev', 'B2_stdDev'], min: 6000, max: 13000}, 'standard deviation');

// Define a "fat" Gaussian kernel.
var fat = ee.Kernel.gaussian({
  radius: 3,
  sigma: 3,
  units: 'pixels',
  normalize: true,
  magnitude: -1
});

// Define a "skinny" Gaussian kernel.
var skinny = ee.Kernel.gaussian({
  radius: 3,
  sigma: 1,
  units: 'pixels',
  normalize: true,
});

// Compute a difference-of-Gaussians (DoG) kernel.
var dog = fat.add(skinny);

// High-pass filter the image by convolving with the DoG kernel.
var edges = image.convolve(dog);

// Compute the zero crossings of the second derivative, display.
var crossings = edges.zeroCrossing();
Map.addLayer(crossings, {bands: ['B4', 'B3', 'B2'], min: -1, max: 1}, 'edges');

// Sharpen the image by adding the second derivative estimate.
var sharpened = image.add(edges);
Map.addLayer(sharpened, visParams, 'sharpened');