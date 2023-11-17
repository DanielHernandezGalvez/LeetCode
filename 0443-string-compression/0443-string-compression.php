class Solution {
    /**
     * @param String[] $chars
     * @return Integer
     */
    function compress(&$chars) {
        $n = count($chars);
        if ($n <= 1) {
            return $n;
        }

        $writeIndex = 0; // index to write the compressed characters
        $readIndex = 0; // index to read the input characters

        while ($readIndex < $n) {
            $char = $chars[$readIndex];
            $count = 0;

            // Count consecutive repeating characters
            while ($readIndex < $n && $chars[$readIndex] === $char) {
                $readIndex++;
                $count++;
            }

            // Write the character
            $chars[$writeIndex++] = $char;

            // Write the count if greater than 1, split digits if count >= 10
            if ($count > 1) {
                $countStr = strval($count);
                for ($i = 0; $i < strlen($countStr); $i++) {
                    $chars[$writeIndex++] = $countStr[$i];
                }
            }
        }

        return $writeIndex;
    }
}