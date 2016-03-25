var _ = require('lodash')

var RecordStore = function(name, location, till, inventory){
this.name = name;
this.location = location;
this.till = 0;
this.inventory = [];

};

RecordStore.prototype={

  addstock: function(stock){
    this.inventory.push(stock);
  },

  updatetill: function(){
    // var i, till = 0;
    var i;
    for ( i=0; i<this.inventory.length; i++){
      this.till += this.inventory[i]["price"];
    }
    return this.till
  },

  

  
  searchStockByName: function(inputName){
   return _.find(this.inventory, {artist: inputName})   
  },

  searchStockByAlbum: function(inputAlbum){
    return _.find(this.inventory, {albumName: inputAlbum})
  }

};

//lodash this first arg is where i am looking in and the second is what i am searching by






module.exports = RecordStore