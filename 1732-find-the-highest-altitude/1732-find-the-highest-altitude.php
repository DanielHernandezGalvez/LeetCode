class Solution {

    /**
     * @param Integer[] $gain
     * @return Integer
     */
    function largestAltitude($gain) {
        $maxAltitude = 0;
        $currentAltitude = 0;

        foreach ($gain as $altitudeChange) {
            $currentAltitude += $altitudeChange;
            $maxAltitude = max($maxAltitude, $currentAltitude);
        }

        return $maxAltitude;
    }
}