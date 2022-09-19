var currentDay = document.querySelector("#currentDay");
var mainEl = document.querySelector("main");
var currentTime = moment("hA");
var newContainer = "";

currentDay.textContent = moment().format("dddd, MMMM Do")

for(i=0;i<24;i++) {

    var displayedTime = moment(i, "k").format("hA");

    newContainer += 

    `<div class="container">
        <div class="row">
        <div class="hour col-md-1">${displayedTime}</div>
        <textarea class="col-md-10" data-number="${i}"></textarea>
        <div class="saveBtn col-md-1"></div>
        </div>
    </div>`

    mainEl.innerHTML = newContainer;
}