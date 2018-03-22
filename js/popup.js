function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}
// 格式转化发送请求
$("#Btn").click(function () {//给web页面的按钮绑定点击事件，通过点击事件来控制发送消息
    sendMessageToContentScript({cmd:'change_format', value:'Change format start！'}, function(response)
	{
		// 转格式事件成功后将按钮disabled，防止多次点击
	    $("#Btn").attr("disabled","disabled");
	    console.log('来自content的回复：'+response);
	});
});
// 复制图文发送请求
$("#Btn2").click(function () {
    sendMessageToContentScript({cmd:'copy_article', value:'Copy article start！'}, function(response)
	{
	    console.log('来自content的回复：'+response);
	});
});
// 设置按钮点击打开插件设置页面
$("#Btn3").click(function () {
	var opening = chrome.runtime.openOptionsPage();
	opening.then(onOpened, onError);
    function onOpened() {
  		console.log(`Options page opened`);
	}

	function onError(error) {
	    console.log(`Error: ${error}`);
	}
});

