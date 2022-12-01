SELECT
    role.id, role.title, department.name AS department, role.salary 
FROM role
JOIN department ON role.department_id = department.id;



SELECT
    employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, employee.manager_id AS manager
FROM role
JOIN employee on employee.role_id = role.id
JOIN department on role.department_id = department.id;


