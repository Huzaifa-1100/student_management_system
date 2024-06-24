// Import Student class
import { Student } from "./studentClass.js";
// Import chalk
import chalk from "chalk";
// Making class to manage student data
export class StudentManagement {
    students;
    constructor() {
        this.students = [];
    }
    // Method to add New Student
    addStudent(name) {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        console.log(chalk.white("-").repeat(60));
        console.log(chalk.bgYellow.red(`Student : ${newStudent.name}, added successfully Student ID is : ${newStudent.id} `));
        console.log(chalk.white("-").repeat(60));
    }
    //   Method to enroll a student in a course
    enrollCourse(studentId, course) {
        const student = this.findStudent(studentId);
        if (student) {
            student.enrollStudent(course);
            console.log(chalk.white("-").repeat(60));
            console.log(chalk.bgYellow.red(`Student ${student.name} enrolled in ${course} Successfully`));
            console.log(chalk.white("-").repeat(60));
        }
        else {
            console.log(chalk.white("-").repeat(60));
            console.log(chalk.bgRed.white(`Student not found Please Enter a Valid ID`));
            console.log(chalk.white("-").repeat(60));
        }
    }
    //   Method to view a student balance
    studentBalance(studentId) {
        const student = this.findStudent(studentId);
        if (student) {
            student.viewBalance();
        }
        else if (student !== studentId) {
            console.log(chalk.white("-").repeat(60));
            console.log(chalk.bgRed.white(`Student not found Please Enter a Valid ID`));
            console.log(chalk.white("-").repeat(60));
        }
    }
    //   Method to pay student fees
    payStudentFees(studentId, course) {
        const student = this.findStudent(studentId);
        if (student) {
            student.payTutionFees(course);
        }
        else {
            console.log(chalk.white("-").repeat(60));
            console.log(chalk.bgRed.white(`Student not found Please Enter a Valid ID`));
            console.log(chalk.white("-").repeat(60));
        }
    }
    //   Method to show Student Status
    studentStatus(studentId) {
        const student = this.findStudent(studentId);
        if (student) {
            student.showStudentStatus();
        }
        else {
            console.log(chalk.white("-").repeat(60));
            console.log(chalk.bgRed.white(`Student not found Please Enter a Valid ID`));
            console.log(chalk.white("-").repeat(60));
        }
    }
    // Method to fine student
    findStudent(studentId) {
        return this.students.find((student) => student.id === studentId);
    }
}
