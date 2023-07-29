const palindromes = function (string) {
 const text = string.toLowerCase();
 const onlyA = text.replace(/[^a-z0-9]/g, '');
 const reverse = onlyA.split("").reverse().join("");
 if(reverse == onlyA)
    return true;
 return false;
};

// Do not edit below this line
module.exports = palindromes;
