var _ = require('lodash')

var collector = function(name){
this.name = name;
this.collectorInventory = [];
this.wallet = 200;
};



collector.prototype = {
  addStock: function(stock){
    this.collectorInventory.push(stock);
  },
  
  search: function(artist, recordStore){
    var result = recordStore.searchByArtist(artis);
    return result;
        
  },

  priceOfStock: function(artist, recordStore){
    var result = this.search(artist, recordStore);
    stock = result.pop();
    return stock.price;
  },

  buyStock: function(artist, recordStore){
    var price = this.priceOfStock(artist, recordStore);
    this.wallet -=  price;
    var result = recordStore.sellStock(artist);
    this.addStock(result.pop());
  }
  


}

//not used lodash here... try to refactor when have a chance!


module.exports = collector