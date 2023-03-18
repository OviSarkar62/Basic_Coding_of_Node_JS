// File System
const fs = require("fs");

// Write File
/*fs.writeFile('demo1.txt',"I am ovi", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successful")
    }
})*/

// Append File
/*fs.appendFile('demo1.txt',". I am 25 years old", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successful")
    }
})*/

// Read File
/*fs.readFile('demo1.txt','utf-8', (err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})*/

// Rename File
/*fs.rename('demo1.txt','fileSystem.txt', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successful")
    }
})*/

// Delete File
/*fs.unlink('demo2.txt', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successful")
    }
})*/

// Exists File
/*fs.exists('demo2.txt', (result)=>{
    if(result){
        console.log("found")
    }else{
        console.log("not found")
    }
})*/