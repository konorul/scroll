let fakeFeed = document.querySelector(".feed_fake")
let body = document.querySelector(".container")
// let pixelRatio = window.devicePixelRatio

// container.style.transform = `scale(${pixelRatio})`;



let scrollPosition = 0

body.onscroll = function(){
    scrollPosition = body.scrollTop
    console.log(scrollPosition)

    if (scrollPosition >= 720) {
        console.log("ALERT")
    }
};
