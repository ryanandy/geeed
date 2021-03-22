// The purpose of this script is to fit a first-order
// harmonic model to a time series of MODSI EVI data.
// The linear regression reducer is used to estimate
// harmonic terms and a long-term trend in the data.

// Load the input collection and select the  EVI band.
var c = ee.ImageCollection('MODIS/MOD13A1')
    .select('EVI');

// A function to compute the independent variables (namely a
// first-order Fourier model plus a linear model) based on
// the scene "acquisition" time extracted from the image
// metadata.
//
// The linear regression reducer (below) expects to see images
// with all the independent values followed by all the dependent
// values.  In this case, all the independent variables are 
// derived purely from image metadata, and thus are constant in 
// value across each image.
function addIndependentVariables(image) {
  var date = image.date();
  var time = date.difference(ee.Date('2000-01-01'), 'year');
  var sin = time.multiply(2 * Math.PI).sin();
  var cos = time.multiply(2 * Math.PI).cos();
  // Assemble the four independent variables as image bands.
  var independent = ee.Image([sin, cos, time, 1]).double();
  return independent.addBands(image.divide(10000));
}

// Perform the linear regression, which returns an array-valued
// image, and then expand that back out to a four-band image
// for later convenience.
var regression = c.map(addIndependentVariables)
  .reduce(ee.Reducer.linearRegression(4))
  .aside(print)
  .select('coefficients')
  .arrayProject([0])
  .arrayFlatten([['sin', 'cos', 'slope', 'offset']]);

// Pull out the three bands we're going to visualize.
var sin = regression.select('sin');
var cos = regression.select('cos');
var slope = regression.select('slope');
var offset = regression.select('offset');

// Do some math to turn the first-order Fourier model into
// hue, saturation, and value in the range[0,1].
var sat = cos.hypot(sin).multiply(2.5);
var hue = sin.atan2(cos).unitScale(-Math.PI, Math.PI);
var val = offset.multiply(1.5);

// Turn the HSV data into an RGB image and add it to the map.
var seasonality = ee.Image.cat(hue, sat, val).hsvToRgb();
Map.addLayer(seasonality, {}, 'Seasonality');

// Display decreasing EVI in red, increasing in blue and offset in green.
var trendVis = {bands: ['slope', 'offset', 'slope'], min: 0, max: [-0.005, 1, 0.005]};
Map.addLayer(regression, trendVis, 'Trend');

// Configure the map to show the ocean as deep blue.
var style = {
  'Deep': [{
      featureType: 'all',
      stylers: [{ color: '#000022'}]
  }]
};
Map.setOptions(null, style);
Map.setCenter(0, 10, 3);

// Export the images as they look on screen:
var exportRegion = ee.Geometry.Rectangle([-180, -70, 180, 79], null, false);
var background = ee.Image(1).visualize({palette:'000022'});
var exportImage1 = ee.ImageCollection([background, 
    seasonality.multiply(255).byte().rename(['vis-red', 'vis-green', 'vis-blue'])]).mosaic();
var exportImage2 = ee.ImageCollection([background, regression.visualize(trendVis)]).mosaic();
var exportParams = {scale: 10000, region: exportRegion, crs: 'EPSG:3857'};
Export.image(exportImage1, 'Matts_global_pheno', exportParams);
Export.image(exportImage2, 'Matts_global_trend', exportParams);
