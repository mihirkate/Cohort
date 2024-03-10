/*  ---------One way of doing this --------
const input = [1, 2, 3, 4, 5];
function transfrom(i) {
  return i * 2;
}
const ans = input.map(transfrom);
console.log(ans); */

/* ------ Other way of doing This ------   */
const input = [1, 2, 3, 4, 5];

const ans = input.map(function transfrom(i) {
  return i * 2;
});
console.log(ans);
