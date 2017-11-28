
(function() {
    'use strict';

    angular
        .module('myTimeoutApp')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/goOut.html',
                controller: 'GoOutCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo:'/'});

    }
})();