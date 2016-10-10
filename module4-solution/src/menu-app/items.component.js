(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/menu-app/templates/items.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
