async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  const results: T[] = [];
  let completedCount = 0;
  let hasRejected = false;
  let rejectionReason: any;

  return new Promise<T[]>((resolve, reject) => {
    if (functions.length === 0) {
      resolve(results);
      return;
    }

    function processFunction(index: number) {
      functions[index]()
        .then((result) => {
          results[index] = result;
          completedCount++;

          if (completedCount === functions.length) {
            if (hasRejected) {
              reject(rejectionReason);
            } else {
              resolve(results);
            }
          }
        })
        .catch((error) => {
          if (!hasRejected) {
            hasRejected = true;
            rejectionReason = error;
            reject(error);
          }
        });
    }

    for (let i = 0; i < functions.length; i++) {
      processFunction(i);
    }
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */