hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location','commonResourcesFactory',
    function($scope, $http, $routeParams, $location,commonResourcesFactory) {

        $http.get(commonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeid)
            .success(function(data, status, headers, config) {
                $scope.serverData = data;
                $scope.employee = data;
            })
            .error (function(data, status, headers, config){
            alert("Error: " + status);
        });




        // TODO #HR6 get employee by id



        $scope.back = function() {
            $location.url('/employeeslist/');
            // TODO back to Employee List page

        }

    }]);