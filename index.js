const db = require('./db/connection');
const {prompt, default: inquirer} = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

prompt([
    {
      type: 'list',
      name: 'task',
      message: 'What would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update role']
    }
  ])


  .then(({task}) => {
    if (task == 'view all departments') {
      db.query('SELECT * FROM department', function (err, results) {
        console.table(results)
        prompt(); 
      });
    }
    else if (task == 'view all roles') {
      db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id', function (err, results) {
        console.table(results)
        prompt();
      });
    }
    else if (task == 'view all employees') {
      db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, employee.manager_id AS manager FROM role JOIN employee on employee.role_id = role.id JOIN department on role.department_id = department.id;', function (err, results) {
        console.table(results);
        prompt()
      });
    }
  
})



