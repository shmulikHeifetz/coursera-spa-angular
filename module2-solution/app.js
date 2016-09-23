(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingCtrl)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingCtrl)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffSrvc);

  ToBuyShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingCtrl(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.getToBuyItems();

    vm.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingCtrl(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffSrvc() {
    var srvc = this;

    var toBuyItems = [
      { name: "cookie",  quantity: 10 },
      { name: "drink",   quantity: 4 },
      { name: "ice",     quantity: 3 },
      { name: "car",     quantity: 9 },
      { name: "house",   quantity: 1 }
    ];
    var boughtItems = [];

    srvc.getToBuyItems = function () {
      return toBuyItems;
    };

    srvc.getBoughtItems = function () {
      return boughtItems;
    };

    srvc.buyItem = function (itemIndex) {
      boughtItems.push(toBuyItems.splice(itemIndex, 1)[0]);
    }
  }
}());
