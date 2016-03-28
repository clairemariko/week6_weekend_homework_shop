var assert = require('chai').assert;
var RecordStore = require('../record_store.js');
var Stock = require('../stock.js');

var recordstore1 = new RecordStore('Music Store', 'Edinburgh');


var stock1 = new Stock('Skin And Bones', 'FooFighter', 10);
var stock2 = new Stock('Devils And Dust', 'Bruce Springsteen', 12);
var stock3 = new Stock('Think Tank', 'Blur', 11);
var stock4 = new Stock('Like Clockwork', 'Queen Of The Stone Age', 10);
var stock5 = new Stock('Holy Fire', 'Foals', 12);
var stock6 = new Stock('The Suburbs', 'Arcade File', 12);

describe('Music Store', function(){

  it('should have a name', function(){
    assert.equal('Music Store', recordstore1.name)
  });

  it('should have a location', function(){
    assert.equal('Edinburgh', recordstore1.location)
  });

  it('should have a float of 100', function(){
    assert.deepEqual(100, recordstore1.till)
  });

  it('should have an empty inventory', function(){
    assert.deepEqual([], recordstore1.inventory)
  });

  it('should add a stock to its inventory', function(){
    recordstore1.addstock(stock1)
    assert.deepEqual([stock1], recordstore1.inventory)
  });

  it('the inventory should now have 2 items of stock', function(){
    recordstore1.addstock(stock2)
    assert.deepEqual([stock1, stock2], recordstore1.inventory)
  });

  it("should be able to hold multiple records", function(){
    var stock3 = new Stock('Think Tank', 'Blur', 11);
    var stock4 = new Stock('Like Clockwork', 'Queen Of The Stone Age', 10);
    var stock5 = new Stock('Holy Fire', 'Foals', 12);
    var stock6 = new Stock('The Suburbs', 'Arcade File', 12);
    assert.deepEqual([stock1, stock2, stock3, stock4, stock5, stock6], recordStore1.inventory);
      });

  it('should have an inventory value of 67', function(){
    recordstore1.inventoryValue()
    assert.equal(67, recordstore1.inventory)
  })

it('should be able to give a list of items in the inventory', functin(){
 
  assert.deepEqual([stock1, stock2, stock3, stock4, stock5, stock6], recordstore1.inventory())
});




  // it('should update the till when stock has been added', function(){
  //   recordstore1.updatetill()
  //   assert.equal(22, recordstore1.till)
  // });

  // it('should search and bring back stock', function(){
  //   assert.deepEqual([stock1,stock2], recordstore1.searchInventorys())
  // });

  it('should search by artist', function(){
      recordstore1.addstock(stock2)
      assert.equal(stock1, recordstore1.searchStockByName('FooFighter'))
  });

  it('should search by album', function(){
    recordstore1.addstock(stock1)
    assert.equal(stock2, recordstore1.searchStockByAlbum('Devils And Dust'))
  });


  // it('should sell an album and till should increase', function(){
  //   recordstore1.sellstock(stock1)
  //   assert.equal()
  // }),

  
  
  it("should be able to sell aan album which then updates the till", function(){
    recordStore1.sellStock("Devils And Dust")
    assert.equal(112, recordStore1.till);
  }),

  it("should be able to sell an album and inventory updated", function(){
     recordStore1.sellStock("Think Tank");
     assert.deepEqual([stock1], recordStore1.inventory);
   });



  });


