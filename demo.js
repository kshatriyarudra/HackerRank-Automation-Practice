const puppeteer = require('puppeteer')

let browswOpenedPromise = puppeteer.launch({
    // if headless property is not false then we can't see anything.
    headless : false,
    // setting for full screen visibility with the size of tab
    defaultViewport : null,
    // setting  for full tab on screen
    args : ['--start-maximized']

})

browswOpenedPromise.then(function(InstanceBrowser){
    // Instance Browser will opened in new tab.
    let newTabPromise = InstanceBrowser.newPage()
    return newTabPromise
}).then(function(newTab){
    let websiteOpenPromise = newTab.goto('https://www.linkedin.com')
    return websiteOpenPromise
}).then(function(){
    console.log("Website-Opened")
})