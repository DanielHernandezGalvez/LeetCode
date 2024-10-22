import math

class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        
        # Helper function to compute the greatest common divisor (GCD)
        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a

        # Check if str1 + str2 equals str2 + str1
        if str1 + str2 != str2 + str1:
            return ""
        
        # Find the greatest common divisor of the lengths of str1 and str2
        gcd_length = gcd(len(str1), len(str2))
        
        # Return the substring of str1 from 0 to gcd_length
        return str1[:gcd_length]