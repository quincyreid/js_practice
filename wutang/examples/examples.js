var wutang = require('../lib/wutang');

wutang.government("method man", function(error, name){
  if (error) {
    console.error(error);
  }
  else {
    console.log(name);
  }
});
