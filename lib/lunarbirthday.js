
 var LunarCalendar = require('lunar-calendar');
// year 那一年
// val 生日字符串（农历）
// case ，lunar_birday(2015,"1978-2-12") 就是给出农历生日为1978-2-12，请问2015年那天过生日？
function lunar_birthday(year,val){
	var d = new Date(val)		   
	return LunarCalendar.lunarToSolar(year,d.getMonth()+1,d.getDate());	
}
exports.lunar_birthday = lunar_birthday;