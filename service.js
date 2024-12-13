chrome.tabs.onCreated.addListener((tab) => {
    if (tab.pendingUrl === "chrome://newtab/") {
        chrome.storage.local.get("redirectUrl").then(({redirectUrl}) => {
            chrome.tabs.update(tab.id, {url: redirectUrl});
        })
    }
});