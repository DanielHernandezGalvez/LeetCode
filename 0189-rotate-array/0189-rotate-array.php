class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return NULL
     */
    function rotate(&$nums, $k) {
        $n = count($nums);
        $k = $k % $n; // In case k is greater than the length of the array

        // Reverse the entire array
        $this->reverse($nums, 0, $n - 1);

        // Reverse the first k elements
        $this->reverse($nums, 0, $k - 1);

        // Reverse the rest of the array
        $this->reverse($nums, $k, $n - 1);
    }

    private function reverse(&$nums, $start, $end) {
        while ($start < $end) {
            $temp = $nums[$start];
            $nums[$start] = $nums[$end];
            $nums[$end] = $temp;
            $start++;
            $end--;
        }
    }
}