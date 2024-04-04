// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Then connect the button to this function using 'onclick' in the html
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // user input will be first name (string), last name (string), and salary (number)
let option = true;
while (option) {
  // while option remains true, window will show three prompts, with first string labelling the input box above, second string as default text inside input
  const firstName = prompt("Employee First Name:", "First Name");
  const lastName = prompt("Employee Last Name:", "Last Name");
  let salary = prompt("Employee Salary:", "0");
  // if salary input is Not-a-Number, or salary exactly equals nothing, then salary value becomes 0
  if (isNaN(salary)  || salary === null) {
    salary = 0;
  }
  // creates an object named employee and assigns the input results from the prompts as properties within the object
  let employee = {
    firstName: firstName,
    lastName: lastName,
    // converts the salary input string to an integer so that the starter code currency effect takes place
    salary: parseInt(salary)
  }
// after the three input prompts, this puts up a confirmation window with text and ok/cancel options
  option = confirm("Add another employee?");
// puts the employee object into the employeesArray object array
  employeesArray.push(employee);
}  

return employeesArray;  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // creates an index to calculate the total of all the salaries first
  totalSalary = 0;
  for (i=0;i<employeesArray.length;i++){
    const currentEmployee = employeesArray[i];
    totalSalary += parseInt(currentEmployee.salary);
  }
  // then calculates the average and displays it to the console
  let averageSalary = totalSalary/employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toFixed(2)}`);
  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // math.random selects a random decimal number between 0 and 1, then multiplies that by the employeesArray length, 
  // then applies math.floor to round it down to the nearest whole number, to select the employee who has that number's place in the array 
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congrats to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
