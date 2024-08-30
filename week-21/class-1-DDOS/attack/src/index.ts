const axios = require('axios');


async function sendReq(otp: string) {
    let data = JSON.stringify({
        "email": "mihirkate13@gmail.com",
        "otp": otp,
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

    await axios.request(config)


}

sendReq("123345");