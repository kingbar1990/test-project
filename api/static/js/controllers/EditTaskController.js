angular.module('App')
    .controller('EditTaskController', function($scope, $routeParams, $location, projectService, userService){
        var project_id = $routeParams.pid;
        var task_id = $routeParams.id;

        projectService.getTask($scope, task_id);

        $scope.process = function(task){
            task.project_id = project_id;
            task.users = [];
            angular.forEach($scope.selected, function(user){
                task.users.push(user.id);
            });
            projectService.editTask(task);
            $location.path('/');
        }
    });
