chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    // Parse the URL to extract the 'env' parameter
    const urlParams = new URL(tab.url).searchParams;
    
    // Check if the 'env' parameter exists in the URL
    let envValue = null;
    for (const [key, value] of urlParams.entries()) {
      if (key === "env") {
        envValue = value;  // Capture the environment (e.g., DEV)
      }
    }

    // If the 'env' parameter is found, change the tab title
    if (envValue) {
      chrome.scripting.executeScript({
        target: {tabId: tabId},
        function: changeTabTitle,
        args: [`Environment: ${envValue}`]  // You can modify this title format
      });
    }
  }
});

// Function to change the tab title
function changeTabTitle(newTitle) {
  document.title = newTitle;
}
