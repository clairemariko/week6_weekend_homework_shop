var assert = require('chai').assert;
var Collector = require('../collector.js');
var RecordStore = reqire('../record_store.js');
var Stock = require('../stock.js')


var collector1 = new Collector('Alison', 50);

var recordStore1 = new RecordStore('Toe Tappers', 'Edinburgh')

var stock1 = new Stock('Skin And Bones', 'FooFighter', 10);
var stock2 = new Stock('Devils And Dust', 'Bruce Springsteen', 12);
var stock3 = new Stock('Think Tank', 'Blur', 11);
var stock4 = new Stock('Like Clockwork', 'Queen Of The Stone Age', 10);


describe('collector', function(){

  it('should have a name', function(){
    assert.equal('Alison', collector1.name)
  });

  it('should have a wallet of 50 pounds', function(){
    assert.equal(50, collector1.wallet)
  });

  it('should have an empty collector inventory', function(){
    assert.equal(0, collector1.collectorInventory.length);
  });

  it('should be able to look for ana artist', function(){
    var stock1 = addStock('Skin And Bones', 'FooFighter', 10);
    var stock2 = addStock('Devils And Dust', 'Bruce Springsteen', 12);
    var stock3 = addStock('Think Tank', 'Blur', 11);
    var stock4 = addStock('Like Clockwork', 'Queen Of The Stone Age', 10);

    assert.deepEqual([stock4], collector1.search("Like Clockwork", recordStore1))
  });

  it('wallet should update when buying stock', function(){
    collector1.buyStock("Think Tank", recordStore1)
    assert.equal(39, collector1.wallet)
  })

});











  










