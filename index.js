// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { default: test } = require("node:test");

// Array of questions for user input
const questionsArr = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation info for your project",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage info for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license: ",
    choices: ["Apache", "GNU", "MIT"],
  },
  {
    type: "input",
    name: "credits",
    message: "List yourself and collaborators for the credits section.",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide testing examples for you application.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Function to gather answers
function getAnswers(questions) {
  inquirer.prompt(questions).then((answers) => writeToFile(answers));
}

// Function to write README file
const writeToFile = ({
  title,
  description,
  installation,
  usage,
  license,
  credits,
  tests,
  github,
  email,
}) => {
  fs.writeFile(
    "README.md",
    `# ${title}

## Description
    
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)

## Installation

${installation}
    
## Usage
    
${usage}

## License
${license}
    
## Credits

${credits}

## Tests

${tests}

## Questions
GitHub Username: [${github}](https://www.github.com/${github}/)

Email: ${email}`,
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Success!");
      }
    }
  );
};

// Initialization function
function init() {
  getAnswers(questionsArr);
}

// Calling init function
init();
