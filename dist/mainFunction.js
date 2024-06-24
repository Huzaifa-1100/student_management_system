#! /usr/bin/env node
// Importing Management Class
import { StudentManagement } from "./managementClass.js";
// Import Inquirer
import inquirer from "inquirer";
// Import Chalk
import chalk from "chalk";
// Define Main function to Run the Program with the help of classes
async function mainFunc() {
    // Greetings to user
    console.log(chalk.white("-").repeat(60));
    console.log(chalk.bgWhite.red(`\t~ WELCOME TO STUDENT MANAGEMENT SYSTEM ~`));
    console.log(chalk.white("-").repeat(60));
    const students = new StudentManagement();
    // Using While loop to run the program until condition is false
    while (true) {
        // Use inquirer to select option
        const userSelect = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Please Select One Option",
            choices: [
                "Add Student",
                "Enroll Student",
                "View Student Balance",
                "Pay Tution Fees",
                "Show Student Status",
                "Exit",
            ],
        });
        // Use Switch cases to apply conditions
        switch (userSelect.select) {
            case "Add Student":
                const userInput = await inquirer.prompt({
                    name: "name",
                    type: "input",
                    message: "Please Enter Your Name",
                });
                students.addStudent(userInput.name);
                break;
            case "Enroll Student":
                const enrollStudent = await inquirer.prompt([
                    {
                        name: "studentId",
                        type: "number",
                        message: "Please Enter 5 digit Student ID",
                    },
                    {
                        name: "course",
                        type: "list",
                        message: "Please Select a Cousrse",
                        choices: ["Python", "TypeScript", "HTML", "CSS"],
                    },
                ]);
                students.enrollCourse(enrollStudent.studentId, enrollStudent.course);
                break;
            case "View Student Balance":
                const viewBalance = await inquirer.prompt({
                    name: "studentId",
                    type: "number",
                    message: "Please Enter Your 5 digit ID",
                });
                students.studentBalance(viewBalance.studentId);
                break;
            case "Pay Tution Fees":
                const tutionFees = await inquirer.prompt([
                    {
                        name: "stuentId",
                        type: "number",
                        message: "Please Enter 5 digit Student ID",
                    },
                    {
                        name: "course",
                        type: "list",
                        message: "Please Select a Course to pay fees for",
                        choices: ["Python", "TypeScript", "HTML", "CSS"],
                    },
                ]);
                students.payStudentFees(tutionFees.stuentId, tutionFees.course);
                break;
            case "Show Student Status":
                const viewStatus = await inquirer.prompt({
                    name: "studentId",
                    type: "number",
                    message: "Please Enter 5 digit ID",
                });
                students.studentStatus(viewStatus.studentId);
                break;
            case "Exit":
                console.log("Exiting...");
                console.log(chalk.red("ـ").repeat(55));
                console.log(chalk.bgRed.white("\t\t\tEXIT"));
                console.log(chalk.red("ـ").repeat(55));
                process.exit();
        }
    }
}
mainFunc();
