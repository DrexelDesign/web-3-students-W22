// import { slideInRight, slideInLeft} from "./scrollAnimation.js";?
import { burgerTL } from "./burgerAnimation";

var burgerButton = document.querySelector("#burger");

burgerButton.addEventListener("click", () =>{
    console.log("burger clicked");
});






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

