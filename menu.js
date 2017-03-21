function requestAsteroids (info, tab) {
  chrome.tabs.sendMessage(tab.id, {
    playAsteroids: true
  })
}

chrome.contextMenus.create({
  title: 'Play Asteroids',
  contexts: ['all'],
  onclick: requestAsteroids
})
