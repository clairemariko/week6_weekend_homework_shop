var _ = require('lodash')

var RecordStore = function(name, location, till, inventory){
this.name = name;
this.location = location;
this.till = 100;
this.inventory = [];

};

RecordStore.prototype={

  addstock: function(stock){
    this.inventory.push(stock);
  },

  inventoryValue: function(stock){
    var i, inventoryValue = 0;
    var i;
    for ( i=0; i < this.inventory.length; i++){

    },
    inventoryList: function(){
      var list = [];
      this.inventory.forEach(function(stock){
        list.push(stock);
      });
      return list;
    },
  
  searchStockByName: function(inputName){
   return _.find(this.inventory, {artist: inputName})   
  },

  searchStockByAlbum: function(inputAlbum){
    return _.find(this.inventory, {albumName: inputAlbum})
  },


//could i use this from lodash? var object = { 'a': 1, 'b': '2', 'c': 3 };

// _.omit(inventory, ['a', 'c']);
// → { 'b': '2' }

  removeStock: function(albumName){
    var removeStock = []
    var noResult
    this.inventory.ForEach(function(stock){
      if (stock.albumName === albumName){
      var index = this.inventory.indexOf(stock)
      var tempInventory = this.inventory.splice(index, 1)
      removeStock.push(tempInventory.pop())
    }else{
      noResult = "no album with that title, please try again or seek assistance"
    };
  }.bind(this));

   sellStock: function(albumName){
    var removedStock
        this.inventory.forEach(function(stock){
          if (stock.albumName === albumName{
            this.till += stock.price
            removedStock = this.removeStock(albumName)
          }
        }.bind(this));
        return removedStock
      },

  stockValue: function(){
    var list = this.inventory();
    var prices = [];

      list.forEach(function(stock){
        prices.push(albumName.price);
       });

       return this.sum(prices)
     }

  



};

//lodash this first arg is where i am looking in and the second is what i am searching by
//try and us lodash and practise.





module.exports = RecordStore