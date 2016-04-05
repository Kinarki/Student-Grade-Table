var app = angular.module('sgtApp', []);

app.controller('appCtrl', function($scope){
    /*
     -Should handle variables used by FormController & studentListController
     -Handle Average Grade
     -Handles Initial student loading from API
     */
    var self = this;
    self.studentArray = [];
    self.student = {};
    var ref = new Firebase('https://sgt-kinarki.firebaseio.com/user/data');

    self.clearInput = function() {
        $('#student_form')[0].reset();
    };

    self.deleteStudent = function($index) {
        self.studentArray.splice($index, 1);
    };

    self.addStudent = function(){
        self.studentArray.push(this.student);
        ref.push(this.student);
        self.student = {};

    };

    self.addStudents = function (student) {
        self.studentArray.push(student);
        self.student = {};
    };

    self.populate = function(){
        var student_data;
        var holder;
        ref.on('value', function(snapshot) {

            for (var student in snapshot.val()) {
                holder = student;
                for (var obj in snapshot.val()[holder]) {
                    student_data = obj;
                    self.student[student_data] = snapshot.val()[holder][student_data];
                }
                self.addStudents(self.student);
            }
            $scope.$digest();
        })

    };
}).controller('formCtrl', function($scope){
    /*
     -Handle Inputs and validating inputs using angular filters
     -Handle adding the new students to the student List array after a successful API request
     -Handles Errors when request adds to the API
     */
}).controller('studentCtrl', function($scope){
    /*
    -Glues together the data from the App Controller into the table
    -Handle Deleting of a student from the API
        -Updates student list after successful call to APi
        -Shows error when user can’t be deleted
    */
});