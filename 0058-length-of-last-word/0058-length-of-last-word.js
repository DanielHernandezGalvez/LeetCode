/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim any trailing spaces
    s = s.trim();
    
    // Split the string into an array of words
    const words = s.split(' ');
    
    // Return the length of the last word
    return words[words.length - 1].length;
};