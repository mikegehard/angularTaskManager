angular.module("app", []).run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };
});

angular.module("app").controller('MainController', ['$scope', function($scope) {
    $scope.greeting = 'Hello!';
}]);