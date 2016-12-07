angular.module("App")
    .controller('ListViewController', function($scope, $location, projectService){
        $scope.projects = [];

        angular.forEach(projectService.getProjects(), function(project){
            project.deadline = new Date(project.deadline);
            $scope.projects.push(project);
        }); 
        
        $scope.deleteProject = function(project){
            var index = $scope.projects.indexOf(project);
            $scope.projects.splice(index, 1);
            projectService.deleteProject(index);
        }

    });

