chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    // Match a specific URL pattern and change the title
    if (tab.url.includes("google.com")) {
      chrome.scripting.executeScript({
        target: {tabId: tabId},
        function: changeTabTitle,
        args: ["Test Google"] // You can modify this title as needed
      });
    }
  }
});

function changeTabTitle(newTitle) {
  document.title = newTitle;
}
