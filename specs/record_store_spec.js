var assert = require('chai').assert;
var RecordStore = require('../record_store.js');
var Stock = require('../stock.js');

var recordstore1 = new RecordStore('Music Store', 'Edinburgh');

var stock1 = new Stock('Skin And Bones', 'FooFighter', 10);
var stock2 = new Stock('Devils And Dust', 'Bruce Springsteen', 12);
var stock3 = new Stock('Think Tank', 'Blur', 11);

describe('Music Store', function(){

  it('should have a name', function(){
    assert.equal('Music Store', recordstore1.name)
  });

  it('should have a location', function(){
    assert.equal('Edinburgh', recordstore1.location)
  });

  it('should have an empty till', function(){
    assert.deepEqual(0, recordstore1.till)
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

  it('should update the till when stock has been added', function(){
    recordstore1.updatetill()
    assert.equal(22, recordstore1.till)
  });

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



  });


