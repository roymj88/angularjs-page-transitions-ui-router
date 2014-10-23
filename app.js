(function() {
    var modules = [
        'ui.router', // Router component
        'ngAnimate', // Animation support
    ];

    angular.module('transitionApp', modules);

    function config($stateProvider, $urlRouterProvider) {
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

    }

    function run($rootScope, $state, $log) { 
        $rootScope.back = function(){
            alert("Back Clicked");
        }
    }


    angular.module('transitionApp').config(config);
    angular.module('transitionApp').run(run);

})();