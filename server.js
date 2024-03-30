require('dotenv').config();

const express = require('express');
const app =  express();

const PORT = process.env.PORT || 4000;



app.get("/",(req,res)=>{
    res.json({ message: 'up'})
})



// activate
app.listen(PORT, ()=>{
    console.log(`APP is listening at ${PORT}`);
})