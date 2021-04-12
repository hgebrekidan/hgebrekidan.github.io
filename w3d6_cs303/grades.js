"use strict";

/* exports at end of file since exporting an object, which can only be referenced after definition 
 comment out when running in browser */


/* Write a program to compute student grades and the average score for the class.  
Your program should have a quiz object that will contain properties of “students” and “key”. 
 The “students” property will be an array of student objects of the following form:
student10 = {sid: 10, answers: [{qid: 2, ans: “b”}, {qid: 3, ans: “a”}, {qid: 1, ans: “b”}] }
It has a property “sid” (student id) and another property “answers”.  The answer property
 holds an array that records the students answers for the quiz.  The array holds objects that 
 have a question id (“qid”) property that uniquely identifies the question, and an “ans” property 
 that holds the student’s answer.
The ”key” property of the quiz will hold an array with objects that give the correct answers.  
Create an object named quiz with the following methods
•	getAverage(), computes the average score over all students, 
•	scoreStudent(sid), computes the quiz score for this student
The answer arrays might not have the questions in the same order.  Write a function, answerComparator, 
that you can use to sort the answer arrays by the quiz id, “qid”.   You may assume that there will be 
answer objects for every question so that once they are sorted they arrays will have the student answers 
and the corresponding key answer in the same position of each array.  Score 1 point for each answer that matches the key.
*/

const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} obj1 is an answer object
 * @param {Object} obj2 is an answer object 
 * @returns {number} difference of the identifiers
 */
 function answerComparator(obj1, obj2) {
    return obj1.qid - obj2.qid;
}
/**
 * 
 * @param {*} id student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (id) {
    let student = quiz.students.find(item => item.sid === id);
    if (student) {
        student.answers.sort(answerComparator);
        let totalScore = 0;
        for (let i = 0; i < student.answers.length; i++) {
            if (student.answers[i].ans === quiz.key[i].ans) {
                totalScore++;
            }
        }
        return totalScore;
    }

}
//console.log(quiz.scoreStudent(10))
/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function () {
    let sum = 0;
    for (let stud of quiz.students) {
        sum += this.scoreStudent(stud.sid);
    }
    let average = (sum / quiz.students.length).toFixed(3);
    return average;
}
//console.log(quiz.getAverage())


/* comment out when running in browser */
//module.exports = {quiz,getAverage,scoreStudent}; 