class Solution {
    /**
     * @param ListNode $head
     * @return ListNode
     */
    function reverseList($head) {
        // Base case: if the list is empty or has only one node
        if ($head === null || $head->next === null) {
            return $head;
        }

        // Reverse the rest of the list
        $restReversed = $this->reverseList($head->next);

        // Adjust the pointers to reverse the current node
        $head->next->next = $head;
        $head->next = null;

        return $restReversed;
    }
}