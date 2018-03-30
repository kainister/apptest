angular.module('apptest').controller('homeController', ['$scope', function($scope){
    $scope.user = 'Kevin';
    $scope.message = 'Hi';
    $scope.items = [];
}]);