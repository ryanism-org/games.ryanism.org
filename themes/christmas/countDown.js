function countDown() {
    var finalDay = new Date(2022, 11, 25, 0, 0, 0, 0).getTime();
    var distance = 0;

    var current = new Date().getTime();
    distance = finalDay - current;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(distance / (day));
    var h = Math.floor((distance % day) / hour);
    var m = Math.floor((distance % day) / minute);
    var s = Math.floor((distance % day) / second);
    s %= 60;
    m %= 60;
    h %= 24;

    s = minTwoDigits(s);
    m = minTwoDigits(m);
    h = minTwoDigits(h);

    var divs = document.getElementsByClassName('membercount');
    [].slice.call(divs).forEach(function(div) {
        if (d >= 1) {
            div.innerHTML = `<div style='display: inline'>Christmas: ${d}:${h}:${m}</div>`;
        } else {
            div.innerHTML = `<div style='display: inline'>Christmas: ${h}:${m}:${s}</div>`;
        }
    });
}

//Converts number into two digits
function minTwoDigits(n) {
    if (n > -1) {
        return (n < 10 ? '0' : '') + n;
    } else {
        return (Math.abs(n) < 10 ? '-0' : '-') + Math.abs(n);
    }
}

countDown();

//Loops Command Every 1 sec
var intervalId = window.setInterval(function() {
    countDown();
}, 1000);
