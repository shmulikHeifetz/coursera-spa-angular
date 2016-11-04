(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(
      function (response) {
        // console.log("3");
        // console.log(response.data);
        return response.data;
      }
      // },
      // function (data) {
      //   console.log("1");
      //   var _data = {dd: "ssss"};
      //   console.log("2");
      //   console.log(_data);
      //   return _data;
      // }
    );
  };

}



})();
