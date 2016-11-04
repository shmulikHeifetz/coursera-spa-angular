(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MyInfoService', 'MenuService'];
function SignupController(MyInfoService, MenuService) {
  var ctrl = this;

  ctrl.user = {};
  ctrl.user.lastName = "";
  ctrl.user.firstName = "";
  ctrl.user.email = "";
  ctrl.user.phone = "";
  ctrl.user.favoriteDish = "";
  ctrl.favoriteDishMessage = "";
  ctrl.message = "";

  ctrl.submit = function () {
    var response = MenuService.getMenuItem(ctrl.user.favoriteDish);

    response.then(function (response) {
        ctrl.favoriteDishMessage = "";
        MyInfoService.setInfo(ctrl.user);
        ctrl.message = "Your information has been saved!";
    })
    .catch(function (error) {
      ctrl.message = "";
      ctrl.favoriteDishMessage = "No such menu number exists"
    })
  }
}
})();
