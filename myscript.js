var input = '';
$(document).keydown(function(e){ 
  if (e.which == 13){
    alert(input);
    input = '';
  } else if (e.which === 9){
    input += '|';
  } else {
    input += String.fromCharCode(e.which);
  }
});