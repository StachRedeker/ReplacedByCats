chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.browserAction.setBadgeText({text: `${request.counter}`});
});
