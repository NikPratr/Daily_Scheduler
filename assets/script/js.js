var currentDay = document.querySelector("#currentDay");
var mainEl = document.querySelector("main");
var button = document.querySelector(".saveBtn");
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
        <div class="saveBtn col-md-1"></div>
        </div>
    </div>`
}

//appends rows

mainEl.innerHTML = newContainer;

button.addEventListener("click", saveSheet);

//saves planned tasks to local storage

function saveSheet(event) {
    //get parent
    console.log(event.target.parentElement.children(0).textContent);
    //select 1st child
    //convert child's text content to number 0-23 via moment
    //change set the array entry that matches the 0-23 value's text content to match the textarea content
    //upload the changed array to local storage
}