module.exports.government = function(name, cb){
  var names = {
    "method man" : "Clifford Smith",
    "rza" : "Robert Diggs",
    "gza" : "Gary Grice",
    "ghostface killah" : "Dennis Coles",
    "raekwon" : "Corey Woods"
  }

  name = name.toLowerCase();

  if (!(name in names)) {
    cb("name not found");
  }
  else {
    cb(null, names[name]);
  }
};
