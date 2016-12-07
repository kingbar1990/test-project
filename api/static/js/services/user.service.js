angular.module('App').
  service('userService', function($http, $location) {

    var login = function($scope, user){
        $http.post('/api/accounts/login/', {
            login: user.name,
            password: user.password,
        }).success(function(){
            checkAuth($scope);
        });
    }

    var logout = function($scope){
        $http.post('/api/accounts/logout/').success(function(response){
            $scope.username = null;
            console.log(response);
        }).error(function(response){
            console.log(response);
        });
    }

    var checkAuth = function($scope){
        $http.get('api/accounts/profile/').success(function(response){
            console.log(response);
            $scope.username = response.username;
        }).error(function(response){
            console.log(response);
        });
    }

    var register = function($scope, user){
        $http.post('/api/accounts/register/', {
            username: user.name,
            password: user.password,
            password_confirm: user.confirmPassword,
        }).success(function(response){
            $location.path('/');
        }).error(function(response){
            console.log(response);
        });
    };

    var getUsers = function($scope){
        $http.get('/api/users/').success(function(response){
            $scope.users = response;
            $scope.users_loaded = true;
        });
    };

    return {
        login: login,
        logout: logout,
        checkAuth: checkAuth,
        register: register,
        getUsers: getUsers,
    }
  });
