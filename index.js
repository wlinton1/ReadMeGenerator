const fs = require("fs");
const inquirer = require("inquirer");
const md = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "Please enter your email address:",
    name: "email"
  },
  {
    type: "input",
    message: "Please enter your Github username:",
    name: "username"
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "projectname"
  },
  {
    type: "input",
    message: "Describe your project:",
    name: "description"
  },
  {
    type: "list",
    message: "Which license should this project have?",
    name: "license",
    choices: ["MIT", "MPL", "GPL", "Apache", "Boost"]
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation"
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests"
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage"
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing"
  }
];

function writeToFile(fileName, data) {

  const inputData = md(data);
  fs.appendFile(fileName, inputData, (err) => { if (err) { console.log(err) } });
}

function init() {
  inquirer.prompt(questions)
    .then((response) => {
      writeToFile("createdReadMe.md", response);
    })
    .catch((err) => { console.log(err) });
}

init();