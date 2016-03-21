myapp.controller('rootContainer', function($scope) {
    $scope.visibilityStatus = false;
    
});
myapp.controller('loginUser', function($scope,myService,$rootScope) {
    $scope.showregisterForm = true;
    //var data1 = {userName: "12345",passWord: "password"};
   // var url = "http://redisrestpoc.cfapps.io/authenticateuser";
    $scope.signIn = function() {
        
        var data1 = {userName: $scope.usrName,passWord: $scope.usrPwd};
        console.log(myService.callService(data1,"http://redisrestpoc.cfapps.io/authenticateuser"));
        myService.callService(data1,"http://redisrestpoc.cfapps.io/authenticateuser").then(function(response){
            
            var data = response;
            console.log(response.data+"-@--"+data);
            if(data.statusCode=="00"){
            
            	$scope.resObj = data.statusCode;
            	console.log($scope.resObj+"----####")
                $scope.showregisterForm = false;
                $rootScope.visibilityStatus = true;
            }
            else{
                alert(data.statusMessage+"###")
            }
        },function(err){
            console.log(err);
        });
     }
});





