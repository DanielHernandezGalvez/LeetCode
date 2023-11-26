class Solution {

    /**
     * @param Integer[] $height
     * @return Integer
     */
function maxArea($height) {
    $maxArea = 0;
    $left = 0;
    $right = count($height) - 1;

    while ($left < $right) {
        // Calculate the width of the container.
        $width = $right - $left;

        // Calculate the height of the container (minimum height between the two lines).
        $containerHeight = min($height[$left], $height[$right]);

        // Calculate the current area and update maxArea if necessary.
        $currentArea = $width * $containerHeight;
        $maxArea = max($maxArea, $currentArea);

        // Move the pointers based on the condition.
        if ($height[$left] < $height[$right]) {
            $left++;
        } else {
            $right--;
        }
    }

    return $maxArea;
}
}