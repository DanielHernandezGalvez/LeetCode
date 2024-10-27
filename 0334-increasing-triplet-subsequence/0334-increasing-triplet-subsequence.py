class Solution(object):
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
         # Initialize two variables with very large values
        first = float('inf')
        second = float('inf')
        
        # Traverse through each number in the array
        for num in nums:
            if num <= first:
                # Update first if num is smaller than or equal to first
                first = num
            elif num <= second:
                # Update second if num is smaller than or equal to second
                second = num
            else:
                # If we find a number greater than both first and second,
                # we have an increasing triplet
                return True
        
        # If we reach here, no increasing triplet was found
        return False