app.controller('mainController', function($scope, $rootScope, $timeout, $mdSidenav, $log, $mdDialog) {
	$scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
});