/** @copyright Pley (c) 2015, All Rights Reserved */
'use strict';

hwApp.config(
function ($routeProvider, $locationProvider, $httpProvider) {


    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',
            {templateUrl: 'partials/landing.html',
            controller: 'LandingController'})

        .otherwise('/');



});
