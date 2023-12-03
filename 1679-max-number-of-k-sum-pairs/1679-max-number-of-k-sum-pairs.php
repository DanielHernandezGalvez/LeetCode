class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maxOperations($nums, $k) {
        // Ordena la matriz para facilitar el uso de los dos punteros
        sort($nums);
        
        $left = 0;
        $right = count($nums) - 1;
        $operations = 0;
        
        while ($left < $right) {
            $sum = $nums[$left] + $nums[$right];
            
            if ($sum == $k) {
                // Se encontró un par que suma k, incrementa el contador de operaciones
                $operations++;
                $left++;
                $right--;
            } elseif ($sum < $k) {
                // El par actual es menor que k, mueve el puntero izquierdo hacia la derecha
                $left++;
            } else {
                // El par actual es mayor que k, mueve el puntero derecho hacia la izquierda
                $right--;
            }
        }
        
        return $operations;
    }
}