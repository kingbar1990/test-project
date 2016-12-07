angular.module('App')
    .controller('EditProjectController', function($scope, $routeParams, $window, projectService){
        var pid = $routeParams.id;
        projectService.getProject($scope, pid);

        $scope.process = function(project){
            if($scope.files){
                project.image = $scope.files[0];
            }
            projectService.editProject(project);
        }
});
