import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.set(".yellow-bar", {transformOrigin: "left center"});

export function skillsTrigger() {
    const tl = new gsap.timeline();

    tl.from(".yellow-bar", {
        duration: 1,
        scrollTrigger: {
            trigger: "#skills-content",
            start: "top 60%",
            end: "bottom 80%",
            toggleActions: "restart none resume none",
            scrub: true
            // markers: true
        },
        scaleX: 0,
        stagger: 0.25
    });
}

export function galleryAni(){
    const tl = new gsap.timeline();

    tl.from("#skynet li",{
        duration: 1,
        scrollTrigger:{
            trigger:"#skynet",
            start: "top 60%",
            end: "bottom 90%",
            toggleActions: "restart none resume none",
            scrub: true
            // markers: true
        },
        backgroundPosition: "center 300px",
        stagger:0.25

    });
}