const inquirer = require('inquirer');

const fs = require('fs');

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
        choices: ['MIT', 'BSD', 'EPL', 'CDDL', 'GPL', 'Apache'],
    },
];

function writeToFile(data) {
    const fileName = ();
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Great! here is your README file. '));
};

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(generateMarkDown(data))
    });
};

init();
