import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(TextPlugin, ScrambleTextPlugin);

// change the accent line animation direction
gsap.set(".accent",{transformOrigin:"right center", scaleX:0.5});

// gsap.set(".accent",{transformOrigin:"left center", scaleX:0});
gsap.set(".standard",{transformOrigin:"right center", scaleX:0.5});



let buttons = gsap.utils.toArray("nav a");
let accentLines = gsap.utils.toArray(".accent");
let buttonText = ["Portfolio","About","Contact","Skills"];
let textArray = gsap.utils.toArray(".text");

// this function is called from the pageScroll js file and animates the menu text on scroll
export function textAnimationOnScroll(menuIndex){


    // on page load force portfolio to be selected
    gsap.to(accentLines[0], {duration: 0.25, scaleX:0.1, ease: "none", transformOrigin:"right center"});



    for(var i = 0; i < buttons.length; i++){
        if(i === menuIndex){
           gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
            gsap.to(accentLines[i], {duration: 0.25, scaleX:0.5, ease: "none"});
        }else{
            gsap.to(textArray[i], {duration: 0.01, scrambleText: "", ease: "none"});
            gsap.to(accentLines[i], {duration: 0.25, scaleX:0, ease: "none"});
        }
    }
}
