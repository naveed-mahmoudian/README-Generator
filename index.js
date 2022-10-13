// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input
const questionsArr = [
  {
    type: "input",
    name: "fullName",
    message: "What is your Full Name?: ",
  },
  {
    type: "input",
    name: "year",
    message: "What Year did you create your project?: ",
  },
  {
    type: "input",
    name: "title",
    message: "What is your Project Title?: ",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a Description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide Installation info for your project: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide Usage info for your project: ",
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
    message: "List your project's Credits: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide Testing Examples for your project: ",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?: ",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?: ",
  },
];

// Function to gather answers
function getAnswers(questions) {
  inquirer.prompt(questions).then((answers) => {
    if (answers.license === "Apache") {
      answers.license = `
      
      Copyright (c) ${answers.year} ${answers.fullName}
      
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
          http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;

      answers.badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

      writeToFile(answers);
    } else if (answers.license === "GNU") {
      answers.license = `
      
      Copyright (c) ${answers.year} ${answers.fullName}
      
      Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.`;

      answers.badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

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

      answers.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

      writeToFile(answers);
    }
  });
}

// Function to write README file
const writeToFile = ({
  badge = "",
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

${badge}

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
        console.log("Successfully created README file!");
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
