/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
        // Split the input string into words using one or more spaces as the delimiter
    const words = s.trim().split(/\s+/);
    
    // Reverse the array of words
    const reversedWords = words.reverse();
    
    // Join the reversed words into a single string with a single space between them
    return reversedWords.join(' ');
};