
myapp.controller('registerUser', function($scope,myService,$rootScope) {
    
    $scope.showregisterForm = true;
    $scope.registerUserData = function() {
        console.log("1")
        var data1 = {customerId: $scope.custId,accountNumber: $scope.custAcctnumber,accountHolderName: $scope.custName};
        myService.callService(data1,"http://redisrestpoc.cfapps.io/createaccount").success(function(data){
            if(data.statusCode=="00"){
               $scope.showregisterForm = false;
               // $rootScope.visibilityStatus = true;
            }
            else{
                alert(data.statusMessage+", Please enter valid details")
            }
        });
     }
});