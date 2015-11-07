/**
 * Define all global variables here
 */
/**
 * student_array - global array to hold student objects
 * @type {Array}
 */

var student_array = [];
var avg = 0;

/**
 * inputIds - id's of the elements that are used to add students
 * @type {string[]}
 <<<<<<< HEAD
 */

/**
 * addClicked - Event Handler when user clicks the add button
 */

function addClick() {
    addStudent();
    updateData();
}

/**
 * cancelClicked - Event Handler when user clicks the cancel button, should clear out student form
 */

function cancelClick() {
    // grabs form by ID and uses reset method to clear input
    document.getElementById('student_form').reset();
}

/**
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 *
 * @return undefined
 */
function addStudent() {

    //var student is our object , the key is set to input fields
    var student = {
        'name': document.getElementById('studentName').value,
        'course': document.getElementById('course').value,
        'grade': $('#studentGrade').val(),
        'delete': false
    };
    //student-array is adding each student object as an array
    student_array.push(student);

    updatesStudentList();
    //clears add form after data is added to table
    cancelClick();
}

/**
 * clearAddStudentForm - clears out the form values based on inputIds variable
 */

//see cancelClick function

/**
 * calculateAverage - loop through the global student array and calculate average grade and return that value
 * @returns {number}
 */

function calculateAverage() {
    var total = 0;  //saving the total value of the loop
    var count= 0;

    for(var i=0; i<student_array.length; i++) {
        if(!student_array[i].delete){
            //adding to the total with each loop
            total += parseInt(student_array[i].grade);
            count ++;
        }
    }
    //calculating the average
    avg = Math.floor(total / count);
    if(isNaN(avg)){
        $('.avgGrade').text(0);
    } else {
    //appending to the html element
    $('.avgGrade').text(avg);
    }

}

/**
 * updateData - centralized function to update the average and call student list update
 */

function updateData() {
    calculateAverage();
}
/**
 * updateStudentList - loops through global student array and appends each objects data into the student-list-container > list-body
 */



function updatesStudentList() {

    $('.student-list tbody').html('');
    for (var i = 0; i < student_array.length; i++) {
        var student = student_array[i];
        var student_name_value = student_array[i].name;
        var student_course_value = student_array[i].course;
        var student_grade_value = student_array[i].grade;
        var student_delete_value = student_array[i].delete;

        if(student_delete_value == false) {

            addStudentToDom(student);
        }
    }

}
/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 */

function addStudentToDom(student) {

    var td1 = $('<td>', {
        text: student.name
    });
    var td2 = $('<td>', {
        text: student.course
    });
    var td3 = $('<td>', {
        text: student.grade
    });
    var btn = $('<button>').addClass('btn btn-danger btn-xs').text('Delete').attr('type', 'button');

    var td4 = $('<td>').append(btn);

    var tr = $('<tr>');
    $(tr).append(td1, td2, td3, td4);
    $('.student-list tbody').append(tr);

    $(btn).click(function () {
        $(tr).remove();
        student.delete = true;
        calculateAverage();
    });

}
/**
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */
function reset(){
    student_array = [];
    cancelClick();

    //'user info unavailable' DOM creation
    var h3 = $('<h3>').text('User Info Unavailable');
    var td = $('<td>').attr('colSpan', '2').append(h3);
    var tr1 = $('<tr>').append(td);
    $('.student-list tbody').append(tr1);
}

/**
 * Listen for the document to load and reset the data to the initial state
 */

//document ready and ajax call
$(document).ready(function(){
    reset();
    $('.populate').click(function(){
        $.ajax({
            dataType: 'json',
            data: {
                api_key: 'WCTLtARP67'
            },
            method: 'POST',
            url: 'http://s-apis.learningfuze.com/sgt/get',
            success: function(result){
                console.log('AJAX Success function called, with the following result:', result);
            }

        });
    });
});

