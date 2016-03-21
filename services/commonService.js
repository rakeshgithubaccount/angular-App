myapp.service('myService', function($http) {
     this.callService = function(data,url) {
         //alert(data.userName+"----"+url+"------"+data.passWord)
         var data1 = data;
            var promise = $http({
                method : 'GET',
                params:data1,
                url : url
            })
            
            return promise; 
        };

    });

