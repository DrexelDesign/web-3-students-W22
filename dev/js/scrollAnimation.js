import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.set(".gallery",{transformOrigin:"left center"});


export function skillsTrigger(originDirection, animationElement, triggerElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        // duration:3, 
        scaleX:0,
        transformOrigin: originDirection,
        scrollTrigger: {
            trigger: triggerElement,
            start:"top 60%",
            end: "bottom 80%",
            toggleActions: "restart none resume none",
            scrub: true,
            markers: true
        },
        stagger:0.25
    });
}






// export function demoThing(){
    // console.log("this is working here too!");
    // console.log("working");
// }