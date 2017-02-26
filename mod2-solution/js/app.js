(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.boughtItem = function(itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {name:"Cookies",quantity:10},
    {name:"Cookies",quantity:10},
    {name:"Cookies",quantity:10},
    {name:"Cookies",quantity:10},
    {name:"Cookies",quantity:10},
  ];

  var boughtItems = [];

  service.boughtItem = function(itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  }

  service.getToBuyItems = function() {
    return toBuyItems;
  }
  service.getBoughtItems = function() {
    return boughtItems;
  }

}

})();
