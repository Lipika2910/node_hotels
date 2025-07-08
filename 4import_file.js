const imp = require('./3export_file.js')
var _ = require('lodash'); 
console.log('import file is running')

var age = imp.age;
var result = imp.addNumber(age, 18);
console.log(age);
console.log(result);

var data = ["person", "person", 1,2,1,"name"];
var filter = _.uniq(data);
console.log(filter)
console.log(_.isString("person"))

