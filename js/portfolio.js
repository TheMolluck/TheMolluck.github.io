// When the user scrolls the page, execute stickyHeader
window.onscroll = function() {stickyHeader()};
// Get the header
var header = document.getElementById("stickyHeader");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// if window resizes, get new offset
window.onresize = function() {getHeaderOffset()};

window.onbeforeunload = function () {
    window.scrollTo(0,0);
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    if(window.scrollY === 0) {
        header.classList.remove("bottom-border");
        header.classList.remove("sticky")
    }
    else if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } 
    else {
        header.classList.remove("sticky")
        header.classList.add("bottom-border");
    }
}

function getHeaderOffset() {

    if(window.scrollY === 0) {
        sticky = header.offsetTop;   
    }
}

