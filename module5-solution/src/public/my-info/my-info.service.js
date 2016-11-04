(function () {
"use strict";

angular.module('public')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = [];
function MyInfoService() {

  var srvc = this;

  srvc.user = {};
  srvc.infoSet = false;

  srvc.setInfo = function (user) {
      srvc.user  = user;
      srvc.infoSet = true;
  }

  srvc.getInfo = function () {
    return srvc.user;
  }

  srvc.isInfoSet = function () {
      return srvc.infoSet;
  }
}

})();
