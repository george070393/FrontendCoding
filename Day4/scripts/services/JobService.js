hrApp.service('jobService', ['$http', 'commonResourcesFactory', function ($http, commonResourcesFactory) {
        return {
            findById: function (id) {
                $http.get(commonResourcesFactory.findOneJobUrl + id)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (data) {
                        return {

                            "jobId":  "HR",
	                        "jobTitle": "HR",
	                        "maxSalary": 10,
	                        "minSalary": 10

                    };
                    })
            }
        }
    }]
);