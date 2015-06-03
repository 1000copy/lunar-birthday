// 测试用例

var lunar_birthday = require('../lib/lunarbirthday').lunar_birthday;
var title = "home birthday"
var list = {
	"f":"1953-8-22",
	"m":"1951-4-10",
	"s":"1975-11-27",
	"b":"1978-2-12"
}
var args = process.argv
var year
if (args.length == 3 )
	year = args[2]
else {
	var y = new Date ;
	year = y.getFullYear() 
}
console.log(title ,year )
console.log("================")
Object.keys(list).forEach(function(key) {
  var val = list[key];		  
  console.log(key,lunar_birthday(year,val))
});				
