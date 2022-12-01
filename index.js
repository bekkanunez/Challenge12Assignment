const db = require('./db/connection');
const {prompt} = require('inquirer');
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
        console.table(results);
      });
    }
    if (task == 'view all roles') {
      db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id', function (err, results) {
        console.table(results);
      });
    }
    if (task == 'view all employees') {
      db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
      });
    }

})
