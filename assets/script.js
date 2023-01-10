// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var timeDisplayEl = $('#time-display');

function dayHour() {
    var currentHour = dayjs(). hour();
    

    $(".time-block").each(function (){
        var rowHour = parseInt ($(this).attr("id").split("-")[1]);
        
        if (rowHour < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
        else if (rowHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow)
}



$(".saveBtn").each(function (){
    var id = $(this).parent().attr("id")
    var savedValue = localStorage.getItem(id)
    var textArea = $(this).parent().find("textarea")
    textArea.val(savedValue)

    $(this).click(() => {
        var textToSave = textArea.val()
        localStorage.setItem(id, textToSave)
    })
})

displayTime();
dayHour();