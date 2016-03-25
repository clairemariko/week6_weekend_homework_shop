var assert = require('chai').assert;
var Stock = require('../stock.js');

var stock1 = new Stock('Skin And Bones', 'FooFighters', 10)

describe('stock', function(){

  it('should have a album name', function(){
    assert.equal('Skin And Bones', stock1.albumName)
  });

  it('should have an artist', function(){
    assert.equal('FooFighters', stock1.artist)
  });

  it('should have a price', function(){
    assert.equal(10, stock1.price)
  });
  
});