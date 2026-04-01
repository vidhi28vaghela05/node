const { error } = require("node:console");
const fs = require("node:fs");

// create a file
// fs.appendfile(path, data, callback fnc)
fs.appendFile("hello.txt", 'hello world !', (e)=>{
    if(e) throw error;
    console.log("new file creatd");
});
fs.appendFile("index.html", "<h1>hellow world</h1>",(e)=>{
    if (e) throw error;
    console.log("create index.html file");
});

// create a folder
// fs.mkdir(path, data, callback fnc)
// fs.mkdir("images", (e)=>{
//     if(e) throw error;
//     console.log("create a image folder");
// });

// if you want to create nested folder and files  then you have to change defult setting ==> recursive: true
fs.mkdir("css/style.css",{recursive: true}, (e)=>{
    if(e) throw error;
    console.log("create file into css folder");
});

// rename files
// fs.rename('filename old', 'filename new ', callback fnc)
// fs.rename("hello.txt", "world.txt",(e)=>{
//    if(e) throw error;
//    console.log("rename file name to world.txt");
// });

// remove folder
// fs.rmdir(path,  callback fnc)
// fs.rmdir("images",(e)=>{
//     if(e) throw error;
//     console.log("remove folder");
// });

// remove file
// fs.rm(path,  callback fnc)
// fs.rm("css/style.css",{recursive:true},(e)=>{
//     if(e) throw error;
//     console.log("remove style.css file");
// });

// read file
// fs.read(path,  callback fnc)
fs.readFile("world.txt","utf-8",(e,data)=>{
    if(e) throw error;
    console.log(data)
    console.log("readthe file - world.txt");
});

// fs.readdir
// fs.readdir(path,  callback fnc)
fs.readdir("css",(e,files)=>{
    if(e) throw error;
    console.log(files);
    console.log("read css files");
});

// copy file
// fs.copyfile(src(filename), dest(destination), callback fnc)
fs.copyFile('index.html', 'copy.html',(e)=>{
     if(e) throw error;
    console.log("file copy successfully");
});







