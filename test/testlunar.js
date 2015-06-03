// 测试用例

var expect = require('chai').expect;
	LunarCalendar = require('lunar-calendar');
	lunar_birthday = require('../lib/lunarbirthday').lunar_birthday;

describe('lunar-calendar', function(){
	var solarDate = new Date(2014, 1, 1); //公历2014年2月1日
	var lunarDate = {
		"zodiac": "蛇", //生肖属相
		"GanZhiYear": "癸巳", //干支纪年
		"GanZhiMonth": "乙丑", //干支纪月
		"GanZhiDay": "癸卯", //干支纪日
		"worktime": 2, //0无特殊安排，1工作，2放假
		"lunarYear": 2014, //农历年
		"lunarMonth": 1, //农历月（1-13，有闰月情况，比如当前闰9月，10表示闰9月，11表示10月）
		"lunarDay": 2, //农历日
		"lunarMonthName": "正月", //农历月中文名
		"lunarDayName": "初二", //农历日中文名
		"lunarLeapMonth": 9, //农历闰月所在月份，0表示无闰月
		"solarFestival": undefined, //公历节假日，undefined或‘劳动节’之类
		"lunarFestival": undefined, //农历节假日，undefined或‘除夕’之类
		"term": undefined //二十四节气名，undefined或‘立春’之类
	};
	var lunarDate1 = {
		"day":27,
		"month":5,
		"year":2015,
	};
	it('.solarToLunar(year,month,day)，公历转农历', function(){
		var lunar = LunarCalendar.solarToLunar(solarDate.getFullYear(),solarDate.getMonth()+1,solarDate.getDate());
		expect(lunar).to.eql(lunarDate);
	});
	it('.solarToLunar(year,month,day)，农历转公历', function(){
		var lunar = LunarCalendar.lunarToSolar(2015,4,10);
		expect(lunar).to.deep.equal(lunarDate1);
	});
	it('.solarToLunar(year,month,day)，农历转公历', function(){
		for (var i=2015;i<2050;i++){
			var lunar = LunarCalendar.lunarToSolar(i,4,10);
			// console.log(lunar)
		}
		
	});

	it('day1', function(){				
		var d= new Date("1951-1-10")
		// console.log(d)		
		expect(d.getMonth()).to.equal(0)
		expect(d.getDate()).to.equal(10)		
		expect(d.getDay()).to.equal(3)// 周三
	});
	it('list', function(){
		var list = {
			"f":"1953-8-22",
			"m":"1951-4-10",
			"s":"1975-11-27",
			"b":"1978-2-12"
		}
		var list1 = {
			"f":"2015-10-1",
			"m":"2015-5-27",
			"s":"2016-1-6",
			"b":"2015-3-31"
		}
		expect(Object.keys(list)).to.deep.equal(["f","m","s","b"])
		var year = 2015 
		Object.keys(list).forEach(function(key) {
		  var val = list[key];		  
		  expect(list1[key],lunar_birthday(year,val))
		});				
	});	
});