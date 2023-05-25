function checkLeapYear() {
    var year = parseInt(document.getElementById("year").value);
  
    var isLeapYear = false;
  
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          isLeapYear = true;
        }
      } else {
        isLeapYear = true;
      }
    }
  
    if (isLeapYear) {
      document.getElementById("result").innerHTML = year + " is a leap year.";
    } else {
      document.getElementById("result").innerHTML = year + " is not a leap year.";
    }
  }
  