const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");
// decode , verify and generate

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign({ username }, jwtPassword);
  return signature;
}
function verifyJwt(token) {
  let ans = true;
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (err) {
    ans = false;
  }
  return ans;
}
function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

module.exports = { signJwt, verifyJwt, decodeJwt, jwtPassword };
// const ans = signJwt("Mihirkate@gmail.com", "123456789");
/* const ans = verifyJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1paGlya2F0ZUBnbWFpbC5jb20iLCJpYXQiOjE3MTA0MTM2Nzh9.cT386LfP9nwy_cAc7ocdcn2tovSMy8aWpHGhV8m-YWw"
);
console.log(ans); */
