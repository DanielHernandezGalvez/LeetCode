function sortBy(arr: any[], fn: Function): any[] {
  return arr.sort((a, b) => {
    const valA = fn(a);
    const valB = fn(b);

    // Compare the values returned by fn
    if (valA < valB) {
      return -1;
    } else if (valA > valB) {
      return 1;
    } else {
      return 0;
    }
  });
};