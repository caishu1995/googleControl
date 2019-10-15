chrome.tabs.getSelected(null, function (tab) {
    document.getElementById("createData").onclick = function(e) {
        chrome.tabs.sendMessage(tab.id, { greeting: "GetHTML" }, function(response) {
            document.write(response.value);
        });
    };
});