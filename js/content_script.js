chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    var tag_name = document.getElementById("js_content").childNodes;
    if(request.cmd == 'change_format'){
		for (var k = 0; k < tag_name.length; k++) {
			if (tag_name[k].nodeName == "P") {
				tag_name[k].setAttribute('style', 'text-align:center !important');
				if (tag_name[k].firstElementChild) {
					if (tag_name[k].firstElementChild.nodeName == "SPAN") {
						tag_name[k].firstElementChild.setAttribute('style', 'color:black !important');
					}else if(tag_name[k].firstElementChild.nodeName == "IMG"){
						tag_name[k].innerHTML+="<p style='text-align:center'>▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲</p>";
					}
				}
			}
		}
		sendResponse('Change format over !');
    }
    if(request.cmd == 'copy_article'){
    	var temp = document.getElementById("js_content").innerHTML;
		document.addEventListener('copy',myFunction);
		function myFunction(e) {
			e.preventDefault(); 
		    e.clipboardData.setData('text/html', temp);
		}
		document.execCommand("copy");
		alert("已复制好，可贴粘。");
    	sendResponse('Copy article over !');
    }
    if(request.cmd == 'change_px12'){
		for (var i = 0; i < tag_name.length; i++) {
			if (tag_name[i].nodeName == "P") {
				if (tag_name[i].firstElementChild) {
					if (tag_name[i].firstElementChild.nodeName == "SPAN") {
						tag_name[i].firstElementChild.setAttribute('style', 'font-size:12px');
					}
				}
			}
		}
    	sendResponse('change px to 12 over !');
    }
    if(request.cmd == 'change_px14'){
		for (var i = 0; i < tag_name.length; i++) {
			if (tag_name[i].nodeName == "P") {
				if (tag_name[i].firstElementChild) {
					if (tag_name[i].firstElementChild.nodeName == "SPAN") {
						tag_name[i].firstElementChild.setAttribute('style', 'font-size:14px');
					}
				}
			}
		}
    	sendResponse('change px to 14 over !');
    }
    if(request.cmd == 'change_px16'){
		for (var i = 0; i < tag_name.length; i++) {
			if (tag_name[i].nodeName == "P") {
				if (tag_name[i].firstElementChild) {
					if (tag_name[i].firstElementChild.nodeName == "SPAN") {
						tag_name[i].firstElementChild.setAttribute('style', 'font-size:16px');
					}
				}
			}
		}
    	sendResponse('change px to 16 over !');
    }
    if(request.cmd == 'change_px18'){
		for (var i = 0; i < tag_name.length; i++) {
			if (tag_name[i].nodeName == "P") {
				if (tag_name[i].firstElementChild) {
					if (tag_name[i].firstElementChild.nodeName == "SPAN") {
						tag_name[i].firstElementChild.setAttribute('style', 'font-size:18px');
					}
				}
			}
		}
    	sendResponse('change px to 18 over !');
    }
});