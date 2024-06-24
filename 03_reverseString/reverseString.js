const reverseString = function(str) {
    let final = [];
    for(let i = 0; i < str.length; i++) {
        final[i] = str.charAt(str.length - i - 1);
    }
    final = final.join("");
    return final;
};

// Do not edit below this line
module.exports = reverseString;
