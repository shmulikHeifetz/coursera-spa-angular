(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var vm = this;
    vm.error = "";
    vm.searchTerm = "";
    vm.found = [];
    vm.narrowDownTo = function () {
      var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);

      promise.then(function (response) {
        vm.found = response;
        vm.error = (vm.found.length == 0 ? "Nothing found" : "");
      })

    }
    vm.removeItem = function (index) {
      vm.found.splice(index, 1);
      vm.error = (vm.found.length == 0 ? "Nothing found" : "");
    }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var srvc = this;

    srvc.getMatchedMenuItems = function (searchTerm) {

      return $http({url: 'https://davids-restaurant.herokuapp.com/menu_items.json'})
        .then(function (result) {
          var foundItems = [];
          if(searchTerm !== ""){
            searchTerm = searchTerm.toLowerCase();
            var allItems = result.data.menu_items;
            for (var i = 0; i < allItems.length; i++) {
              if (allItems[i].description.indexOf(searchTerm) !== -1) {
                foundItems.push(allItems[i]);
              }
            }
          }
          return foundItems;
        });
    }
  }

  function FoundItems() {
    var ddo = {
      templateUrl : 'narrowDownList.html',
      scope : {
        items: '<',
        onRemove : '&',
        error : '<'
      }
    }
    return ddo;
  }
}());
