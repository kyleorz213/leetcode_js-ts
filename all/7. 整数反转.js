/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let xx = Math.abs(x);
  let ans = xx.toString().split("").reverse().join("");
  ans = ans > 2 ** 31 - 1 || -ans > 2 ** 31 ? 0 : ans;
  return x > 0 ? ans : -ans;
};
