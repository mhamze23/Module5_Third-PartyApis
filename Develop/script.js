var showTime = document.querySelector("presentDay");

var now = dayjs();

showTime.textContent = now.format( "YYYY-MM-DD")

$(".saveBtn").on("click", function() {

    // get row text field class and row id values
    var value = $(this).siblings(".content").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time,value);
});

// load any saved data from localStorage 

// 9am
$("#hour9-row .content").val(localStorage.getItem("hour9-row"));

// 10am
$("#hour10-row .content").val(localStorage.getItem("hour10-row"));

// 11am
$("#hour11-row .content").val(localStorage.getItem("hour11-row"));

// 12pm
$("#hour12-row .content").val(localStorage.getItem("hour12-row"));

// 1pm
$("#hour1-row .content").val(localStorage.getItem("hour1-row"));

// 2pm
$("#hour2-row .content").val(localStorage.getItem("hour2-row"));

// 3pm
$("#hour3-row .content").val(localStorage.getItem("hour3-row"));

// 4pm
$("#hour4-row .content").val(localStorage.getItem("hour4-row"));

// 5pm
$("#hour5-row .content").val(localStorage.getItem("hour5-row"));


// converting time and display

var hour8am = 8;
var hour9am = 9;
var hour10am = 10;
var hour11am = 11;
var hour12pm = 12;
var hour1pm = 13;
var hour2pm = 14;
var hour3pm = 15;
var hour4pm = 16;
var hour5pm = 17;
var hour6pm = 18;

var presentHour = dayjs().format('H');

// 9am 
if (presentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (presentHour > hour9am) {
    $("#9am-text").addClass("past");
} else if (presentHour = hour9am) {
    $("#9am-text").addClass("present");
}

// 10am 
if (presentHour< hour10am) {
    $("#10am-text").addClass("future");
} else if (presentHour > hour10am) {
    $("#10am-text").addClass("past");
} else if (presentHour = hour10am) {
    $("#10am-text").addClass("present");
}

// 11am
if (presentHour < hour11am) {
    $("#11am-text").addClass("future");
} else if (presentHour > hour11am) {
    $("#11am-text").addClass("past");
} else if (presentHour = hour11am) {
    $("#11am-text").addClass("present");
}

// 12pm
if (presentHour < hour12pm) {
    $("#12pm-text").addClass("future");
} else if (presentHour > hour12pm) {
    $("#12pm-text").addClass("past");
} else if (presentHour = hour12pm) {
    $("#12pm-text").addClass("present");
}

// 1pm
if (presentHour < hour1pm) {
    $("#1pm-text").addClass("future");
} else if (presentHour > hour1pm) {
    $("#1pm-text").addClass("past");
} else if (presentHour = hour1pm) {
    $("#1pm-text").addClass("present");
}

// 2pm
if (presentHour < hour2pm) {
    $("#2pm-text").addClass("future");
} else if (presentHour > hour2pm) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2pm) {
    $("#2pm-text").addClass("present");
}

// 3pm
if (presentHour < hour3pm) {
    $("#3pm-text").addClass("future");
} else if (presentHour > hour3pm) {
    $("#3pm-text").addClass("past");
} else if (presentHour = hour3pm) {
    $("#3pm-text").addClass("present");
}

// 4pm
if (presentHour < hour4pm) {
    $("#4pm-text").addClass("future");
} else if (presentHour > hour4pm) {
    $("#4pm-text").addClass("past");
} else if (presentHour = hour4pm) {
    $("#4pm-text").addClass("present");
}

// 5pm
if (presentHour < hour5pm) {
    $("#5pm-text").addClass("future");
} else if (presentHour > hour5pm) {
    $("#5pm-text").addClass("past");
} else if (presentHour = hour5pm) {
    $("#5pm-text").addClass("present");
}
