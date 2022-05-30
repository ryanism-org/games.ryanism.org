function membercount() {
    fetch("https://staticapi.ryanism.org/members/")
        .then(res => res.json())
        .then(json => {

            var divs = document.getElementsByClassName('membercount');
            [].slice.call(divs).forEach(function(div) {
                div.innerHTML = "<div class='membercounter' style='display: inline'>Members: " + json["members"] + "</div>";
            });

        }).catch(error => {
            console.log(error);
        });
}

membercount();

//Run counterUp when Website Loads
$(document).ready(function() {
    if ($(".membercounter")[0]) {
        counterUp(document.querySelector('.membercounter'), {
            duration: 5000,
            delay: 16,
        })
    }
});