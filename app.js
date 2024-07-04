// app.js
angular.module('taskManagerApp', [])
.controller('TaskController', function($scope) {
    $scope.tasks = [
        {text: 'Learn AngularJS', completed: false},
        {text: 'Build a simple app', completed: false}
    ];

    $scope.addTask = function() {
        if ($scope.taskText) {
            $scope.tasks.push({text: $scope.taskText, completed: false});
            $scope.taskText = '';
        }
    };

    $scope.removeTask = function(index) {
        $scope.tasks.splice(index, 1);
    };
});
