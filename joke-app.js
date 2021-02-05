const fs = require('fs');

let joke = 'Why do Java programmers have to wear glasses?' + 
            ' Because they don’t C#.';


createFolder = function(){
    const dir = './data';
            if(!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive : true
                });
            }
        } 

jokeFile = function(){
                fs.appendFile('./data/joke.txt', joke, function (err) {
                if (err) throw err;
                let textData = fs.readFileSync('./data/joke.txt', { encoding : "utf-8" });
                console.log(textData.toUpperCase());
            });
    };
deleteFolder = function(){
    fs.rmdirSync("./data", { recursive: true }, (err) => {  
        if (err) {  
        console.error(err); 
        }  
        else {  
        console.log("Data Folder Deleted!");  
        }  
    });  
}

createFolder();
setTimeout(jokeFile, 500);
setTimeout(deleteFolder, 2000);
// // jokeFile();
// deleteFolder()
