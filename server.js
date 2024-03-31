require('dotenv').config();

const express = require('express');
const app =  express();

const PORT = process.env.PORT ;


require("./config/dbConfig").connect();

app.get("/",(req,res)=>{
    res.json({ message: 'up'})
})



// activate
app.listen(PORT, ()=>{
    console.log(`APP is listening at ${PORT}`);
})