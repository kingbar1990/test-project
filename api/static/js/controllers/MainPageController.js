angular.module('App')
    .controller('MainPageController', function($scope, userService){

        if(!$scope.username)
            userService.checkAuth($scope);

        $scope.login = function(user){
            userService.login($scope, user);
            console.log($scope.username);
        }

        $scope.logout = function(){
            userService.logout($scope);
        };
    });