var currentDay = document.querySelector("#currentDay");
var mainEl = document.querySelector("main");
var currentTime = moment().format("k");
var newContainer = "";

//sets jumbotron date to current date

currentDay.textContent = moment().format("dddd, MMMM Do");

//creates and formats all of the rows

for(i=0;i<24;i++) {

    var displayedTime = moment(i, "k").format("hA");

    if(i<currentTime) {
        var tense = " past";
    } else if (i==currentTime) {
        var tense = " present";
    } else {
        var tense = " future";
    }

    newContainer += 

    `<div class="container">
        <div class="row">
        <div class="hour col-md-1">${displayedTime}</div>
        <textarea class="col-md-10${tense}"></textarea>
        <div class="saveBtn col-md-1" id="${i}"></div>
        </div>
    </div>`

    
    mainEl.innerHTML = newContainer;

    document.getElementById(i).addEventListener("click", saveContent);

}

function saveContent() {
    console.log("hi");
}