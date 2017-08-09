$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var rantInput = $("input#rant").val().toUpperCase();
    // var res = rantInput.toUpperCase();
    // alert(rantInput);
    // alert(res);

    $(".rantagain").text(rantInput);

    $("#scream").show();

    event.preventDefault();
  });
});
