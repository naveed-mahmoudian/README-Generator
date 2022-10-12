// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
    message:
      "Provide a short description explaining the what, why and how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions for your application",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for usage of your project.",
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
    message: "Provide examples on how to run tests for you application.",
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
    
## Usage
    
${usage}
    
## Credits

${credits}`,
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
