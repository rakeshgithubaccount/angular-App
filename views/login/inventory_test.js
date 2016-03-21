window.assert = chai.assert;
describe('inventoryService', function() {
    // define variables for the services we want to access in tests

    beforeEach(function() {
    	module('inventoryApp');
    
    });

    describe('check login is succesfull', function() {
    	var UserMock;
    	var deferred;
    	var scope;
    	var myService;
      
    	var data1 = {userName: "12345",passWord: "password"};
    	beforeEach('should return true for successfull login"', inject(function($q,$httpBackend,$controller,$rootScope) {

           
            scope = $rootScope.$new();
          /* $httpBackend
                .when('GET', 'http://redisrestpoc.cfapps.io/authenticateuser')
                .respond(200, response);
            
           */
           
            deferred = $q.defer();
            UserMock = {
                callService: function() {
                    return deferred.promise;
                }
            };
            var myController = $controller('loginUser', {
    			$scope: scope,
    			myService:UserMock,
    			$rootScope:$rootScope
    		});
        }));
    	
    	it("test for success",inject(function(){
    		
    		var response = [{statusCode: "00", statusMessage: "Valid User"}];
    		deferred.resolve(response);
            scope.signIn();
            scope.$digest();
    		/*myService.callService(data1, "http://redisrestpoc.cfapps.io/authenticateuser").then(function(result){
  			  result.should.equal("success");  //THIS SECTION IS NOT CALLED
  			})
*/
    	    //$rootScope.$apply();
    		
    	}));
    	
    	/*it("test for fail",inject(function(){
    		
    		deferred.resolve('not success');

    		myService.signIn(data1, "http://redisrestpoc.cfapps.io/authenticateuser").then(function(result){
  			  result.should.equal("fail");  //THIS SECTION IS NOT CALLED
  			})

    	    //$rootScope.$apply();
    		
    	}));*/
    	

       
    });
});