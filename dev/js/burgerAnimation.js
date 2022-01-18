import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);





export const burgerTL = new gsap.timeline({paused:true});


burgerTL.to("#outline",{duration:1, alpha:0});