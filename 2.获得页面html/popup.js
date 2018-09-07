chrome.tabs.getSelected(null, function (tab) {
    $("#createData").click(function(e) {
        chrome.tabs.sendMessage(tab.id, { greeting: "GetHTML" }, function(response) {
            alert(response);
        });
    });
});