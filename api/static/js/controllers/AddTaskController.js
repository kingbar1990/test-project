angular.module('App')
    .controller('AddTaskController', function(
        $scope,
        $routeParams,
        projectService,
        userService
    ){
        var pid = $routeParams.pid;

        userService.getUsers($scope);

        $scope.process = function(task){
            task.project_id = pid;
            task.user = [];
            angular.forEach($scope.selected, function(user){
                task.user.push(user.id);
            });
            console.log(task.user);
            projectService.addTask(task);
        };
    });
