var assert = require("assert"); // node.js core module
var wutang = require('../lib/wutang.js');

describe('government', function(){
  it('constructor is present', function(){
    assert.equal(typeof wutang.government, 'function');
  })

  it('should work', function(){

    assert.equal(wutang.government('gza', function(error, name){
      if (error) {
        console.log(error);
      }
      else {
        console.log(name);
      }
    }), 'Gary Grice');
  })
})
