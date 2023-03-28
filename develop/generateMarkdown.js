// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = license;
  let badgeType = '';
  if (badge === 'MIT') {
    badgeType = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (badge === 'APACHE 2.0') {
    badgeType = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (badge ==='GPL 3.0') {
    badgeType = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (badge ==='BSD 3') {
    badgeType = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else {
    license = ''
  }
  return badgeType;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let link = license;
  let renderlink = ''
  if (link === 'MIT') {
    renderlink = '(https://opensource.org/licenses/MIT)'
  } else if (link === 'APACHE 2.0') {
    renderlink = '(https://opensource.org/licenses/Apache-2.0)'
  } else if (link === 'GPL 3.0') {
    renderlink = '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (link === 'BSD 3') {
    renderlink = '(https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    license = ''
  }
  return renderlink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = license;
  let rendSection = ``
  if (section === true) {
   rendSection = `This app is licensed under ${license}`
  } 
  
  return rendSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
${renderLicenseBadge(data.license)}


## A quick description of the app

${data.description}

# Table of Contents

*[Installation](# Installation)

*[Usage](# Usage)

*[License](# License)

*[Contribution](# Contributions)

*[Test](# Test)

*[Questions](# Questions)

### Installation

I installed ${data.installation} to create this app.





# Usage

${data.usage}



# License

${data.license}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}



### Contributions

${data.contribution}




### Test

${data.test}




# Questions

If you have any questions regarding this app and additional uses,
you can contact me at ${data.email}.

My GitHub is also available for questions and credentials.
https://github.com/${data.github}



`
}

module.exports = generateMarkdown;
