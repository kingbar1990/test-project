angular.module('App').
  service('projectService', function($http) {
    var path;
    var projectList = [{
            'id': 1,
            'title': 'Project 1',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'deadline': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
            'image': 'imgs/project1.jpg',
            'tasks': [
                {
                    'id': 1,
                    'title': 'Task 1',
                    'description': 'description of task 1',
                    'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'subtasks': [
                        {
                            'id': 1,
                            'title': 'Sub Task 1',
                            'description': 'sub task 1 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        },
                        {
                            'id': 2,
                            'title': 'Sub Task 2',
                            'description': 'sub task 2 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        }
                    ]
                },
                {
                    'id': 2,
                    'title': 'Task 2',
                    'description': 'description of task 2',
                    'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'subtasks': [
                        {
                            'id': 1,
                            'title': 'Sub Task 1',
                            'description': 'sub task 1 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        },
                        {
                            'id': 2,
                            'title': 'Sub Task 2',
                            'description': 'sub task 2 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        }
                    ]
                },
            ]
        },
        {
            'id': 2,
            'title': 'Project 2',
            'description': 'Test Project',
            'deadline': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
            'image': 'imgs/project1.jpg',
            'tasks': [
                {
                    'id': 1,
                    'title': 'Task 1',
                    'description': 'description of task 1',
                    'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'subtasks': [
                        {
                            'id': 1,
                            'title': 'Sub Task 1',
                            'description': 'sub task 1 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        },
                        {
                            'id': 2,
                            'title': 'Sub Task 2',
                            'description': 'sub task 2 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        }
                    ]
                },
                {
                    'id': 2,
                    'title': 'Task 2',
                    'description': 'description of task 2',
                    'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'subtasks': [
                        {
                            'id': 1,
                            'title': 'Sub Task 1',
                            'description': 'sub task 1 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        },
                        {
                            'id': 2,
                            'title': 'Sub Task 2',
                            'description': 'sub task 2 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        }
                    ]
                },
            ]
        },
        {
            'id': 3,
            'title': 'Project 3',
            'description': 'Test Project',
            'deadline': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
            'image': 'imgs/project1.jpg',
            'tasks': [
                {
                    'id': 1,
                    'title': 'Task 1',
                    'description': 'description of task 1',
                    'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'subtasks': [
                        {
                            'id': 1,
                            'title': 'Sub Task 1',
                            'description': 'sub task 1 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        },
                        {
                            'id': 2,
                            'title': 'Sub Task 2',
                            'description': 'sub task 2 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        }
                    ]
                },
                {
                    'id': 2,
                    'title': 'Task 2',
                    'description': 'description of task 2',
                    'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                    'subtasks': [
                        {
                            'id': 1,
                            'title': 'Sub Task 1',
                            'description': 'sub task 1 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        },
                        {
                            'id': 2,
                            'title': 'Sub Task 2',
                            'description': 'sub task 2 desc',
                            'start_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                            'end_date': 'Wed Dec 07 2016 00:00:00 GMT+0200 (EET)',
                        }
                    ]
                },
            ]
        },
        ];

    var addProject = function(project) {
        projectList.push(project);
        var fd = new FormData();

        fd.append("title", project.title);
        fd.append('description', project.description);
        fd.append('image', project.image);

        // $http.post('/api/qwe', fd, {
        //     transformRequest: angular.identity,
        //     headers: {'Content-Type': undefined}
        //  })

        $http({
          method: 'POST',
          url: '/api/qwe',
          data: 'qwe'
        }).then(function successCallback(response) {
            console.log(response);
          }, function errorCallback(response) {
            console.log(response);
          });
            };

    var editProject = function(pid, edited_project){
      angular.forEach(projectList, function(project){
        if(project.id == pid){
          project = edited_project;
        }
      });
    };

    var getProjects = function(){
        // $http({
        //   method: 'GET',
        //   url: '/someUrl'
        // }).then(function successCallback(response) {

        //   }, function errorCallback(response) {
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        //   });
        return projectList;
    };

    var getProject = function(pid){
      var tmp;
      var keepGoing = true;
      angular.forEach(projectList, function(project){
        if(keepGoing){
          if(project.id == pid){
            tmp = project;
            keepGoing = false;
          }
        }
      });
      return tmp;
    };

    var deleteProject = function(index){
      projectList.splice(index, 1);
    };

    var addTask = function(pid, task){
        var index;
        angular.forEach(projectList, function(project){
        if(project.id == pid){
          project['tasks'].push(task);
        }
      });
    }

    var getTask = function(project_id, task_id){
        var tmp;
        var keepGoing = true;
        angular.forEach(projectList, function(project){
        if(keepGoing){
          if(project.id == project_id){
            tmp = project;
            angular.forEach(project['tasks'], function(task){
                if(task.id == task_id){
                    tmp = task;
                    keepGoing = false;
                }
            });
          }
        }
        });
        return tmp;
    }

    var editTask = function(project_id, task_id, edited_task){
      angular.forEach(projectList, function(project){
        if(project.id == project_id){
            angular.forEach(project['tasks'], function(task){
                if(task.id = task_id){
                    task = edited_task;
                }
            });
        }
      });
    };

    var deleteTask = function(pid, index){
        var keepGoing = true;
        angular.forEach(projectList, function(project){
            if(keepGoing){
                if(project.id == pid){
                    project['tasks'].splice(index, 1);
                    keepGoing = false;
                }
            }
        });
    }

    var setUrl = function(new_path){
        path = new_path;
    }

    var getUrl = function(){
        return path;
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
      setUrl: setUrl,
      getUrl: getUrl,
    };

});
