hrApp.controller('MainController',['$scope','$rootScope','$timeout', function($scope,$rootScope,$timeout){
    console.log("Hello World");
    $scope.name="Valoarea din scope";
    $scope.othername="A doua valoare din scope";

    $timeout(function(){
        console.log($scope.name);
        console.log($rootScope);
    },10000);
}]);