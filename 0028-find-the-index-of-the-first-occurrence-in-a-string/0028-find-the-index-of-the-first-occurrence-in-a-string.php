class Solution {

    /**
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr($haystack, $needle) {
        // Use strpos to find the first occurrence of $needle in $haystack
        $pos = strpos($haystack, $needle);

        // If $needle is not found, strpos returns false, so we return -1
        if ($pos === false) {
            return -1;
        }

        // Otherwise, return the position
        return $pos;
    }
}