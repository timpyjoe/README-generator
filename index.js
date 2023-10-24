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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, 
    `# ${data.title}

  ## Description

  ${data.description}
    
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## License
    
  This project utilizes the ${data.license} license. 

  ## Testing

  ${data.testing}

  ## Contact 

  If you have any questions, I can be contacted via the following links: 
 [Github](https://www.github.com/${data.github}) [Email](mailto: ${data.email})
    
    `, 
    (error) => console.log(error))
}

// TODO: Create a function to initialize app
function init() {
  console.log("Please enter all responses in quotation marks")
  inquirer.prompt(questions)
    .then(responses => {
    writeToFile("README.md", responses)
    })
}

// Function call to initialize app
init();
