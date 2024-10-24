class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Edge case: if the array is empty, return 0
        if not nums:
            return 0
        
        # Initialize a pointer to track the position of unique elements
        k = 1
        
        # Iterate over the array starting from the second element
        for i in range(1, len(nums)):
            # If the current element is different from the previous one, it's unique
            if nums[i] != nums[i - 1]:
                nums[k] = nums[i]
                k += 1
        
        # Return the number of unique elements
        return k