// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeReadMe} = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },
        {
            type:'input',
            name: 'name',
            messages: 'message',
        },

]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
