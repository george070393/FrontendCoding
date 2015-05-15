hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {


        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";


        //TODO#HR1


        $http({url: commonResourcesFactory.findAllJobsUrl , method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.jobs = data;
            });




        $scope.reset = function () {
            this.job = {};
        };



        $scope.create = function (addjob) {
            $http({url: commonResourcesFactory.addJobUrl, method: 'POST',data:addjob}).
                success(function (data) {
                    $scope.job = data;
                    $location.url('/jobview/'+$scope.job.jobId);
                });
        }


    }]);