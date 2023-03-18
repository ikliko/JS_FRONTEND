// In this problem, you have to arrange all students by grade. You as the secretary of the school
// principal will process students and store them into a school register before the new school year
// hits. As a draft, you have a list of all the students from last year but mixed. Keep in mind that if a student
// has a lower score than 3, he does not go into the next class. As a result of your work, you have
// to print the entire school register sorted in ascending order by grade already filled with all
// the students from last year in the format:
// `{nextGrade} Grade
// List of students: {All students in that grade}
// Average annual score from last year: {average annual score on the entire class from last year}`
// And empty row {console.log}
// The input will be an array with strings, each containing a student's name, last year's grade,
// and an annual score. The average annual score from last year should be formatted to the second decimal point.

function studentsRegister(arr) {
    const app = {
        storage: {},

        addStudent(name, grade, score) {
            if (score <= 3) {
                return;
            }

            grade++;

            if (!this.storage[grade]) {
                this.storage[grade] = {
                    students: [],
                    grade,
                    add(student) {
                        this.students.push(student);
                    },
                    getAverageScore() {
                        return (
                            this.students.map(s => s.score).reduce((a, s, i, arr) => a + +s, 0) / this.students.length
                        ).toFixed(2);
                    },
                    listStudentNames() {
                        return this.students.map(s => s.name).join(', ');
                    }
                };
            }

            this.storage[grade].add({name, grade, score});
        },

        getStudents() {
            return Object.keys(this.storage)
                .map(grade => this.storage[grade])
                .map(studentClass => [
                    `${studentClass.grade} Grade`,
                    `List of students: ${studentClass.listStudentNames()}`,
                    `Average annual score from last year: ${studentClass.getAverageScore()}`,
                    ''
                ].join('\n'))
                .join('\n')
        },
    };

    arr.forEach(r => {
        app.addStudent(...r.split(', ').map(i => i.split(': ')[1]));
    });

    return app.getStudents();
}

// console.log(studentsRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
// ));


// console.log(studentsRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]));