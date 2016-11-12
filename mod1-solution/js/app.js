(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItemsCSV = "";
  $scope.message = "";

  $scope.checkItems = function() {
    if($scope.lunchItemsCSV === "") {
      $scope.message = "Please enter data first";
    } else {
      var arrayOfLunchItems = $scope.lunchItemsCSV.split(',');
      if(arrayOfLunchItems.length <= 3) {
        $scope.message = "Enjoy!";
      } else if(arrayOfLunchItems.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Please enter data first";
      }
    }
  }

}

})();
