class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merged_string = []
        i, j = 0, 0
        
        # Loop through both strings
        while i < len(word1) and j < len(word2):
            merged_string.append(word1[i])
            merged_string.append(word2[j])
            i += 1
            j += 1
        
        # Append any remaining characters from word1
        if i < len(word1):
            merged_string.append(word1[i:])
        
        # Append any remaining characters from word2
        if j < len(word2):
            merged_string.append(word2[j:])
        
        return ''.join(merged_string)