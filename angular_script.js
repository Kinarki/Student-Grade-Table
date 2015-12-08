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

    //self.addStudents = function (student) {
    //    self.studentArray.push(student);
    //};

    //self.populate = function(){
    //    var student_data;
    //    $.ajax({
    //        dataType: 'json',
    //        data: {
    //            api_key: 'WCTLtARP67'
    //        },
    //        method: 'POST',
    //        url: 'http://s-apis.learningfuze.com/sgt/get',
    //        success: function(result){
    //            console.log('AJAX Success function called, with the following result:', result);
    //            for (var i = 0; i < result.data.length; i++) {
    //                student_data = result.data[i];
    //                    self.addStudents(student_data);
    //            }
    //        $scope.$digest();
    //        }
    //    });
    //};
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