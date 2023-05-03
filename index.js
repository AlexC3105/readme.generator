const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./generateMarkDown");

const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github username? ',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe any usage information: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe any installation instructions: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please describe any testing instructions: ',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please enter the contribution information: ',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter the credits criteria: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select license type: ',
        choices: ['MIT', 'BSD 3', 'GPL 3.0', 'APACHE 2.0', 'NONE'],
    },
];

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const markdown = generateMarkDown(data);
        fs.writeFile("README.md", markdown, (err) => 
        err ? console.log(err) : console.log("success!!!")
        );
    });
}

init();
