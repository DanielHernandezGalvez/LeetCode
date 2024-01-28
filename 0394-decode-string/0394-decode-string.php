
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function decodeString($s) {
        $stack = [];
        $currentNum = 0;
        $currentStr = '';

        for ($i = 0; $i < strlen($s); $i++) {
            $char = $s[$i];

            if (is_numeric($char)) {
                $currentNum = $currentNum * 10 + intval($char);
            } elseif ($char == '[') {
                array_push($stack, $currentStr);
                array_push($stack, $currentNum);
                $currentStr = '';
                $currentNum = 0;
            } elseif ($char == ']') {
                $num = array_pop($stack);
                $prevStr = array_pop($stack);
                $currentStr = $prevStr . str_repeat($currentStr, $num);
            } else {
                $currentStr .= $char;
            }
        }

        return $currentStr;
    }
}