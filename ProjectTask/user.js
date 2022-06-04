const fs = require('fs');
const lodash = require('lodash');

function add(language) {
    const data = fs.readFileSync('user.json', 'utf8');
    const user = JSON.parse(data);

    lang = {
        title: language.title,
        level: language.level
    };


    function remove(language) {
    
        const data = fs.readFileSync('user.json', 'utf8');
        const user = JSON.parse(data);
        let lang = lodash.remove(user.languages, (element) => element.title == language.title);
    
        if(lang.length != 0){
            dataJson = JSON.stringify(user);
            console.log(dataJson);
            fs.writeFileSync("user.json", dataJson);
        }   
        else{
            console.log("Not found " + language.title);
        }
           
    }
    

    function read(language) {
        let lang = list().find((element) => element.title == language.title );
    
        if(lang)
            console.log(lang);
        else
            console.log("Not found " + language.title);
    }


    const list = () => {
        const data = fs.readFileSync('user.json', 'utf8')
        const user = JSON.parse(data)
        return user.languages;
    }
    
    
    }

    dataJson = JSON.stringify(user);
    console.log(dataJson);
    fs.writeFileSync("user.json", dataJson);


module.exports = {list, add, remove, read};