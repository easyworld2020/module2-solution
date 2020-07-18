(function () {
  'use strict';
  
  var shoppingList= [{name: "beets", quantity: "2"},
                    {name: "tomatoes", quantity: "2"},
                    {name: "carrots", quantity: "3"},
                    {name: "cabbage", quantity: "1"},
                    {name: "potatoes", quantity: "4"},
                    {name: "red bell peppers", quantity: "2"}];



  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);
  
  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {

    var shoppingList = this;

    shoppingList.items = ShoppingListService.getBuyItems();
  
    shoppingList.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }
  
  AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService) {
    var boughtList = this;
  
    boughtList.items = ShoppingListService.getBoughtItems();
  }

  function ShoppingListService() {
    var service = this;
    var buyItems = shoppingList;
    var boughtItems = [];
  
    service.getBuyItems = function () {
      return buyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.removeItem = function (itemIndex) {
      var item =  buyItems[itemIndex];
      
      boughtItems.push(item);
      
      buyItems.splice(itemIndex, 1);
    };
  }
  
  })();


  