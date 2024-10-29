class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        if n <= 1:
            return 0
        
        jumps = 0      # Count of jumps made
        max_reachable = 0  # The farthest index reachable so far
        current_end = 0    # The end of the range for the current jump
        
        for i in range(n - 1):
            max_reachable = max(max_reachable, i + nums[i])
            
            # If we reached the end of the current jump range
            if i == current_end:
                jumps += 1
                current_end = max_reachable
                # Early exit if the last jump reaches the end
                if current_end >= n - 1:
                    break
        
        return jumps