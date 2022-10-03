

const timeout_duration = 1000
let tabs_affected = []

chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
	if (tab.url.match(/https:\/\/www\.instagram\.com\/direct\/t\/*/)) {
		private_messages_handler(tab.id);
	}
})


function private_messages_handler(id) {
	console.log('love');
	console.log(tabs_affected)
	if (tabs_affected.every(tab => tab.id !== id)) { // check that is not yet registered
		console.log('added tab')
		let to = setTimeout(() => chrome.tabs.update(id, {url : "https://www.instagram.com/direct/inbox/"}), timeout_duration)
		tabs_affected.push({id: id, to: to})
	} else { // tab is registered so we get it and reset timeout
		console.log('updated timeout')
		let idx = tabs_affected.findIndex(tab => tab.id === id).to
		clearTimeout(tabs_affected[idx].to)
		to = setTimeout(() => chrome.tabs.update(id, {url : "https://www.instagram.com/direct/inbox/"}), timeout_duration)
		tabs_affected[idx].to = to
	}
	// chrome.tabs.sendMessage(tab.id, {message: 'get_confirm'}, (res) => {});
	// setTimeout(() => chrome.tabs.update(id, {url : "https://www.instagram.com/direct/inbox/"}), 1000*60*10);
}

// TODO: 
// confirmation before closing 
// or keep the back to inbox mode every 10min