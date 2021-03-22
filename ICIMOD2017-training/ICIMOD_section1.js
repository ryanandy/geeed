/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var srtm = ee.Image("USGS/SRTMGL1_003"),
    poly = /* color: #d63000 */ee.Geometry.Polygon(
        [[[85.30952453613281, 27.73945373313175],
          [85.25596618652344, 27.692040358081385],
          [85.36308288574219, 27.676231320549014],
          [85.42488098144531, 27.720612424153668],
          [85.33355712890625, 27.7175731983526]]]),
    fc = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[85.23674011230469, 27.67683940276993],
                  [85.21820068359375, 27.641565040382474],
                  [85.28480529785156, 27.630007171411226],
                  [85.27999877929688, 27.664068965384512]]]),
            {
              "foo": "'silly'",
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[85.32875061035156, 27.659811821285018],
                  [85.33836364746094, 27.630007171411226],
                  [85.37406921386719, 27.638523614271946]]]),
            {
              "foo": "'silly'",
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[85.43174743652344, 27.69568827247711],
                  [85.41114807128906, 27.684744163600723],
                  [85.41801452636719, 27.656770902565736],
                  [85.45440673828125, 27.660419994878637],
                  [85.45921325683594, 27.689000336299763]]]),
            {
              "foo": "'silly'",
              "system:index": "2"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/

var srtmVis = {min: 430, max: 2700};
Map.addLayer(srtm, srtmVis, 'srtm');

var lt1000 = srtm.lt(1000);
Map.addLayer(lt1000.updateMask(lt1000), {palette: ['red']}, 'lt1000');

var slope = ee.Terrain.slope(srtm);
Map.addLayer(slope, {min: 0, max: 45}, 'slope');

var reduceParams = {
  reducer: ee.Reducer.mean(), 
  geometry: poly, 
  scale: srtm.projection().nominalScale(),
  bestEffort: true
};
var dictionary = srtm.reduceRegion(reduceParams);
print('dictionary:', dictionary);

var reducedRegions = srtm.reduceRegions({
  collection: fc, 
  reducer: ee.Reducer.mean(), 
  scale: srtm.projection().nominalScale(),
});
print('reduced regions:', reducedRegions);