import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {textAnimationOnScroll} from "./textOnScroll";

gsap.registerPlugin(ScrollTrigger);

export function startPageScroll() {

    let navLinks = gsap.utils.toArray("#main-nav a");
    const sections = gsap.utils.toArray(".content");

    sections.forEach((section, i) => {

        ScrollTrigger.create({
            start: "top 50%",
            end:"bottom 50%",
            trigger: section,
            markers: true,
            onLeave: () => {
                if (navLinks[i + 1]) {
                    textAnimationOnScroll(i +1);

                }
            },
            onEnterBack: () => {
                textAnimationOnScroll(i);
            }
        })
    });
}
























// let sectionIDs = ["#portfolio", "#about", "#contact", "#skills"];

// export function goToSection(i) {
//     // pass the i valuer over to the textAnimation function
//     textAnimationOnScroll(i);
//     // gsap.to(window, {duration: 0.85, scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" }});
//     gsap.to(window, {duration: 0.85, scrollTo: { y: sectionIDs[i], autoKill: false, ease: "Power3.easeInOut" }});
// }

// ScrollTrigger.defaults({
// // markers: true
// });

// export function startPageScroll(){

//     let sections = gsap.utils.toArray(".content");

//     sections.forEach((contentPanel, i) => {
//         // console.log(i + " is the index value");

//         ScrollTrigger.create({
//             trigger: contentPanel,
//             onEnter: () => goToSection(i)
//         });

//         ScrollTrigger.create({
//             trigger: contentPanel,
//             start: "bottom bottom",
//             onEnterBack: () => goToSection(i)
//         });
//     });
// }