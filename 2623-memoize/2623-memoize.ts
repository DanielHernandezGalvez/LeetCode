type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
}

const sum = (a, b) => a + b;

const fib = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

const factorial = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
};

const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */