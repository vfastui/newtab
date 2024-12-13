let inputUrl = document.querySelector("input");
chrome.storage.local.get("redirectUrl").then(({redirectUrl}) => {
    inputUrl.value = redirectUrl || "";
})

document.querySelector("form").addEventListener("submit", function () {
    chrome.storage.local.set({redirectUrl: inputUrl.value})
}, false);
