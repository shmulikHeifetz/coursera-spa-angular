(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.foodItems = "";
    $scope.message = "";
    $scope.checkFood = function () {
      var cleanItems = $scope.foodItems.trim();
      var message = "Please enter data first"

      if(cleanItems != ""){
        var itemsArr = cleanItems.split(',');
        message = itemsArr.length > 3 ? "Too much!" : "Enjoy!";
      }
      $scope.message = message;
    }

  }


}());
