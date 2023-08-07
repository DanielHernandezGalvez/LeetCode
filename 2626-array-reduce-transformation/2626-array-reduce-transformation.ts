type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (nums.length  === 0){
        return init;
    }
    
    let result = init;
    for(const num of nums) {
        result = fn(result, num)
    }
    
    return result
};