'use strict';
const holidays = require('./holidays');

function getHoliday (dt) {
	if(!dt) {
		dt = new Date();
	}

	if(dt instanceof Date) {
		const day = dt.getDate().toString(), 
			month = (dt.getMonth() + 1).toString();

		dt = "0".repeat(2-month.length) + month + "0".repeat(2-day.length) + day;
	}

	return holidays[dt];
}

module.exports = getHoliday;
module.exports.default = getHoliday;
