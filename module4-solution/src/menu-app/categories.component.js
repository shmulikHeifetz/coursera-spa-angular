(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/menu-app/templates/categories.component.template.html',
  bindings: {
    categories: '<'
  }
});

})();
