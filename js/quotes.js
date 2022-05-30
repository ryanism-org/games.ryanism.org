let number;
//Make Link like dark mdoe
//var rightArrow = " <a href='#' onclick='increaseQuote()'><i class='bx bx-sm bxs-right-arrow'></i></a>";
//var leftArrow = "<a href='#' onclick='decreaseQuote()'><i class='bx bx-sm bxs-left-arrow'></i></a> ";
var rightArrow = '';
var leftArrow = '';

function quotes() {
    fetch("https://staticapi.ryanism.org/quotes/")
        .then(res => res.json())
        .then(json => {

            number = Math.floor(Math.random() * json.length);
            var output = json[number];
            var quoteID = document.getElementById("quote");
            quoteID.innerHTML = leftArrow + output + rightArrow;

        }).catch(error => {
            console.log(error);
        });
}

function increaseQuote() {
    fetch("https://staticapi.ryanism.org/quotes/")
        .then(res => res.json())
        .then(json => {

            if (number < json.length - 1) {
                number++;
            } else {
                number = 0;
            }

            var output = json[number];
            var quoteID = document.getElementById("quote");
            quoteID.innerHTML = leftArrow + output + rightArrow;
        }).catch(error => {
            console.log(error);
        });
}

function decreaseQuote() {
    fetch("https://staticapi.ryanism.org/quotes/")
        .then(res => res.json())
        .then(json => {

            if (number == 0) {
                number = json.length;
            }
            if (number > 0) {
                number--;
            } else {
                number = 0;
            }

            var output = json[number];
            var quoteID = document.getElementById("quote");
            quoteID.innerHTML = leftArrow + output + rightArrow;
        }).catch(error => {
            console.log(error);
        });
}

quotes();

//Loops Command Every 5 sec
/*
var intervalId = window.setInterval(function() {
    quotes();
}, 2000);
*/