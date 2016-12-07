angular.module('App').
  service('projectService', function($http, $location) {
    var path;
    var projectList = [];

    var addProject = function(project) {
        var formData = new FormData();

        formData.append('title', project.title);
        formData.append('description', project.description);
        formData.append('deadline', project.deadline);
        formData.append("image", project.image);

        var request = {
            method: 'POST',
            url: '/api/projects/',
            data: formData,
            headers: {
                'Content-Type': undefined
            }
        };

        $http(request)
            .success(function (response) {
                console.log(response);
                $location.path('/');
            })
            .error(function (response) {
                console.log(response);
            });
    };

    var editProject = function(project){
        var formData = new FormData();

        formData.append('title', project.title);
        formData.append('description', project.description);
        formData.append('deadline', project.deadline);
        if(typeof project.image != 'string'){
            formData.append("image", project.image);
        }


        var request = {
            method: 'PUT',
            url: `/api/projects/${project.id}/`,
            data: formData,
            headers: {
                'Content-Type': undefined
            }
        };

        $http(request)
            .success(function (response) {
                console.log(response);
                $location.path('/');
            })
            .error(function (response) {
                console.log(response);
            });
    };

    var getProjects = function($scope){
        $http.get('/api/projects/?format=json').success( function(response) {
            console.log(response);
            $scope.projects = response;
        });
    };

    var getProject = function($scope, pid){
        $http.get(`/api/projects/${pid}?format=json`).success( function(response) {
            $scope.project = response;
            $scope.tasks = [];
            angular.forEach($scope.project['tasks'], function(task_id){
                $http.get(`/api/tasks/${task_id}`).success(function(response){
                    $scope.tasks.push(response);
                });
            });
        });
    };

    var deleteProject = function(project){
        $http.delete(`/api/projects/${project.id}/`).success( function(response) {
            console.log(response)
        });
    };

    var addTask = function(task){
        $http.post('/api/tasks/', {
            title: task.title,
            description: task.description,
            start_date: task.start_date,
            end_date: task.end_date,
            project_id: task.project_id,
            user: task.users,
        }).success( function(response) {
            console.log(response)
            $location.path('/');
        }).error( function(response) {
            console.log(response)
        });
    }

    var getTask = function($scope, task_id){
        $http.get(`/api/tasks/${task_id}`).success(function(response){
            $scope.task = response;
            $scope.subtasks = [];
            $scope.assigned_users = [];

            angular.forEach($scope.task['user'], function(user_id){
                $http.get(`/api/users/${user_id}/`).success(function(response){
                    $scope.assigned_users.push(response);
                });
            });

            $scope.users_loaded = true;

            angular.forEach($scope.task['subtasks'], function(subtask_id){
                $http.get(`/api/subtasks/${subtask_id}/`).success(function(response){
                    $scope.subtasks.push(response);
                });
            });
        });
    }

    var editTask = function(task){
        console.log(task);
      $http.put(`/api/tasks/${task.id}/`, {
            title: task.title,
            description: task.description,
            start_date: task.start_date,
            end_date: task.end_date,
            project_id: task.project_id,
            user: task.user,
        }).success( function(response) {
            console.log(response);
        }).error( function(response) {
            console.log(response)
        });
    };

    var deleteTask = function(task){
        $http.delete(`/api/tasks/${task.id}/`).success( function(response) {
            console.log(response)
        });
    }

    var deleteSubtask = function(subtask){
        $http.delete(`/api/subtasks/${subtask.id}/`).success( function(response) {
            console.log(response)
        });
    }


    var addSubtask = function(subtask){
        $http.post('/api/subtasks/', {
            title: subtask.title,
            description: subtask.description,
            start_date: subtask.start_date,
            end_date: subtask.end_date,
            task_id: subtask.task_id,
            user: subtask.users
        }).success( function(response) {
            console.log(response)
        }).error( function(response) {
            console.log(response)
        });
    };

    var editSubtask = function(subtask){
        $http.put(`/api/subtasks/${subtask.id}/`, {
            title: subtask.title,
            description: subtask.description,
            start_date: subtask.start_date,
            end_date: subtask.end_date,
            task_id: subtask.task_id
        }).success( function(response) {
            console.log(response)
        }).error( function(response) {
            console.log(response)
        });
    }

    return {
      addProject: addProject,
      getProjects: getProjects,
      getProject: getProject,
      editProject: editProject,
      deleteProject: deleteProject,
      addTask: addTask,
      editTask: editTask,
      getTask: getTask,
      deleteTask: deleteTask,
      deleteSubtask: deleteSubtask,
      addSubtask: addSubtask,
      editSubtask: editSubtask,
    };

});
