module.exports = function reverse (n) {
   if (n < 0) {
        n *= -1;
    }

    let str = String(n);
    let newStr = '';

    for(let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }

    let newNum = Number(newStr);
    return newNum;  
};
