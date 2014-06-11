var input = '';
$(document).keypress(function(event){
  //alert('Key pressed: ' + event.which);
  if (event.which == 13){
    alert(input);
    input = '';
  } else {
    input += String.fromCharCode(event.which);
  }
});