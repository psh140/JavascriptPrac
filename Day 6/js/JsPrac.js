// var radius = 10;
// var pi = 3.141592 ;

// alert(2 * radius * pi);
// alert("'");

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var days = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var dateStr = year + '-' + month + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds;

alert(dateStr);

if(hours < 12) {
    alert('It\'s A.M.');
} else {
    alert('It\'s P.M.');
}

if(hours == 10) {
    alert('class time...');
} else if(hours == 12 && minutes > 50) {
    alert('lunch time...');
}

// alert(year);