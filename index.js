// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your application Title",
    name: "title",
  },
  {
    type: "input",
    message: "What is the short description?",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the Installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Who can use this Application?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed to this Application?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter Test Instructions?",
    name: "tests",
  },
  {
    type: "list",
    message: "What license is used?",
    choices: ["NONE", "MIT", "APACHE", "APM", "DUB", "BOWER"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your Github User Name",
    name: "github",
  },
  {
    type: "input",
    message: "What is your Github Link?",
    name: "github_link",
  },
  {
    type: "input",
    message: "What is your Email Address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const exportData = generateMarkdown(data);
  return fs.writeFileSync(fileName, exportData);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
