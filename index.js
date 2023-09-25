const express = require("express")
const app = express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("homepage")
})

app.listen(8080,()=>{
    console.log("connected")
})
