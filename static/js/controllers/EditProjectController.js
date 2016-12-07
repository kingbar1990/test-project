angular.module('App')
    .controller('EditProjectController', function($scope, $routeParams, projectService){
        var pid = $routeParams.id;
        $scope.project = projectService.getProject(pid);

        $scope.process = function(project){
            if($scope.files){
                project.image = $scope.files[0];
            }
            projectService.editProject(pid, project);
        }
    });