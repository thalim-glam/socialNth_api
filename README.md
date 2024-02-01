# NoSQL Challenge: Social Network API

## Description
- This project builds an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## Table of Contents
  - [Installation](#installation)
  - [Required Task](#required-task)
  - [User Instruction](#user-instruction)
  - [Command line code](#command-line-code)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)

## Installation

- Here are the installation process :
  - [1] Here is the repo for this application https://github.com/thalim-glam/EmpSQLtracker 
  - [2] Clone the repository or download the zip folder.
  - [3] Open the source code in your code editor (for example VSCode).
  - [4] Open the integrated terminal or git bash to test the application.
  - [5] Please refer to [Tests](#tests) section for further information regarding testing.

## Required Task 

##### User Story 
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
##### Acceptance criteria
```
  GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

```

## User Instruction

  - Click here for the repository: https://github.com/thalim-glam/EmpSQLtracker 
  - Click here for Readme file: https://github.com/thalim-glam/EmpSQLtracker/blob/main/README.md
  - Here is a sample screenshots of my application :
    - Walkthrough Video link: https://drive.google.com/file/d/16TIQZ6X7lXxOFuqxeeKnn4O24m78-JDt/view 
    - Video of the application ![Walkthrough Video](./assets/walkthrough.mp4)
    - Screenshot ![Screenshot](./assets/Screenshot.png)
    
## Command line code

I used the following command lines:
- npm run start [ You may need this to start the server ]
- npm i express [To install modules if you do ot see it ]
- git status
- git add -A
- git commit -m "Comment goes here"
- git branch
- git pull origin main
- git push
- git checkout main
- git checkout -b feature/add-branch

## Credits

Apart from me :D the credit also goes to my Instructor, TAs, Tutor, Classmates, and 
- Google (my best buddy)
- Geeks for Geeks
- Stack Overflow
- MySQL documentatiion
- Class Recordings
- Tutorials Teacher

## License
 ![Github license](https://img.shields.io/badge/license-MIT-blue.svg) 

## Tests

To test this application please type, 
  - npm i [To install node modules if not there]
  - make sure the dependecies inside package.json have ("dotenv": "^8.2.0", "console.table": "^0.10.0", "inquirer": "^8.2.4", "asciiart-logo": "^0.2.6", "mysql2": "^3.1.0").
  - npm run start [ To start the server ]
  - For more information please refer to the walkthrough video.

### Done By: Tasneem Halim 😎

