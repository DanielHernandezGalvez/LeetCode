/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
       let chars = s.split('');
    
    // Define a set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    // Initialize two pointers for swapping vowels
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Move the left pointer to the right until it points to a vowel
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }
        
        // Move the right pointer to the left until it points to a vowel
        while (left < right && !vowels.has(chars[right])) {
            right--;
        }
        
        // Swap the vowels at the left and right positions
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }
    
    // Convert the array back to a string
    return chars.join('');
};