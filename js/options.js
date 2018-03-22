var windows = chrome.extension.getViews();
for (var extensionWindow of windows) {
    if (extensionWindow.location.pathname === "/_generated_background_page.html") {
  		$(".change_px12").click(function () {
	  		var page = chrome.extension.getBackgroundPage();
			page.change_px12(); 
  		})
  		$(".change_px14").click(function () {
	  		var page = chrome.extension.getBackgroundPage();
			page.change_px14(); 
  		})
  		$(".change_px16").click(function () {
	  		var page = chrome.extension.getBackgroundPage();
			page.change_px16(); 
  		})
  		$(".change_px18").click(function () {
	  		var page = chrome.extension.getBackgroundPage();
			page.change_px18(); 
  		})
    }
}

