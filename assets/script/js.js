var currentDay = document.querySelector("#currentDay");
var mainEl = document.querySelector("main");
var currentTime = moment().format("k");
var newContainer = "";

if(localStorage.getItem("storedList") !== null) {
    storedList = JSON.parse(localStorage.getItem("storedList"))
    console.log("true")
} else {
    var storedList = ["","","","","","","","","","","","","","","","","","","","","","","",""];
    localStorage.setItem("storedList", JSON.stringify(storedList))
    console.log("false")
}

//sets jumbotron date to current date

currentDay.textContent = moment().format("dddd, MMMM Do");

//creates and formats all of the rows

for(i=0;i<24;i++) {

    var displayedTime = moment(i, "H").format("hA");
    var saveBtn = document.getElementsByClassName("saveBtn");

    if(i<currentTime) {
        var tense = " past";
    } else if (i==currentTime) {
        var tense = " present";
    } else {
        var tense = " future";
    }

    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = 
    
    `<div class="row">
        <div class="hour col-md-1">${displayedTime}</div>
        <textarea class="col-md-10${tense}">${storedList[i]}</textarea>
        <div class="saveBtn col-md-1"></div>
    </div>`

    container.addEventListener("click", function(event) {
        if(event.target.matches(".saveBtn")) {
            // console.log("buttonPressed", container, container.children)
            storedList[moment(container.children[0].children[0].textContent, "hA").format("H")] = container.children[0].children[1].value

            localStorage.setItem("storedList", JSON.stringify(storedList))
        }
    })
    
    mainEl.appendChild(container);
}