class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Edge case: if the array has fewer than 2 elements, return its length
        if len(nums) <= 2:
            return len(nums)

        # Initialize a pointer for the place to insert the next allowed duplicate
        k = 2

        # Start checking from the third element
        for i in range(2, len(nums)):
            # If the current element is not equal to the element at k-2, it's allowed to stay
            if nums[i] != nums[k - 2]:
                nums[k] = nums[i]
                k += 1

        # Return the number of elements after removing duplicates (up to two occurrences per element)
        return k