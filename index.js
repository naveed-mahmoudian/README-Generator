// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { default: test } = require("node:test");

// Array of questions for user input
const questionsArr = [
  {
    type: "input",
    name: "fullName",
    message: "What is your full name?",
  },
  {
    type: "input",
    name: "year",
    message: "What year did you create your project?",
  },
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
  inquirer.prompt(questions).then((answers) => {
    if (answers.license === "Apache") {
      answers.license = "Apache License covers XYZ";
      writeToFile(answers);
    } else if (answers.license === "GNU") {
      answers.license = `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.`;
      writeToFile(answers);
    } else if (answers.license === "MIT") {
      answers.license = `MIT License

      Copyright (c) ${answers.year} ${answers.fullName}
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`;
      writeToFile(answers);
    }
  });
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
- [Questions](#questions)

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
GitHub: [${github}](https://www.github.com/${github}/)

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
