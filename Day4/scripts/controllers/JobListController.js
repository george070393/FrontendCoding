hrApp.controller('JobListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {

        $scope.jobs = [];



        // Load jobs list from server
        $http({url: commonResourcesFactory.findAllJobsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.jobs = data;
            });


        //  add viewJobs function using $location
        $scope.viewJob = function (jobId) {
            $location.url('/jobview/' + jobId);
        };

        $scope.editJob = function (jobId) {
            $location.url('/jobedit/'+jobId);
        };


    }]);