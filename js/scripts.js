$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const appointmentDesc = $("#appointmentDesc").val();
    const appointmentTime = $("#appointmentTime").val();
    const startTime = $("#startTime").val();
    const endTime = $("#endTime").val();
    $(".name").text(name);
    $(".appointmentDesc").text(appointmentDesc);
    $(".appointmentTime").text(appointmentTime);
    $(".startTime").text(startTime);
    $(".endTime").text(endTime);
  });
});