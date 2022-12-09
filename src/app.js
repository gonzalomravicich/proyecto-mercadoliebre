const express = require ("express");
const app = express();
const path = require ("path");

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
})
app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
app.listen(3050, ()=>{
    console.log("server run in : http://localhost:3050/")
})