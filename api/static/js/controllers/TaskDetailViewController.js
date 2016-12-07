angular.module('App')
    .controller('TaskDetailViewController', function(
        $scope,
        $routeParams,
        $route,
        projectService,
        userService
    ){

        var project_id = $routeParams.pid;
        var task_id = $routeParams.id;

        projectService.getTask($scope, task_id);
        userService.getUsers($scope);

        $scope.assignUser = function(user){
            var task = $scope.task;
            task.user.push(user.id);
            console.log(task.user);
            task.project_id = project_id;
            projectService.editTask(task);
            $route.reload();
        };

        $scope.deleteSubtask = function(subtask){
            var index = $scope.subtasks.indexOf(subtask);
            $scope.subtasks.splice(index, 1);
            projectService.deleteSubtask(subtask);
        }

        $scope.addSubtask = function(subtask){
            subtask.task_id = task_id;
            $scope.subtasks.push(subtask);
            projectService.addSubtask(subtask);
            $route.reload();
        };

        $scope.editSubtask = function(subtask){
            subtask.task_id = task_id;
            projectService.editSubtask(subtask);
        }

        $scope.setSubtask = function(index){
            $scope.subtask = $scope.subtasks[index];
            $scope.edit = true;
        }

        $scope.setAdd = function(){
            $scope.subtask = "";
            $scope.edit = false;
        }
    });
