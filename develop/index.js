// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMark = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type:'input',
            name:'title', 
            message:'What is the title of your project?',
           
        },
        {
            type:'input',
            name:'description',
            message:'Describe your project.',
           
        },
        {
            type:'input',
            name: 'installation',
            message: 'What do you install to create your app?',
            
        },
        {
            type:'input',
            name: 'usage',
            message:'How do you use your app?',
            
        },
        {
            type:'list',
            name:'license',
            message:'Which license do you use?', 
            choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],

        },
        {
            type:'input',
            name:'contribution',
            message:'How can contributions be made?',
            
        },
        {
            type:'input',
            name:'test',
            message: 'How do you test your app?',
           
        },
        {
            type:'input',
            name:'github',
            message:'Enter your Github Username.',
                      
        },
        {
            type:'input',
            name: 'email',
            message: 'Enter your email address.',            
            
        }];


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName,data, function(err) {
        console.log("Yes!!!")
        if (err) {
            return console.log(err)
        } else {
            console.log("Done")
        }
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md',genMark(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
