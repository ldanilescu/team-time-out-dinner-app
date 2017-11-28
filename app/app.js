
(function() {
    'use strict';

    angular
        .module('myTimeoutApp', [
            'ngRoute',
            'ngMaterial'
        ])
        .config(config);

    function config($locationProvider) {
        $locationProvider.hashPrefix('');
    }

})();
