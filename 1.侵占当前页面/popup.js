document.addEventListener('DOMContentLoaded', function(){
	document.getElementById("createData").onclick = function(e) {
        chrome.tabs.executeScript(null, {code:"document.write('你被占领了！哈哈哈')", allFrames: true});
    }
});