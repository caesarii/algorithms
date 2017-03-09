
function isPalindrome(str) {
    if(str.length < 2) {
        return true;
    }
    var left = 0;
    var right = str.length - 1;
    while (left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

var str = "12345321";
console.log(isPalindrome(str));