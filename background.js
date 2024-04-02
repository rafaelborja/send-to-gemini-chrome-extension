chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "sendToGemini",
        title: "Send to Gemini",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sendToGemini") {
        const selectedText = info.selectionText;
        chrome.tabs.query({url: "https://gemini.google.com/*"}, (tabs) => {
            if (tabs.length === 0) {
                chrome.tabs.create({url: "https://gemini.google.com/"}, (newTab) => {
                    injectAndSend(newTab.id, selectedText);
                });
            } else {
                const geminiTab = tabs[0];
                chrome.tabs.update(geminiTab.id, {active: true});
                injectAndSend(geminiTab.id, selectedText);
            }
        });
    }
});

function injectAndSend(tabId, text) {
    chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ["contentScript.js"]
    }, () => {
        chrome.tabs.sendMessage(tabId, {text: text});
    });
}
