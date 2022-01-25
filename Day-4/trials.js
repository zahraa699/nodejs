// const bcrypt = require("bcrypt");

// (async () => {
//     const hash = await bcrypt.hash("12345678", 10);
//     console.log(hash);
//     // $2b$10$X.iTbb9XBXL5tFJmCU4mmOcRR8arLo/SXNJLpQDjcqYQUaIOw895S
//     const valid = await bcrypt.compare("12345678", "$2b$10$X.iTbb9XBXL5tFJmCU4mmOcRR8arLo/SXNJLpQDjcqYQUaIOw895S")
//     console.log(valid);
// })()

const jwt = require ("jsonwebtoken");
const result = jwt.sign({
    id:1,
    isAdmin:true
},"secretKey")
console.log(result)
// try {
// tokenkey
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjQyMTkyODg4fQ.8Bc3pOx3f8UKpLd5nDgGHEak4JAVO80bJ5Xyqsmz-RI
// const isValidToken= jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjQyMTkyODg4fQ.8Bc3pOx3f8UKpLd5nDgGHEak4JAVO80bJ5Xyqsmz-RI","secretKey")

// } catch (error) {
//     console.log("invalid token");
// }
// console.log(isValidToken)