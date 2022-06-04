var fs = require("fs");

fs.appendFile("task2.txt", "Hello world\n", function (err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Yes");
    }
});