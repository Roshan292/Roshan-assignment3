var fs=require("fs");
//var data=fs.readFileSync('input.txt');
//console.log(data.toString());
fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("program ended");


// --------------------alternative-------------------------------------
// fs.readFile('input.txt','utf8',function(err,data){
//     if(err) return console.error(err);
//     console.log(data);
// });
// console.log("program ended");