chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'get_confirm') {
        console.log('love')
        window.confirm('love SOS')
    }
})

// chrome.runtime.onConnect.addListener((port) => {
//     console.log(port)
//     port.onMessage.addListener( msg => {
//         if (msg.message === 'get_confirm') {
//             console.log('love')
//             window.confirm('love SOS')
//         }
//     })
// })