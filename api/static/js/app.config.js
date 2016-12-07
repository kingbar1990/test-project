var app = angular.module('App');
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/static/views/list_view.html",
        controller: "ListViewController",
    })
    .when("/project/:id", {
        templateUrl: "static/views/project_detail_view.html",
        controller: "ProjectDetailViewController"
    })
    .when("/add", {
        templateUrl: "static/views/project_form.html",
        controller: "AddProjectController"
    })
    .when('/project/:id/edit', {
        templateUrl: "static/views/project_form.html",
        controller: "EditProjectController"
    })
    .when('/project/:pid/task/add', {
        templateUrl: "static/views/task_form.html",
        controller: "AddTaskController"
    })
    .when('/project/:pid/task/:id/edit', {
        templateUrl: "static/views/task_form.html",
        controller: "EditTaskController"
    })
    .when('/project/:pid/task/:id', {
        templateUrl: "static/views/task_detail_view.html",
        controller: "TaskDetailViewController"
    })
    .when('/register', {
        templateUrl: "static/views/register.html",
        controller: "RegisterController"
    })
    .otherwise({redirectTo:'/'});

});

app.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});
