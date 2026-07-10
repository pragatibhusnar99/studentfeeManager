var app = angular.module("studentApp", []);

app.controller("StudentController", function ($scope) {

    $scope.students = [];

    $scope.student = {};

    $scope.addStudent = function (form) {

        if (form.$valid) {

            $scope.students.push({
                name: $scope.student.name,
                course: $scope.student.course,
                status: $scope.student.status,
                amount: $scope.student.status == "Scholarship" ? 0 : $scope.student.amount,
                mode: $scope.student.mode
            });

            $scope.student = {};

            form.$setPristine();
            form.$setUntouched();
        }

    };

    $scope.deleteStudent = function (student) {

        var index = $scope.students.indexOf(student);

        if (index > -1) {
            $scope.students.splice(index, 1);
        }

    };

    $scope.clearAll = function () {

        $scope.students = [];

    };

    $scope.countStatus = function (status) {

        var count = 0;

        angular.forEach($scope.students, function (student) {

            if (student.status === status) {
                count++;
            }

        });

        return count;

    };

});