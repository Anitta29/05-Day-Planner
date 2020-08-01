$(document).ready(function() {

$(".saveBtn").on("click", function() {

    // Grab users input 
var value = $(this).siblings(".reservation").val();
 //grab the corresponding time
var time = $(this).parent().attr("id")



localStorage.setItem(time, value);
});




// Grab hr and reservation value from local storage and put to page
$("#hr9 .reservation").val(localStorage.getItem("hr9"))
$("#hr10 .reservation").val(localStorage.getItem("hr10"))
$("#hr11 .reservation").val(localStorage.getItem("hr11"))
$("#hr12 .reservation").val(localStorage.getItem("hr12"))
$("#hr1 .reservation").val(localStorage.getItem("hr1"))
$("#hr2 .reservation").val(localStorage.getItem("hr2"))
$("#hr3 .reservation").val(localStorage.getItem("hr3"))
$("#hr4 .reservation").val(localStorage.getItem("hr4"))
$("#hr5 .reservation").val(localStorage.getItem("hr5"))


$("#currentDay").text(moment().format("dddd, MMMM Do"));



})