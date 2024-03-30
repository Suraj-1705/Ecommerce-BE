const express = require("express");
const app = express();

app.get("/health", (req,res)=>{
    res.send("server is running!")
})


app.listen(3000, console.log(`server started at port`))