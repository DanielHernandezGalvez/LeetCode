class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function uniqueOccurrences($arr) {
        $frequencyMap = array();
        
        // Count the occurrences of each element
        foreach ($arr as $num) {
            if (isset($frequencyMap[$num])) {
                $frequencyMap[$num]++;
            } else {
                $frequencyMap[$num] = 1;
            }
        }
        
        // Check if the frequencies are unique
        $uniqueFrequencies = array_unique($frequencyMap);
        
        // If the sizes are the same, frequencies are unique
        return count($frequencyMap) == count($uniqueFrequencies);
    }
}
