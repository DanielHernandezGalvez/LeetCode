/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    
    let result = [];
    
    for (let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= maxCandies){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    
    return result
};