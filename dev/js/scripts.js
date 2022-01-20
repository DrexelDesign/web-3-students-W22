import { slideInRight, slideInLeft} from "./scrollAnimation.js";
import { burgerTL } from "./burgerAnimation";
import {menuAnimation} from "./mobileMenu.js"
import {scrollPage} from "./pageScroll"
import { displayWindowSize } from "./mobileResizing"

var burgerButton = document.querySelector("#burger");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        // can't see menu... play timeline of burger into X
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        // can see menu.. play X back into burger
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);
let navButtons = document.querySelectorAll(".nav-btns");

for (const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}

function checkScrolling(e) {
    // check to see which button was clicked
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue);
    }
}

window.addEventListener('load', function(){

    // // index values               0                   1                   2
    let triggerElements = ["#history-middle","#history-first", "#skills-content"];
    // index values                  0                   1                   2
    let animationElements =["#history-middle p","#robot-profile", "#skills-content h1"];
    let buttonIndex = 0;

    for( const element of triggerElements){
        // console.log(buttonIndex);
        // console.log(element + " is an element");
        
        if(element === "#history-first"){
            // console.log("The index is " + buttonIndex);
        }
        buttonIndex ++;
    }

    for(let i = 0; i < triggerElements.length; i++){
        // console.log(triggerElements[i]);
        if(triggerElements[i] === "#skills-content" || triggerElements[i] === "#history-middle"){
            // console.log(i + " is the index value of triggerElements");
        }
        if( i === triggerElements.length/2){
            slideInLeft(triggerElements[i], animationElements[i]);
        }else{
            slideInRight(triggerElements[i], animationElements[i]);
        }
    }
});

//listen to window resize
window.addEventListener("resize", displayWindowSize);

//check the window size on load
window.addEventListener('load', displayWindowSize); 