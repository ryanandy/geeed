// This example demonstrates the use of the Fmask band to mask
// clouds in surface reflectance (SR) data.  It is suitable
// for use with any of the Landsat SR datasets. 

// Load Landsat 8 surface reflectance data
var l8sr = ee.ImageCollection('LANDSAT/LC8_SR');

// Function to cloud mask from the Fmask band of Landsat 8 SR data.
function maskL8sr(image) {
  var qa = image.select('cfmask');
  // Make a mask to exclude cloudy pixels.
  var mask = qa.neq(2).and( // shadow
             qa.neq(4));    // cloud

  // Return the masked image, scaled to [0, 1].
  return image.updateMask(mask).divide(10000);
}

// Map the function over one year of data and take the median.
var composite = l8sr.filterDate('2016-01-01', '2016-12-31')
                    .map(maskL8sr)
                    .median();

// Display the results.
Map.setCenter(116.3809, 39.9297, 10);
Map.addLayer(composite, {bands: ['B4', 'B3', 'B2'], min: 0, max: 0.2});
