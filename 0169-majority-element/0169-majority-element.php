class Solution {

  /**
   * @param Integer[] $nums
   * @return Integer
   */
  function majorityElement($nums) {
    // Option 1: Using Hash Table (More space efficient for larger arrays)
    $count = [];
    foreach ($nums as $num) {
      if (isset($count[$num])) {
        $count[$num]++;
      } else {
        $count[$num] = 1;
      }
      if ($count[$num] > floor(count($nums) / 2)) {
        return $num;
      }
    }

    // Option 2: Boyer-Moore Voting Algorithm (More efficient for time complexity)
    $count = 0;
    $candidate = null;
    foreach ($nums as $num) {
      if ($count == 0) {
        $candidate = $num;
      }
      $count += ($num == $candidate) ? 1 : -1;
    }
    return $candidate;
  }
}