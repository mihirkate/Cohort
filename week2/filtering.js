const input = [1, 2, 3, 4, 5, 6];
const ans = input.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans);
