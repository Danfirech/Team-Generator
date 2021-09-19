function getEmployeeDetail(employee) {
  if (employee.officeNumber) {
    return "Office number: " + employee.officeNumber;
  } else if (employee.gitHub) {
    return `GitHub: <a href="https://github.com/${employee.gitHub}"> ${employee.gitHub} </a>`;
  } else {
    return "School " + employee.school;
  }
}

function generateHTML(teamData) {
  const employeeCards = teamData.map((employee) => {
    return ` <div class="col">
    <div class="card">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-text">${employee.roll}</h6>
      <div class="card-body">
      
      <p class="card-text">${employee.id}</p>
      <p class="card-text">${employee.email}</p>
      <p class="card-text">${getEmployeeDetail(employee)}</p>
     
      </div>
    </div>`;
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
<body>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  
  ${employeeCards.join("")}
  
  
    
    </div>
</body>ss
</html>
  `;
}

module.exports = generateHTML;
