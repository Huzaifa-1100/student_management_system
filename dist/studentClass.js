// Import chalk from chalk
import chalk from "chalk";
// Define fixed tution fees for each course
const courseFees = {
    Python: 400,
    TypeScript: 300,
    HTML: 200,
    CSS: 100,
};
// Making a class for student
class Student {
    static counter = 10000;
    id;
    name;
    courses;
    balalnce;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = []; // initialize an empty array
        this.balalnce = 1100; // Initial Balance
    }
    // Method to enroll a Student
    enrollStudent(course) {
        const fee = courseFees[course];
        if (fee !== undefined) {
            this.courses.push({ name: course, fees: fee, paid: false });
        }
    }
    // Method to View Student Balance
    viewBalance() {
        console.log(chalk.white("-").repeat(60));
        console.log(chalk.bgYellow.red(`Mr. ${this.name}, Your Remaining Balance is ${this.balalnce}`));
        console.log(chalk.white("-").repeat(60));
    }
    //   Method to pay tution fees for the selected course
    payTutionFees(course) {
        const enrolledCourses = this.courses.find((c) => c.name === course);
        if (enrolledCourses && !enrolledCourses.paid) {
            this.balalnce -= enrolledCourses.fees;
            enrolledCourses.paid = true;
            console.log(chalk.white("-").repeat(60));
            console.log(chalk.bgYellow.red(`You hvae successfully paid ${enrolledCourses.fees} for ${course}`));
            console.log(chalk.white("-").repeat(60));
        }
        else if (enrolledCourses && enrolledCourses.paid) {
            console.log(chalk.white("-").repeat(60));
            console.log(chalk.bgYellow.red(`The Tution fee for ${course} has already been paid`));
            console.log(chalk.white("-").repeat(60));
        }
        else {
            console.log(chalk.white("-").repeat(60));
            console.log(chalk.bgRed.white(`Your are not enrolled in this course ${course}`));
            console.log(chalk.white("-").repeat(60));
        }
    }
    //   Method to show student status
    showStudentStatus() {
        console.log(chalk.white("-").repeat(55));
        console.log(chalk.bgWhite.red(`ID: ${this.id}`));
        console.log(chalk.bgWhite.red(`Name : ${this.name}`));
        console.log(chalk.bgWhite.red(`Courses:`));
        this.courses.forEach((course) => {
            console.log(chalk.bgWhite.red(`* Name : ${course.name}, Fee: ${course.fees} Paid: ${course.paid}`));
        });
        console.log(chalk.bgWhite.red(`Balance: ${this.balalnce}`));
        console.log(chalk.white("-").repeat(55));
    }
}
export { Student };
