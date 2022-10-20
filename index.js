const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) => 
`<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Portfolio Generator</title>
</head>

<body>
    <h1 style="text-align: center;">Portfolio Generator</h1>
    <div class="jumbotron">
        <h2 class="display-4">Hi! My name is ${answers.name}</h1>
        <hr class="my-4">
        <h3>Contact Me</h3>
        <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${answers.github}</li>
            <li class="list-group-item">My LinkedIn is: ${answers.linkedIn}</li>
        </ul>
    </div>
</body>

</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedIn',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
