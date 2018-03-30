angular.module('apptest').directive("changetoImage", function () {
    return {
        restrict: 'EA',
        link: function(scope, element) {
            var url = 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Code.jpg';
            element.replaceWith('<img src="'+url+'" width="200" height="200">');
        }
    }
});