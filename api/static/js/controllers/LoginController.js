angular.module('App')
    .controller('LoginController', function($scope, $location, userService){
        $scope.login = function(user){
            userService.login($scope, user);
            $location.path('/');
        }
    });
