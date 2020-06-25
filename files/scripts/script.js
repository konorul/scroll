let fakeFeed = document.querySelector(".feed_fake")
let container = document.querySelector(".container")
let pixelRatio = window.devicePixelRatio

container.style.transform = `scale(${pixelRatio})`;


console.log(pixelRatio)


let scrollPosition = 0

container.onscroll = function(){
    scrollPosition = container.scrollTop
        console.log(scrollPosition)
};
