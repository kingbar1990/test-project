angular.module("App")
    .controller('DetailViewController', function($scope, $routeParams, projectService){
        var pid = $routeParams.id;
        $scope.project = projectService.getProject(pid);
    });

