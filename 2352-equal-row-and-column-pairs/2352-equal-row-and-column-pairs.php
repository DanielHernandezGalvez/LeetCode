class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function equalPairs($grid) {
        $n = count($grid);
        $count = 0;

        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                // Check if row and column are equal
                if ($grid[$i] == array_column($grid, $j)) {
                    $count++;
                }
            }
        }

        return $count;
    }
}