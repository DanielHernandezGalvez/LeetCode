/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function join(arr1, arr2) {
  // Create a map to store the merged objects, keyed by id.
  const mergedObjects = new Map();

  // Iterate over the first array.
  for (const obj of arr1) {
    const id = obj.id;

    // If the id is already in the map, merge the objects.
    if (mergedObjects.has(id)) {
      const mergedObj = mergedObjects.get(id);
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          mergedObj[key] = obj[key];
        }
      }
    } else {
      // Otherwise, add the new object to the map.
      mergedObjects.set(id, obj);
    }
  }

  // Iterate over the second array.
  for (const obj of arr2) {
    const id = obj.id;

    // If the id is already in the map, merge the objects.
    if (mergedObjects.has(id)) {
      const mergedObj = mergedObjects.get(id);
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          mergedObj[key] = obj[key];
        }
      }
    } else {
      // Otherwise, add the new object to the map.
      mergedObjects.set(id, obj);
    }
  }

  // Create a new array to store the merged objects.
  const mergedArray = [];

  // Iterate over the map and add the merged objects to the new array.
  for (const [id, obj] of mergedObjects) {
    mergedArray.push(obj);
  }

  // Sort the merged array by id.
  mergedArray.sort((a, b) => a.id - b.id);

  // Return the merged array.
  return mergedArray;
}