class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function pivotIndex($nums) {
        $totalSum = array_sum($nums);
        $leftSum = 0;

        for ($i = 0; $i < count($nums); $i++) {
            // Check if the left sum is equal to the right sum
            if ($leftSum == $totalSum - $leftSum - $nums[$i]) {
                return $i; // Pivot index found
            }

            // Update left sum for the next iteration
            $leftSum += $nums[$i];
        }

        return -1; // No pivot index found
    }
}