const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title', 
    message: 'What is your project title?',
},
{
    type: 'input',
    name: 'description', 
    message: 'What is your project description?',
},
{
    type: 'list',
    name: 'license', 
    message: 'Choose a license for your project!',
    choices: ['MIT', 'APL','Apache','None',]
},
{
    type: 'input',
    name: 'installation',
    message: 'What is the installation process?'
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this application?'
},





];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created ReadMe!')
  );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("ReadMe.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
