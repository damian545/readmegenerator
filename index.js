const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      name: "question",
      message: "What is your github name?",
    },
    {
      type: "input",
      name: "question",
      message: "What is the title?",
    },
    {
      type: "input",
      name: "question",
      message: "What is the discription?",
    },
    {
      type: "input",
      name: "question",
      message: "How is it installed?",
    },
    {
      type: "input",
      name: "question",
      message: "What is the usage?",
    },
    {
      type: "input",
      name: "question",
      message: "Do you have a licence?",
    },
    {
      type: "input",
      name: "question",
      message: "Any contributions?",
    },
    {
      type: "input",
      name: "question",
      message: "Questions?",
    },
    {
      type: "input",
      name: "question",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "question",
      message: "Who is the author?",
    },
  ])
  .then((answers) => {
    console.info("Answer", answers);
  });
