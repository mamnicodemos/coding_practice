/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const mapping = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
        "0": " "
    };
    const output = [];
    if(digits.length > 0){
        combinations(0, mapping, "", digits, output);
    }

    return output;
};

function combinations(index, mapping, combination, digits, output){
    if(combination.length == digits.length){
        output.push(combination);
        return;
    }
    for(let letter of mapping[digits[index]]){
        combinations(index + 1, mapping, combination + letter, digits, output);
    }
}
