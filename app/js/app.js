var app = angular.module("app", []).run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };
});

app.factory('greeting', function() {
    return {
        content: "Hello, World!"
    };
});

app.controller('MainController', ['$scope', 'greeting', function($scope, greeting) {
    $scope.greeting = greeting.content;
}]);