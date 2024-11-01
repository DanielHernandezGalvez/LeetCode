class Solution(object):
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
        # Sort citations in descending order
        citations.sort(reverse=True)
        
        # Iterate through the sorted citations
        h_index = 0
        for i, citation in enumerate(citations):
            if citation >= i + 1:
                h_index = i + 1
            else:
                break
        
        return h_index
        