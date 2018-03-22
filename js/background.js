function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({url: "*://*.weixin.qq.com/*"}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}
function change_px12() {
	sendMessageToContentScript({cmd:'change_px12', value:'Change px to 12 start！'}, function(response)
	{
	    console.log('来自content的回复：'+response);
	});
}
function change_px14() {
	sendMessageToContentScript({cmd:'change_px14', value:'Change px to 14 start！'}, function(response)
	{
	    console.log('来自content的回复：'+response);
	});
}
function change_px16() {
	sendMessageToContentScript({cmd:'change_px16', value:'Change px to 16 start！'}, function(response)
	{
	    console.log('来自content的回复：'+response);
	});
}
function change_px18() {
	sendMessageToContentScript({cmd:'change_px18', value:'Change px to 18 start！'}, function(response)
	{
	    console.log('来自content的回复：'+response);
	});
}
