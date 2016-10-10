(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http']
  function MenuDataService($http, $q, $timeout) {
    var service = this;


    service.getAllCategories = function () {
      return $http({url: 'https://davids-restaurant.herokuapp.com/categories.json'})
        .then(function (result) {
          return result.data;
        });
    };

    service.getItemsForCategory = function (categoryShortName) {
      console.log( ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName));
      return $http({url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)})
        .then(function (result) {
          console.log(result.data);
          return result.data;
        })
    };
  }
})();
