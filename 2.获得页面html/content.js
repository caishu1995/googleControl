var html = document.body.innerHTML;  //获得页面对象
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.greeting == "GetHTML") sendResponse({name: "aa", value: html});
    else sendResponse(1);
});