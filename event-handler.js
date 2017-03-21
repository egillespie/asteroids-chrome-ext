function playAsteroids () {
  var s = document.createElement('script')
  s.src = chrome.runtime.getURL('asteroids-loader.js')
  document.body.appendChild(s)
}

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
  if (message.playAsteroids) {
    playAsteroids()
  }
})
