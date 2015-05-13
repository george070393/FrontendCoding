hrApp.controller('RequestController', ['$scope','$http', function($scope,$http){


        $http.get("http://demo.teamnet.ro:8282/hrapp/jobs")
            .success(function(data, status, headers, config) {
                $scope.serverData = data;
                $scope.jobList = data;
            })
            .error (function(data, status, headers, config){
            alert("Error: " + status);
        });



//    TODO #10 - make AJAX call



}]);
