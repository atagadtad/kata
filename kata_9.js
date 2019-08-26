let talkingCalendar = function(date) {
  let dateArray = date.split('');
  let year = [];
  let month = [];
  let day = [];
  
  for (i = 0; i <= 3; i++) {
    year.push(dateArray[i]);
  }
  month.push(dateArray[5], dateArray[6]);
  day.push(dateArray[8], dateArray[9]);

  year = Number(year.join(''));
  month = Number((month.join('')));
  day = Number((day.join('')));
  
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month = months[month -1];

  

  if (day === 1 || day === 21 || day === 31) {
    actualDay = day + 'st';
  } else if (day === 2 || day === 22 ) {
    actualDay = day + 'nd';
  } else if (day === 3 || day === 23) {
    actualDay = day + 'rd';
  } else {
    actualDay = day + 'th';
  };
  

  return `${month} ${actualDay}, ${year}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
