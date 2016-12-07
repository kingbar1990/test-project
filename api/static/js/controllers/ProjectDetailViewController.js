angular.module("App")
    .controller('ProjectDetailViewController', function($scope, $routeParams, projectService){
        var pid = $routeParams.id;
        projectService.getProject($scope, pid);

        $scope.deleteTask = function(task){
            var index = $scope.tasks.indexOf(task);
            $scope.tasks.splice(index, 1);
            projectService.deleteTask(task);
        }
});
