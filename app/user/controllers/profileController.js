angular.module('apptest').controller('profileController', ['$scope', 'userEntity', '$location', function($scope, userEntity, $location){
    $scope.submitProfile = function (form) {
        if(true === form.$valid) {
            userEntity.profile($scope.username, $scope.userphone, 'toto@yopmail.com');
            return $location.path('/');
            var PHONE_REGEX = \(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}\;

        }

        return alert('NOT GOOD');
    };
}]);