type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
 let currentValue = init
 
  const increment = (): number => {
    currentValue++;
    return currentValue;
  };
  const decrement = (): number => {
     currentValue--;
     return currentValue
 }
   const reset = (): number => {
     return currentValue = init;
     return currentValue
 }
   return {
       increment,
       decrement,
       reset
   }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */