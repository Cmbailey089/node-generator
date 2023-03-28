// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMark = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type:'input',
            name:'title', 
            question:'What is the title of your project?',
           
        },
        {
            type:'input',
            name:'description',
            question:'Describe your project.',
           
        },
        {
            type:'input',
            name: 'installation',
            question: 'What do you install to create your app?',
            
        },
        {
            type:'input',
            name: 'usage',
            question:'How do you use your app?',
            
        },
        {
            type:'list',
            name:'license',
            question:'Which license do you use?', 
            choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],

        },
        {
            type:'input',
            name:'contribution',
            question:'How can contributions be made?',
            
        },
        {
            type:'input',
            question: 'How do you test your app?',
             name:'test',
           
        },
        {
            type:'input',
            question:'Enter your Github Username.',
             name:'github',
            
        },
        {
            type:'input',
            question: 'Enter your email address.',
            name: 'email',
            
        }];


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName,data, function(err) {
        console.log("yes")
        if (err) {
            return console.log(err)
        } else {
            console.log("done")
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
