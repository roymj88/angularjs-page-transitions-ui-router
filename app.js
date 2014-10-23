var transitionApp = angular.module('transitionApp', ['ui.router', 'ngAnimate']);

transitionApp.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");

    $stateProvider
    	.state('home', {
            url: "/home",
    		templateUrl: "page-home.html",
            controller: "mainController"
    	})
    	.state("about", {
            url: "/about",
            templateUrl: "page-about.html",
            controller: "aboutController"
    	})
    	.state("contact", {
            url: "/contact",
    		templateUrl: "page-contact.html",
            controller: "contactController"
    	});

});

transitionApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

transitionApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

transitionApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});