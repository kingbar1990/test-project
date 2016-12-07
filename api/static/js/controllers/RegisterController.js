angular.module('App')
    .controller('RegisterController', function($scope, userService){
        $scope.register = function(user){
            userService.register($scope, user);
        }
    });
