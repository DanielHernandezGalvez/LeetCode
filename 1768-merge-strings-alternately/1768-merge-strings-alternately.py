class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        
        merged_string = []
        i, j = 0, 0
        # Loop through both strings while characters remain in both
        while i < len(word1) and j < len(word2):
            merged_string.append(word1[i])
            merged_string.append(word2[j])
            i += 1
            j += 1
        # Add remaining characters from the longer string (if any)
        if i < len(word1):
            merged_string.append(word1[i:])
        if j < len(word2):
            merged_string.append(word2[j:])
        
        return ''.join(merged_string)