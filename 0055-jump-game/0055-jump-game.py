class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        # Variable to keep track of the farthest position we can reach
        max_reachable = 0
        
        for i in range(len(nums)):
            # If the current index is beyond our max reachable, we can't proceed
            if i > max_reachable:
                return False
            # Update the max reachable position
            max_reachable = max(max_reachable, i + nums[i])
            
            # If we've reached or passed the last index, return True
            if max_reachable >= len(nums) - 1:
                return True
        
        return False
        