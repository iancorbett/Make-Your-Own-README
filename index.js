const inquirer = require("inquirer")
const fs = require('fs');
//const { title } = require("process");
// const { default: Choices } = require("inquirer/lib/objects/choices");

const generateHTML = ({title, description, instructions, usageInfo, contribute, testing, license, licenseExplanation, username, email}) => 



    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="index.css">
  <title>Document</title>
</head>
<body class="background">

  <header class="title">
     ${title}
  </header>

    <nav class="toc">
    <p class="paragraphs">Table of Contents:</p>
    <a class="anchor" href="#description">Project Description</a>
    <a class="anchor" href="#instructions">Instructions</a>
    <a class="anchor" href="#usageInfo">Usage Information</a>
    <a class="anchor" href="#contributing">Contributing</a>
    <a class="anchor" href="#testing">Testing</a>
    <a class="anchor" href="#license">License</a>
    <a class="anchor" href="#licenseExplanation">License Explanation</a>
    <a class="anchor" href="#questions">Questions</a>
  </nav>

    <div class="container">
      
      <p class="paragraphs" id="description">Project Description:</p> <p class="input">${description}</p>
      <p class="paragraphs" id="instructions">User Instructions:</p> <p class="input">${instructions} </p>
      <p class="paragraphs" id="usageInfo">Usage Information:</p> <p class="input">${usageInfo} </p>
      <p class="paragraphs" id="contributing">How to Contribute:</p> <p class="input">${contribute} </p>
      <p class="paragraphs" id="testing">Testing the application:</p> <p class="input">${testing}</p>
      <p class="paragraphs" id="license">License:</p> <p class="input">${license}</p> 
      <p class="paragraphs" id="licenseExplanation">License Explanation:</p> <p class="input">${licenseExplanation}</p>
      <p class="paragraphs" id="questions">Questions:</p>
      <ul>
        <li class="input">My GitHub username is ${username}. Here is a link to my Github: github.com/${username}</li>
        <li class="input">E-mail: ${email}</li>
      </ul>
    </div>
  
</body>
</html>`;


inquirer
.prompt([
    {
        type: "question",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Add a description of your project!",
        name: "description"
    },
    {
        type: "input",
        message: "Add the installation instructions!",
        name: "instructions"
    },
    {
        type: "input",
        message: "Add the usage information!",
        name: "usageInfo"
    },
    {
        type: "input",
        message: "How does someone contribute?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How does someone test application?",
        name: "testing"
    },
    {
        type: "list",
        message:"What license would you like to select?",
        name: "license",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-clause 'Simplified' license",
            "BSD 3-clause 'New' or 'Revised' license", "Boost Software License 1.0", "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"
        ]
    },
    {
        type: "input",
        message: "Explain the license that the project is covered under.",
        name: "licenseExplanation"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your e-mail addess?",
        name: "email"
    }
    
])

    .then((answers) => {
    console.log(`The title of your project is ${answers.title}!`),
    console.log(`Description of project: ${answers.description}`),
    console.log(`Installation instructions: ${answers.instructions}`),
    console.log(`Usage Information: ${answers.usageInfo}`),
    console.log(`How to contribute: ${answers.contribute}`),
    console.log(`How to test the application: ${answers.testing}`),
    console.log(`The license that you selected is ${answers.license}!`),
    console.log(`License Explanation: ${answers.licenseExplanation}`),
    console.log(`Your username is ${answers.username}! Here is a link to your GitHub: "github.com/${answers.username}"`),
    console.log(`Your e-mail address is ${answers.email}!`)
   
     const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
);
    }
)
