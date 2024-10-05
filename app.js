const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World from Swarnab");
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("app started");
})