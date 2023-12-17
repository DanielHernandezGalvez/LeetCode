class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function longestOnes($nums, $k) {
        $left = 0;
        $zeroCount = 0;
        $maxOnes = 0;

        for ($right = 0; $right < count($nums); $right++) {
            if ($nums[$right] == 0) {
                $zeroCount++;
            }

            while ($zeroCount > $k) {
                if ($nums[$left] == 0) {
                    $zeroCount--;
                }
                $left++;
            }

            $maxOnes = max($maxOnes, $right - $left + 1);
        }

        return $maxOnes;
    }
}