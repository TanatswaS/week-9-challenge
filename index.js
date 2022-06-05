const inquirer = require('inquirer');
const fs = require('fs');

//inquire to generate questions
inquirer.prompt(
  [
    {
        type: 'input',
        messages:"What's the project title?(Required)",
        name: 'title',
        validate:titleInput => {
          if(titleInput) {
            return true;
          }else{
            console.log('Please enter your title!');
            return false;
          }
        }
    },
    {
      type: 'input',
      messages:'What is your github username? (Required)',
      name: 'githubUserName',
      validate:githubInput => {
        if(githubInput) {
          return true;
        }else{
          console.log('Please enter your Github username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      messages:"What is your Email address?(Required)",
      name: 'email',
      validate:emailInput => {
        if(emailInput) {
          return true;
        }else{
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your repository. (Required)',
      validate: descInput => {
          if (descInput) {
              return true;
          } else {
              console.log('Please enter your description!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Please provide step-by-step installation instructions for your project. (Required)',
      validate: installInput => {
          if (installInput) {
              return true;
          } else {
              console.log('Please enter your installation instructions!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use. (Required)',
      validate: usageInput => {
          if (usageInput) {
              return true;
          } else {
              console.log('Please enter your use instructions!');
              return false;
          }
      }
  },
  {
      type: 'list',
      name: 'license',
      message: 'Which license will you use for your project?',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicense']
  },
  {
      type: 'confirm',
      name: 'confirmContributers',
      message: 'Would you like to allow other developers to contribute?',
      default: true
  },
  {
      type: 'input',
      name: 'contribute',
      message: 'Please provide guidelines for contributing. (Required)',
      when: ({ confirmContributers }) => {
          if (confirmContributers) {
              return true;
          } else {
              return false;
          }
      },
      validate: contributerInput => {
          if (contributerInput) {
              return true;
          } else {
              console.log('Please enter contributer guidelines!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'test',
      message: 'Please provide instructions on how to test the app. (Required)',
      validate: testInput => {
          if (testInput) {
              return true;
          } else {
              console.log('Please enter your use test instructions!');
              return false;
          }
      }
  }
]
)
//function for read me
function writeToFile(fileName, data) { }

//initialize app
const init = () => {
  return inquirer.prompt(questions)
  .then(readmeData => {
    console.log(readmeData);
  })
}

init();