const express = require('express');
const app =  express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;






// activate
app.listen(PORT, ()=>{
    console.log(`APP is listening at ${PORT}`);
})