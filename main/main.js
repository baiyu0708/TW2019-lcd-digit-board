/**
 * @param number {string} 要显示的数值，如"910"
 * @returns {string} 以LCD灯的形式显示数值，如：
 * ._. ... ._.\n
 * |_| ..| |.|\n
 * ..| ..| |_|\n
 */
module.exports = function main(number) {
    // 元素[i]存储数字i的显示字符串
    // 元素[i]是一个数组，含有三个元素，分别为数字i的上、中、下三行的显示字符串
    let digits = [
        [
            "._.",
            "|.|",
            "|_|"
        ], [
            "...",
            "..|",
            "..|"
        ], [
            "._.",
            "._|",
            "|_."
        ], [
            "._.",
            "._|",
            "._|"
        ], [
            "...",
            "|_|",
            "..|"
        ], [
            "._.",
            "|_.",
            "._|"
        ], [
            "._.",
            "|_.",
            "|_|"
        ], [
            "._.",
            "..|",
            "..|"
        ], [
            "._.",
            "|_|",
            "|_|"
        ], [
            "._.",
            "|_|",
            "..|"
        ]
    ];

    let lineTop = [];
    let lineMiddle = [];
    let lineBottom = [];

    for (let digit of digitsOf(number)) {
        lineTop.push(digits[digit][0]);
        lineMiddle.push(digits[digit][1]);
        lineBottom.push(digits[digit][2]);
    }

    return lineTop.join(" ") + "\n" +
        lineMiddle.join(" ") + "\n" +
        lineBottom.join(" ") + "\n";
};

/**
 * 返回整数各个数字
 * @param number {string}
 * @return {Array}
 */
function digitsOf(number) {
    let digits = [];
    for (let char of number.split("")) {
        digits.push(parseInt(char));
    }

    return digits;
}

console.log(digitsOf("910"));