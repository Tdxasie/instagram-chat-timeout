
chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
	if (tab.url.match(/https:\/\/www\.instagram\.com\/direct\/t\/*/)) {
		private_messages_handler(tab);
	}
})


function private_messages_handler(tab) {
	console.log('love');
	chrome.tabs.sendMessage(tab.id, {message: 'get_confirm'}, (res) => {});
	setTimeout(() => chrome.tabs.update(tab.id, {url : "https://www.instagram.com/direct/inbox/"}), 1000*60*10);
}

// TODO: 
// confirmation before closing 
// or keep the back to inbox mode every 10min