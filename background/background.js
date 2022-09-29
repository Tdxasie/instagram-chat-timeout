
chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
	if (tab.url.match(/https:\/\/www\.instagram\.com\/direct\/t\/*/)) {
		setTimeout(() => chrome.tabs.remove(tab.id), 1000 * 60 * 60)
	}
})

// TODO: 
// confirmation before closing 