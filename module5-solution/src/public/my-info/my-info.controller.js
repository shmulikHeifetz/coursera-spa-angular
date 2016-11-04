(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService', 'ApiPath', 'MenuService'];
function MyInfoController(MyInfoService, ApiPath, MenuService) {
  var ctrl = this;
  ctrl.menuItem = {};
  ctrl.isSet = MyInfoService.isInfoSet();

  if(MyInfoService.isInfoSet())
  {
    ctrl.basePath = ApiPath;
    ctrl.user = MyInfoService.getInfo();

    var response = MenuService.getMenuItem(ctrl.user.favoriteDish);

    response.then(function (response) {
        ctrl.menuItem = response;
    });
    ctrl.isSet = true;
  }
}

})();
