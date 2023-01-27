var hour9 = $("#9AM");
var hour10 = $("#10AM");
var hour11 = $("#11AM");
var hour12 = $("#12PM");
var hour1 = $("#1PM");
var hour2 = $("#2PM");
var hour3 = $("#3PM");
var hour4 = $("#4PM");
var hour5 = $("#5PM");
var time = dayjs();

function setPlanner() {

    $("#currentDay").text(dayjs().format("YYYY-MM-DD"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var content = localStorage.getItem(id);

        if (content !== null) {
            $(this).children(".content").val(content);
        }
    });
}

setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".content").val();

    localStorage.setItem(time, schedule);
});

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();