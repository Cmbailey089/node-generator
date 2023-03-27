// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = ({title,description,installation}) =>
`(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


#${title}

##A quick description of the app

${description}

#Table of Contents

*[installation](#installation)

*[usage](#usage)

*[license](#license)

*[contribution](#contribution)

*[test](#test)

*[github](#github)

*[email](#email)

${installation}
${usage}
${license}
${contribution}
${usage}
${github}
${email}


`
    inquirer.prompt([
        {
            type:'input',
            name: 'title',
            messages: 'What is the title of your project?',
        },
        {
            type:'input',
            name: 'description',
            messages: 'Describe your project.',
        },
        {
            type:'input',
            name: 'installation',
            messages: 'What do you install to create your app?',
        },
        {
            type:'input',
            name: 'usage',
            messages: 'How do you use your app?',
        },
        {
            type:'input',
            name: 'license',
            messages: 'Which license do you use?',
        },
        {
            type:'input',
            name: 'contribution',
            messages: 'How can contributions be made?',
        },
        {
            type:'input',
            name: 'test',
            messages: 'How do you test your app?',
        },
        {
            type:'input',
            name: 'github',
            messages: 'Enter your Github Username.',
        },
        {
            type:'input',
            name: 'email',
            messages: 'Enter your email address.',
        },

]);


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName,data, function(err) {
        console.log("yes")
        if (err) {
            return console.log(err)
        } else {
            console.log("done")
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
}

// Function call to initialize app
init();
