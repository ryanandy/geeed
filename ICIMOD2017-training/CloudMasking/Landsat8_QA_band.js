// This example demonstrates the use of the Landsat 8 QA band 
// to mask clouds.

// Load Landsat 8 TOA data.
var l8 = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');

// Function to cloud mask from the quality band of Landsat 8.
function maskL8(image) {
  var qa = image.select('BQA');
  // Make a mask of possible values for high cloud confidence.
  // See https://landsat.usgs.gov/collectionqualityband
  var mask = qa.eq([2800, 2804, 2808, 2812, 6896, 6900, 6904, 6908])
      // If any of these combinations occur, return 1 (logical or)
      .reduce('max')
      // Negate to get not high confidence of cloud.
      .not();

  return image.updateMask(mask);
}

// Map the function over one year of data and take the median.
var composite = l8.filterDate('2016-01-01', '2016-12-31')
                  .map(maskL8)
                  .median();

// Display the results in a cloudy place.
Map.setCenter(114.1689, 22.2986, 12);
Map.addLayer(composite, {bands: ['B4', 'B3', 'B2'], max: 0.3});
