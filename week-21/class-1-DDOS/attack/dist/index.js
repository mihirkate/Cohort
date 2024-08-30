"use strict";
const axios = require('axios');
let data = JSON.stringify({
    "email": "mihirkate13@gmail.com",
    "otp": "569136",
    "newPassword": "123"
});
let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/reset-password',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjlmZTJmYTQxNWY3MGVjZWU1ODRhZjMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjE3NTQ0MjJ9.JULHb7yvgT_FoeOzYCKuSUoq-AArn358ejs46jDZAg8',
        'Content-Type': 'application/json'
    },
    data: data
};
axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
})
    .catch((error) => {
    console.log(error);
});
