import { gsap } from "gsap";

var buttons = document.querySelectorAll("li");



function playTimeline(top, bottom){
    var tl = new gsap.timeline({paused:true});
    tl.from(top,{duration:1, y:15,onComplete: function() { this.time(0).kill(); }},"same");
    tl.from(bottom,{duration:1, y:15}, "same");
    tl.play();    
}


buttons.forEach((button, i) => {
        console.log(i);

        button.addEventListener("mouseenter", () =>{
            console.log("enter");
            // console.log(button.children[0].children[0]);
            // tl.restart();
            playTimeline(buttons[i].children[0].children[0], button.children[0].children[1]);
        })


        button.addEventListener("mouseleave", () =>{
            console.log("leave");
            // console.log(button.children[0].children[0]);
            // tl.restart();
            playTimeline(buttons[i].children[0].children[0], button.children[0].children[1])
        })
});
