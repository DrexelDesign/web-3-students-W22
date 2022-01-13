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
            toggleActions: "restart none resume none",
            markers: true
        }
    });
}


// gsap.set(".gallery",{transformOrigin:"left center"});


// export function skillsTrigger(originDirection, animationElement, triggerElement){
//     const tl = new gsap.timeline();

//     tl.from(animationElement,{
//         // duration:3, 
//         scaleX:0,
//         transformOrigin: originDirection,
//         scrollTrigger: {
//             trigger: animationElement,
//             start:"top 60%",
//             end: "bottom 80%",
//             toggleActions: "restart none resume none",
//             scrub: 2,
//             pin: "#skills",
//             markers: true
//         },
//         stagger:0.25
//     });
// }






// export function demoThing(){
    // console.log("this is working here too!");
    // console.log("working");
// }