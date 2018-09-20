# fun-holidays
Simple node js module that will give a fun holiday for a specified date

Example:

```javascript
const holidays = require('fun-holidays');
const todaysHoliday = holidays();
const tomorrowsHoliday = holidays(new Date() + 1);

if(todaysHoliday) {
  console.log(`Today is ${todaysHoliday.name}!`);
}

if(tomorrowsHoliday) {
  console.log(`Tomorrow is ${tomorrowsHoliday.name}!`);
}
```
