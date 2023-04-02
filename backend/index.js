const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser")
const {OAuth2Client} =require("google-auth-library")
const client = new OAuth2Client('718543284873-fc2q0b2aa87s5g2h4scn3nbd6laotc7k.apps.googleusercontent.com')

app.use(bodyParser.json())
app.use(cors())

app.post('/api/google-login', async(req,res)=>{
    const ticket = await client.verifyIdToken({
        idToken:req.body.token
    })
   
    return res.status(200).json(ticket.getPayload())
})

app.listen(4001,()=>{
    console.log("Server is ready")
})