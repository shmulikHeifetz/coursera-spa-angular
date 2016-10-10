(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  this.items = items.menu_items;
  this.cat = items.category;
}
})();
