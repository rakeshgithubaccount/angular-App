var spaApp = angular.module('inventoryApp');
spaApp.config(function($routeProvider){
   $routeProvider
       .when('/modifyAccount',{templateUrl:'views/modifyAccount/modifyAccount.html'})
       .when('/accountDetails',{templateUrl:'views/accountBalance/accountBalance.html'})
       .when('/deleteAccount',{templateUrl:'views/deleteAccount/deleteAccount.html'})
       .when('/register',{templateUrl:'views/registerAccount/registerAccount.html'})
       .when('/login',{templateUrl:'views/login/login.html'})
    .otherwise( { redirectTo: '/',templateUrl:'views/login/login.html' } );   
}); 