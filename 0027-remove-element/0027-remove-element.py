class Solution:
  def removeElement(self, nums: List[int], val: int) -> int:
    # Two pointers: i for iterating through the array, j for keeping track of non-val elements
    i, j = 0, 0
    while i < len(nums):
      if nums[i] != val:
        # If the current element is not val, swap it with the element at j
        nums[i], nums[j] = nums[j], nums[i]
        j += 1
      i += 1
    # Return the number of elements not equal to val (which is the index j) 
    return j