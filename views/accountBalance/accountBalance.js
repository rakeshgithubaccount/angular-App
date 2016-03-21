var r;
myapp.controller('getAcctDetails', function($scope,myService) {
    $scope.showregisterForm = true;
    $scope.getAcctDetailMethod = function() {
        
        var data1 = {customerId: $scope.custId,accountNumber: $scope.acctNumber};
        myService.callService(data1,"http://redisrestpoc.cfapps.io/getaccdetails").success(function(data){

             if(data.statusCode=="00"){
                $scope.showregisterForm = false;
                 $scope.statusMsg = data.statusMessage;
                 
            }
            else{
                alert(data.statusMessage)
            }
        });
     }
    
  
    
});