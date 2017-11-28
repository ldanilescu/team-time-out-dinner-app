
(function() {
    'use strict';

    angular
        .module('myTimeoutApp')
        .controller('GoOutCtrl', GoOutCtrl);

        GoOutCtrl.$inject = ['$http'];

        function GoOutCtrl($http) {
            var vm = this;

            /* ======================= View model variables ================= */
            vm.users = [];
            vm.selected = [];
            vm.venues = [];
            vm.placesToGo = [];
            vm.placesToAvoid = [];
            vm.displayResults = false;

            /* ======================= View model functions =================== */
            vm.toggle = _toggle;
            vm.exists = _exists;
            vm.isIndeterminate = _isIndeterminate;
            vm.isChecked = _isChecked;
            vm.toggleAll = _toggleAll;
            vm.calculatePlacesToAvoid = _calculatePlacesToAvoid;

            /* ======================= Function definitions =================== */
            /**
             *
             * @private
             */
            function _getUsers() {
                $http.get('data/users.json').
                then(function onSuccess(response) {
                    vm.users = response.data;
                    console.log("Users : ");
                    console.log(vm.users);
                });
            }

            /**
             *
             * @private
             */
            function _getVenues() {
                $http.get('data/venues.json').
                then(function onSuccess(response) {
                    vm.venues = response.data;
                    console.log("Venues :");
                    console.log(vm.venues);
                });
            }

            /**
             *
             * @private
             */
            function _calculatePlacesToAvoid() {
                vm.venues.forEach(function(venue) {
                    var drinks = venue.drinks.map(function(value){ return value.toLowerCase() });
                    console.log(drinks);

                    var food  = venue.food.map(function(value){ return value.toLowerCase() });

                    venue.toGo = true;
                    venue.why_avoid = [];

                    vm.selected.forEach(function(member) {
                        var wont_eat = member.wont_eat.map(function(value){ return value.toLowerCase() });
                        var will_drink = member.drinks.map(function(value){ return value.toLowerCase() });

                        var nothing_to_eat = _.difference(food, wont_eat).length==0;
                        var nothing_to_drink = _.intersection(drinks, will_drink).length==0;

                        if(nothing_to_eat){
                            venue.toGo = false;
                            venue.why_avoid.push(member.name + " doesn't eat " + food);
                        }

                        if(nothing_to_drink){
                            venue.toGo = false;
                            venue.why_avoid.push(member.name + " doesn't drink " + _.difference(drinks, will_drink));
                        }
                    });
                });
                vm.displayResults = true;
            }

            /**
             *
             * @param item
             * @param list
             * @private
             */
            function _toggle(item, list) {
                var idx = list.indexOf(item);
                if (idx > -1) {
                    list.splice(idx, 1);
                }
                else {
                    list.push(item);
                }
            }

            /**
             *
             * @param item
             * @param list
             * @returns {boolean}
             * @private
             */
            function _exists(item, list) {
                return list.indexOf(item) > -1;
            }

            /**
             *
             * @returns {boolean}
             * @private
             */
            function _isIndeterminate() {
                return (vm.selected.length !== 0 &&
                vm.selected.length !== vm.users.length);
            }

            /**
             *
             * @returns {boolean}
             * @private
             */
            function _isChecked() {
                return vm.selected.length === vm.users.length;
            }

            /**
             *
             * @private
             */
            function _toggleAll() {
                if (vm.selected.length === vm.users.length) {
                    vm.selected = [];
                } else if (vm.selected.length === 0 || vm.selected.length > 0) {
                    vm.selected = vm.users.slice(0);
                }
            }

            /* ======================= First run operations ========================*/
            _getUsers();
            _getVenues();
        }
})();