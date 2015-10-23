/**
 * Define all global variables here
 */
/**
 * student_array - global array to hold student objects
 * @type {Array}
 */
var student = {};
student.array = [];
student.name='';
student.course='';
student.grade ='';


/**
 * inputIds - id's of the elements that are used to add students
 * @type {string[]}
 */


/**
 * addClicked - Event Handler when user clicks the add button
 */

function addClick() {


    var name = document.getElementById('studentName').value;
    var course = document.getElementById('course').value;
    var grade = document.getElementById('studentGrade').value;

    student.name = name;
    student.course = course;
    student.grade = grade;
    var student_array = name + course + grade;
    student.array.push(student_array);

    console.log(student);
    updatesStudentList();

}

/**
 * cancelClicked - Event Handler when user clicks the cancel button, should clear out student form
 */

    function cancelClick() {
        document.getElementById('student_form').reset();
    }

/**
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 *
 * @return undefined
 */

/**
 * clearAddStudentForm - clears out the form values based on inputIds variable
 */

/**
 * calculateAverage - loop through the global student array and calculate average grade and return that value
 * @returns {number}
 */

/**
 * updateData - centralized function to update the average and call student list update
 */

/**
 * updateStudentList - loops through global student array and appends each objects data into the student-list-container > list-body
 */

function updatesStudentList() {
    console.log("made it to the update function");
    var student_name_value = $('<td>', {
        text: student.name
    });
    var student_course_value = $('<td>', {
        text: student.course
    });
    var student_grade_value = $('<td>', {
        text: student.grade
    });
    var tr = $('<tr>');
    $(tr).append(student_name_value, student_course_value, student_grade_value);
    $('.student-list tbody').append(tr);

}


/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 */

/**
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */


/**
 * Listen for the document to load and reset the data to the initial state
 */
