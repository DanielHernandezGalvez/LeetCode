type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
  const _flat = (arr: MultiDimensionalArray, depth: number): MultiDimensionalArray => {
    const result: MultiDimensionalArray = [];
    for (const item of arr) {
      if (Array.isArray(item) && depth < n) {
        result.push(..._flat(item, depth + 1));
      } else {
        result.push(item);
      }
    }
    return result;
  };

  return _flat(arr, 0);
};