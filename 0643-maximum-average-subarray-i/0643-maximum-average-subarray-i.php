class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Float
     */
    function findMaxAverage($nums, $k) {
        $n = count($nums);
        $sum = 0;

        // Calculate the sum of the first window of size k
        for ($i = 0; $i < $k; $i++) {
            $sum += $nums[$i];
        }

        // Initialize maxSum with the sum of the first window
        $maxSum = $sum;

        // Slide the window through the array
        for ($i = $k; $i < $n; $i++) {
            // Add the next element to the sum
            $sum += $nums[$i];

            // Subtract the first element of the previous window
            $sum -= $nums[$i - $k];

            // Update maxSum if the current sum is greater
            $maxSum = max($maxSum, $sum);
        }

        // Calculate the maximum average
        $maxAverage = $maxSum / $k;

        return $maxAverage;
    }
}