document.addEventListener('DOMContentLoaded', function(){
    $("#createData").click(function(e) {
        chrome.tabs.executeScript(null, {code:"init();", allFrames: true});
    })
});