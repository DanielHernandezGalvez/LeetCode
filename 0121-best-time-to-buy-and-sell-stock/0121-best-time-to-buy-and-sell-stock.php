
class Solution {

  /**
   * Calculates the maximum profit achievable by buying and selling a stock once.
   *
   * @param array $prices An array of integers representing stock prices on consecutive days.
   *
   * @return int The maximum profit, or 0 if no profit can be made.
   */
  public function maxProfit(array $prices): int
  {
    if (empty($prices)) {
      return 0; // Handle empty price list
    }

    $minPrice = PHP_INT_MAX; // Initialize minimum price to maximum integer value
    $maxProfit = 0;

    foreach ($prices as $price) {
      $minPrice = min($minPrice, $price); // Update minimum price on each iteration
      $maxProfit = max($maxProfit, $price - $minPrice); // Calculate potential profit
    }

    return $maxProfit;
  }
}