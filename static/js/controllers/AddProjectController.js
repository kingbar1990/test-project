angular.module('App')
    .controller('AddProjectController', function($scope, $location, projectService){
        $scope.project = {};

        $scope.process = function(project){
            if($scope.files){
                project.image = $scope.files[0];
            }
            projectService.addProject(project);
            $location.path('/');
        }
    });