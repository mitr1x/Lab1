const user = require('./user');
const yargs = require('yargs/yargs');



yargs(process.argv.slice(2))
    .command({
        command: 'list',
        aliases: ['ls'],
        desc: 'Get the list of languages',
        handler: (argv) => {
            console.log( user.list() );
        }
    })
   .command({
       command: 'add',
       desc: 'Add new language',
       builder: {
           title: {            // first argument
               type: 'string',
               demandOption : true,
               describe: 'Language title'
           },
           level:                       // second argument
               {
                   describe: 'Level of Knowledge',      // description
                   demandOption: true,         // optional param or not
                   type: 'string'              // param type
               }
       },
       handler: (argv) => {
           user.add( {title: argv.title, level: argv.level} );
           console.log( {title: argv.title, level: argv.level} );
       }
   }).command({
       command: 'read',
       desc: 'Read info leng',
       builder:{
           title:{
                type: 'string',
                demandOption : true,
                describe: 'Language title'
           }
       },
       handler: (argv) =>{
           user.read( {title: argv.title} );
       }
   }).command({
        command: 'remove',
        desc: 'Remove leng',
        builder:{
            title:{
                type: 'string',
                demandOption : true,
                describe: 'Language title'
            }
        },
        handler: (argv) =>{
            user.remove( {title: argv.title} );
        }
    }).command({
        command: 'add',
        desc: 'Add leng',
        builder:{
            title:{
                type: 'string',
                demandOption : true,
                describe: 'Language title'
            },
            level:                       // second argument
            {
                describe: 'Level of Knowledge',      // description
                demandOption: true,         // optional param or not
                type: 'string'              // param type
            }
        },
        handler: (argv) =>{
            user.add( {title: argv.title, level: argv.level} );
        }
    }).parse();