const inquirer = require("inquirer");
const Engineer = require("./Lib/Engineer");
const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const path = require("path");

var team = [];

//CREATE MANAGER

function createManager() {
  const managerQuestions = [
    {
      type: "input",
      name: "ManagerName",
      message: "What is your Managers name?",
    },

    {
      type: "input",
      name: "ManagerId",
      message: "What is your Managers ID?",
    },

    {
      type: "input",
      name: "ManagerEmail",
      message: "What is your Managers Email?",
    },

    {
      type: "input",
      name: "ManagerOfficeNumber",
      message: "What is your Managers office phone number?",
    },
  ];

  inquirer.prompt(managerQuestions).then(function (response) {
    // console.log(response);

    const manager = new Manager(
      response.ManagerName,
      response.ManagerId,
      response.ManagerEmail,
      response.ManagerOfficeNumber
    );

    // console.log(manager);

    team.push(manager);
    console.log("team", team);
    nextStep();
  });
}

//CREATE EMPLOYEE

function nextStep() {
  const employee = [
    {
      type: "list",
      name: "employeeType",
      message: "what do you want to do next?",
      choices: ["Add Engineer", "Add Intern", "Im done."],
    },
  ];
  inquirer.prompt(employee).then(function (response) {
    if (response.employeeType === "Add Engineer") {
      createEngineer();
    } else if (response.employeeType === "Add Intern") {
      createIntern();
    } else {
      console.log(generateHTML(team));
      fs.writeFile(
        path.join(__dirname, "./dist/index.html"),
        generateHTML(team),
        (err) => {
          if (err) {
            console.log("ERROR");
          } else {
            console.log("FILE CREATED");
          }
        }
      );
    }
  });
}

//CREATE ENGINEER

function createEngineer() {
  const engineerQuestions = [
    {
      type: "input",
      name: "EngineerName",
      message: "Whats your Engineer's name?",
    },

    {
      type: "input",
      name: "EngineerId",
      message: "Whats your Engineer's ID?",
    },

    {
      type: "input",
      name: "EngineerEmail",
      message: "Whats your Engineer's email address",
    },

    {
      type: "input",
      name: "EngineerGitHub",
      message: "Whats your Engineer's Github account?",
    },
  ];

  inquirer.prompt(engineerQuestions).then(function (response) {
    const engineer = new Engineer(
      response.EngineerName,
      response.EngineerId,
      response.EngineerEmail,
      response.EngineerGitHub
    );
    console.log(engineer.getGithub(), "We did it!");
    team.push(engineer);
    console.log(team);
    nextStep();
  });
}

//CREATE INTERN

function createIntern() {
  const internquestions = [
    {
      type: "input",
      name: "InternName",
      message: "What is the name of your Intern?",
    },

    {
      type: "input",
      name: "InternId",
      message: "What is your interns ID?",
    },

    {
      type: "input",
      name: "InternEmail",
      message: "What is your interns email address?",
    },
    {
      type: "input",
      name: "InternSchool",
      message: "What school does your intern attend??",
    },
  ];

  inquirer.prompt(internquestions).then(function (response) {
    console.log(response);
    const intern = new Intern(
      response.InternName,
      response.InternId,
      response.InternEmail,
      response.InternSchool
    );
    team.push(intern);
    console.log(team);
    nextStep();
  });
}

createManager();

//HTML

{
  /* <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
 
 
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
 
 
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
 
 
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>


</div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div> */
}
