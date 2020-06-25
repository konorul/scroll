let fakeFeed = document.querySelector(".feed_fake")
let body = document.querySelector(".container")

let pixelRatio = window.devicePixelRatio
console.log(pixelRatio)

// container.style.transform = `scale(${pixelRatio})`;



let scrollPosition = 0

body.onscroll = function(){
    scrollPosition = body.scrollTop
    console.log(scrollPosition)

    if (scrollPosition >= 360) {
        console.log("ALERT")
        fakeFeed.classList.add("hidden")
    }

    if (scrollPosition <= 360) {
        console.log("ALERT")
        fakeFeed.classList.remove("hidden")
    }
};
