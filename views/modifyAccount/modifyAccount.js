myapp.controller('modifyUser', function($scope,myService) {
    $scope.showregisterForm = true;
    $scope.modifyUserData = function() {
        var data1 = {customerId: $scope.custId,accountNumber: $scope.acctNumber,accountBalance: $scope.acctBal};
        myService.callService(data1,"http://redisrestpoc.cfapps.io/modifyaccount").success(function(data){

             if(data.statusCode=="00"){
                $scope.showregisterForm = false;
                 
            }
            else{
                alert(data.statusMessage)
            }
        });
     }
});