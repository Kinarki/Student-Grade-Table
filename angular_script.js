var app = angular.module('sgtApp', []);

app.controller('sgtCtrl', function($scope){
    var self = this;
    self.studentArray = [];
    self.student = {};

    self.clearInput = function() {
        $('#student_form')[0].reset();
    };

    self.deleteStudent = function($index) {
        this.studentArray.splice($index, 1);
    };

    self.addStudent = function(){
        this.studentArray.push(this.student);
        this.student = {};
    };

    self.addStudents = function (student) {
        this.studentArray.push(student);
    };

    self.populate = function(){
        var student_data;
        $.ajax({
            dataType: 'json',
            data: {
                api_key: 'WCTLtARP67'
            },
            method: 'POST',
            url: 'http://s-apis.learningfuze.com/sgt/get',
            success: function(result){
                console.log('AJAX Success function called, with the following result:', result);
                for (var i = 0; i < result.data.length; i++) {
                    student_data = result.data[i];

                        self.addStudents(student_data);

                }
            $scope.$digest();
            }
        });
    };
});