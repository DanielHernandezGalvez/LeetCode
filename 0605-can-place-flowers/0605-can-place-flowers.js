/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
 let count = 0;
    let i = 0;
    
    while (i < flowerbed.length) {
        if (flowerbed[i] === 0) {
            // Check the previous and next plots to ensure they are empty (0's)
            const prev = i === 0 ? 0 : flowerbed[i - 1];
            const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
            
            if (prev === 0 && next === 0) {
                flowerbed[i] = 1; // Plant a flower
                count++;
            }
        }
        
        if (count >= n) {
            return true;
        }
        
        i++;
    }
    
    return count >= n;
};