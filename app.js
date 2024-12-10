const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
//server files in public folder
app.use(express.static('public'));

app.get("/", (req,res) =>{
    res.sendFile('index.html', (err) =>{
        if(err)
            console.log(err)
    })
})
app.listen(port, ()=> {
    console.log(`listening at ${port}...`)
})

app.post("/Form", (req, res)=>{
    console.log(req.body);
    data = req.body
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (error)=>{
        if (error){
            console.log(`Failed to save data ${error}`)
        }
    });
    console.log("data sent")
})
