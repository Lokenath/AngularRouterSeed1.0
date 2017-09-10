'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', "ngMaterial"]);
app.run(function($rootScope){
	$rootScope.currentControl = "";
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/homePage/homePage.html"
    })
    .when("/page1", {
        templateUrl : "pages/page1/page1.html"
//        controller : "componentsController"
    });
});
