// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => { 
    inquirer 
        .prompt([
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username? (Required)",
                validate: github => {
                    if(github) {
                        return true;
                    } else {
                        console.log("Please provide your GitHub username.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address? (Required)",
                validate: email => {
                    if(email) {
                        return true;
                    } else {
                        console.log("Please provide your email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the name of your project? (Required)",
                name: "title",
                validate: title => {
                    if (title) {
                        return true;
                    } else {
                        console.log("Please enter a name for your project");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "description",
                message: "Please provide a detailed description to your project. (Required)",
                validate: desciption => {
                    if(desciption) {
                        return true;
                    } else {
                        console.log("You must provide a detailed description of your project.");
                        return false;
                    }
                }
            },
            {
                type: "checkbox",
                name: "languages",
                message: "What did you build this project with? (Check all that apply)",
                choices: ["Javascript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"],
            },
            {
                type: "input",
                name: "install",
                message: "Please provide installation instructions for your project. (Required)",
                validate: install => {
                    if(install) {
                        return true;
                    } else {
                        console.log("Your project must include installation instructions.");
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                name: "usage",
                message: "Would a user need addition infomation to run your project?",
                default: true
            },
            {
                type: "input",
                name: "userUsage",
                message: "Provide additional user information.",
                when: ({userUsage}) => userUsage
            },
            {
                type: "input",
                name: "contribute",
                message: "What are the contribution guidelines for this project?",
            },
            {
                type: "input",
                name: "test",
                message: "What are the test instructions for this project? (Required)",
                validate: test => {
                    if(test) {
                        return true;
                    } else {
                        console.log("You must provide test instructions for a user");
                        return false;
                    }
                }
            },
            {
                type: "checkbox",
                name: "license",
                message: "What license would want to apply this project? (Required)" ,
                choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
                validate: license => {
                    if(license) {
                        return true;
                    } else {
                        console.log("Please choose a valid option");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "link",
                message: "Please provide a link to your GitHub repo. (Required)",
                validate: link => {
                    if(link) {
                        return true;
                    } else {
                        console.log("You must provide a link to your project's GitHub repo.");
                        return false;
                    }
                }
            }
        ])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
