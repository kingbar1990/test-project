angular.module('App')
    .directive('fileInput', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                element.bind('change', function () {
                    $parse(attributes.fileInput)
                    .assign(scope, element[0].files)
                    console.log(element[0].files[0])
                    scope.$apply(console.log(scope))
                });
            }
        };
    }]);