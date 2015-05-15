hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'jobService',
    function($scope, $http, $routeParams, $location, jobService) {




        //  get job by id
        $http({url: 'http://demo.teamnet.ro:8282/hrapp/jobss/'+$routeParams.jobid, method: 'GET'}).
            success(function (data) {
                $scope.job = data;
            });

        // back to job List page
        $scope.back = function() {
            $location.url('/joblist');
        }

    }]);