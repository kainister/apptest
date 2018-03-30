angular.module('apptest').directive("itemHandler", function () {
    return {
        restrict: 'EA',
        link: function(scope, element) {
            console.log(scope.items);
            scope.add = function() {
                console.log(scope.input);
                scope.items.push(scope.input);
                scope.input = '';
            };
            scope.remove = function(index) {
                scope.items.splice(index, 1);
            };
        }
    }
});