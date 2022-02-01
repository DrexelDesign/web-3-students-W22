import {skillsTrigger,galleryAni} from "./scrollAnimation.js";
import {burgerTL} from "./burgerAnimation.js";
import {menuAnimation} from "./mobileMenu.js"
import {scrollPage} from "./pageScroll"
import { displayWindowSize } from "./mobileResizing"


let burgerClicked = false;
let burgerButton = document.querySelector("#burger");

window.addEventListener('load', function () {
    skillsTrigger();
    galleryAni();
})

// burgerButton.addEventListener("click", () => {
//     if(burgerClicked === false){
//         burgerTL.play();
//         menuAnimation.play();
//         burgerClicked = true;
//     }else{
//         burgerTL.reverse();
//         menuAnimation.reverse();
//         burgerClicked = false;
//     }
// });

burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");

// for(var i = 0; i < navButtons.length; i++){
//     navButtons[i].addEventListener("click", openCloseMenu);
// }

for (const button of navButtons) {
    button.addEventListener("click", checkScrolling);
}

// var index = [].indexOf.call(navButtons);
// for(const test of navButtons){
//     test.addEventListener("click", testIndex);
// }

// function testIndex(e){
//     // var index = [...this.children].indexOf(e.target);
//     // console.log([].indexOf.call(navButtons, e.target));

//     const indexValue = [].indexOf.call(navButtons, e.target)
//     // scrollPage(indexValue);
//     // console.log(index);
// }

// console.log(navButtons);
function openCloseMenu() {
    if (burgerClicked === false) {
        burgerTL.play();
        menuAnimation.play();
        burgerClicked = true;
    } else {
        burgerTL.reverse();
        menuAnimation.reverse();
        burgerClicked = false;
    }
}

function checkScrolling(e) {
    // check to see which button was clicked
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue);
    }
}

//listen to window resize for the menu being down and if it is force it back up
window.addEventListener("resize", function(){
    if(burgerClicked === true){
        console.log("fire");
        openCloseMenu();
    }
});

//listen to window resize
window.addEventListener("resize", displayWindowSize);

//check the window size on load
window.addEventListener('load', displayWindowSize); 