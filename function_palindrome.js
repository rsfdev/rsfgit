
function checkPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - i -1]) {
            return false;
        }
    }
return true;
};

console.log(checkPalindrome("arara"));
console.log(checkPalindrome("development"));
console.log(checkPalindrome("neveroddoreven"));
