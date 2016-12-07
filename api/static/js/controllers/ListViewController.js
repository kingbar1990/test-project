angular.module("App")
    .controller('ListViewController', function($scope, $http, projectService, userService){
        $scope.projects = [];

        projectService.getProjects($scope);

        $scope.deleteProject = function(project){
            projectService.deleteProject(project);
            projectService.getProjects($scope);
        }
});
