myapp.controller('deleteAcctController', function($scope,myService) {
    $scope.showregisterForm = true;
    $scope.deleteAccount = function() {
        
        var data1 = {customerId: $scope.custId,accountNumber: $scope.acctNumber};
        myService.callService(data1,"http://redisrestpoc.cfapps.io/deleteaccount").success(function(data){

             if(data.statusCode=="00"){
                $scope.showregisterForm = false;
                 
            }
            else{
                alert(data.statusMessage)
            }
        });
     }
});