var html = document.body.innerHTML;  //获得页面对象
chrome.extension.onMessage.addListener(function(request, sender, sendMessage) {
    if(request.greeting == "GetHTML") sendMessage(html);
    else sendMessage("");
});