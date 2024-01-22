class RecentCounter {
    private $requests;

    function __construct() {
        $this->requests = [];
    }

    /**
     * @param Integer $t
     * @return Integer
     */
    function ping($t) {
        // Add the current request time to the requests array
        $this->requests[] = $t;

        // Remove requests that are outside the time frame [t - 3000, t]
        while ($this->requests[0] < $t - 3000) {
            array_shift($this->requests);
        }

        // Return the number of requests within the time frame
        return count($this->requests);
    }
}