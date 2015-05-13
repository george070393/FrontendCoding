hrApp.controller('DescriptionController',['$scope',function($scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.myVal="Description Controller";
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };

}])