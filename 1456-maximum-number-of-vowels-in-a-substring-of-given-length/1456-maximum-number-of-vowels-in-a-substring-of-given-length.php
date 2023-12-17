class Solution {
    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function maxVowels($s, $k) {
        $vowels = ['a', 'e', 'i', 'o', 'u'];
        $maxVowels = 0;
        $currentVowels = 0;

        // Calculate vowels in the first window of length k
        for ($i = 0; $i < $k; $i++) {
            if (in_array($s[$i], $vowels)) {
                $currentVowels++;
            }
        }

        $maxVowels = $currentVowels;

        // Slide the window and update maxVowels
        for ($i = $k; $i < strlen($s); $i++) {
            if (in_array($s[$i], $vowels)) {
                $currentVowels++;
            }
            if (in_array($s[$i - $k], $vowels)) {
                $currentVowels--;
            }
            $maxVowels = max($maxVowels, $currentVowels);
        }

        return $maxVowels;
    }
}