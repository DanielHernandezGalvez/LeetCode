function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandies: number = Math.max(...candies)
    
    let result: boolean[] = []
    
    for (let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= maxCandies){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
};