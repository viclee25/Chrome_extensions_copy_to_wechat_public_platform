chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if(request.cmd == 'change_format'){
	    var tag_name = document.getElementById("js_content").childNodes;
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
});