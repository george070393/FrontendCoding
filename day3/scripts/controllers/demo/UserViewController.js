hrApp.controller('UserViewController', ['$scope', '$location','UserAddService',
    function ($scope, $location,UserAddService) {

        $scope.back = function() {
            $location.url('');
        }

        $scope.reset= function() {
            $scope.firstName='';
            $scope.lastName='';
            $scope.cnp=null;
            $scope.age=null;
        }
        $scope.save=function(){
            UserAddService.firstName=$scope.firstName;
            UserAddService.lastName=$scope.firstName;
            UserAddService.cnp=$scope.cnp;
            UserAddService.age=$scope.age;
            console.log( UserAddService.firstName + " "+UserAddService.cnp);

        }
        $scope.show_hide=UserAddService;
        $scope.show_hideShow = false;
        $scope.toogleshow_hide=function(){
            $scope.descriptionShow = !$scope.descriptionShow;
        }

    }]);