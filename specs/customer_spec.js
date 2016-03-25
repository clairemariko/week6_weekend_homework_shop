var assert = require('chai').assert;
var Customer = require('../customer.js');


var customer1 = new Customer('alison', 50);


describe('customer', function(){

  it('should have a name', function(){
    assert.equal('alison', customer1.name)
  });

  it('should have a wallet of 50 pounds', function(){
    assert.equal(50, customer1.wallet)
  });
  
});