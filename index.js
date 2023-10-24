// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message:  "Please write a short description of your project:",
    name: "description"
  },
  {
    type: "input",
    message: "Please provide installation instructions for your project:",
    name: "installation"
  },
  {
    type: "input",
    message: "Please provide usage information for your project:",
    name: "usage"
  },
  {
    type: "input",
    message: "Please provide contribution guidelines for your project:",
    name: "contribute"
  },
  {
    type: "list",
    message: "please select the license you used for this project",
    name: "license",
    choices: ["MIT", "Apache", "GPLv2", "GPLv3", "BSD 3-clause", "Unlicensed"]
  },
  {
    type: "input",
    message: "Please provide testing instructions for your project:",
    name: "testing"
  },
  {
    type: "input",
    message: "Please enter your Github username:",
    name: "github"
  },
  {
    type: "input",
    message: "Please enter your email address:",
    name: "email"
  }
];

const licenseBadges = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "GPLv2": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "BSD 3-clause": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "Unlicensed": "This project is unlicensed."
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let badge = `${data.license}`;
  fs.writeFile(fileName, 
    `# ${data.title}

  ${licenseBadges[badge]}
  ## Description

  ${data.description}
    
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Testing](#testing)
  - [Contact](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribute}

  ## License
    
  This project utilizes the ${data.license} license. 

  ## Testing

  ${data.testing}

  ## Questions

  If you have any questions, I can be contacted via the following links: 
 [Github](https://www.github.com/${data.github})  
 [Email](mailto: ${data.email})
    
    `, 
    (error) => {if(error) console.log(error)}
  )}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(responses => {
    writeToFile("BuiltREADME.md", responses)
    })
}

// Function call to initialize app
init();
