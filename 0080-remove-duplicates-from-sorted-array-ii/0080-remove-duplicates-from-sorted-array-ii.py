class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
                # Edge case: if the length of nums is less than or equal to 2, return its length
        if len(nums) <= 2:
            return len(nums)
        
        # j is the index where the next allowed element should be placed
        j = 2
        
        # Iterate over the array starting from the third element
        for i in range(2, len(nums)):
            # If the current element nums[i] is different from nums[j-2]
            # then it means nums[i] can be placed at index j
            if nums[i] != nums[j - 2]:
                nums[j] = nums[i]
                j += 1
        
        # Return the length of the modified array
        return j