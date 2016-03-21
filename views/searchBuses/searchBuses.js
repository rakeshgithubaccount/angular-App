 /*Post request*/

 /* $http.defaults.useXDomain = true;
  $http({
       method  : 'GET',
       url     : 'http://10.30.9.24:8080/ReservationSystem/rest/search',
       data    : { fromLocation: $scope.SourceCity, toDestination: $scope.destCity, dateSelected: $scope.dateSelected, numberOfSeats: $scope.noOfPassenger }, 
      withCredentials: true,
       headers: {'Content-Type': 'application/json; charset=utf-8'}
   }).success(function(data) {
             alert(data)
 });*/

 
/*var myapp = angular.module('myApp');*/

 myapp.controller("SearchBuses", function($scope, myService) {
     $scope.bannerVisibility = true;
     $scope.hideBanner = function() {
             $scope.bannerVisibility = false;
         }

     $scope.$on("dateChanged", function(event, args) {
         $scope.dateSelected1 = args.dateSelected1;
     });

     $scope.getdatafromFactory = function() {

         myService.fetchBusList();
         
     }

     $scope.book = function(rowdata) {
         alert(rowdata.name + "-----" + rowdata.source + '*-----' + rowdata.destination + "-----" + rowdata.time + "-----" + rowdata.seatsAvail);
     }
 });


 myapp.controller("ShowAvailableBuses", function($scope, myService) {
     $scope.listOfBuses = myService.getBusList();
 });