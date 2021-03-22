// This example uses ee.Algorithms.Landsat.simpleCloudScore()
// to cloud mask a collection.  This method is suitable for
// pre-Landsat 8 collections without a quality band or Fmask. 

// Load Landsat 5 TOA data
var l5 = ee.ImageCollection('LANDSAT/LT5_L1T_TOA');

// Function to cloud mask using the simple cloud score.
function maskL5(image) {
  // Compute a cloud score in [0, 100], low to high cloud score.
  var cloud = ee.Algorithms.Landsat.simpleCloudScore(image);
  
  // Create a cloud mask as a threshold of the cloud score.
  // For very cloudy places, this threshold and/or the 
  // length of the input series may need to be adjusted.
  var mask = cloud.select('cloud').lte(10);
  
  return image.updateMask(mask);
}

// Map the function over one year of data and take the median.
var composite = l5.filterDate('2008-01-01', '2008-12-31')
                    .map(maskL5)
                    .median();

// Display the results.
Map.setCenter(114.0793, 22.4079, 11);
Map.addLayer(composite, {bands: ['B3', 'B2', 'B1'], min: 0, max: 0.3});
