import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function slideInRight(triggerElement,animationElement ){
    const tl = new gsap.timeline();
    tl.from(animationElement,{
        duration:1,
        x: -500,
        alpha:0,
        scrollTrigger:{
            trigger: triggerElement,
            scrub:true,
            toggleActions: "restart none resume none"
            // markers: true
        }
    });
}

export function slideInLeft(triggerElement,animationElement ){
    const tl = new gsap.timeline();
    tl.from(animationElement,{
        duration:1,
        x: 500,
        alpha:0,
        scrollTrigger:{
            trigger: triggerElement,
            scrub:true,
            toggleActions: "restart none resume none"
            // markers: true
        }
    });
}
