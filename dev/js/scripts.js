import { gsap } from "gsap";

var buttons = document.querySelectorAll("li");

buttons.forEach((button, i) => {
        // console.log(i);
        var top = buttons[i].children[0].children[0];
        var bottom = buttons[i].children[0].children[1];
        var tl = new gsap.timeline({paused:true});

        tl.to(top,{duration:1, y:-15},"same")
        .to(bottom,{duration:1, y:-15}, "same");

        button.addEventListener("mouseenter", () =>{
            console.log("enter");
            tl.restart();
            tl.play();
        })

        button.addEventListener("mouseleave", () =>{
            console.log("leave");
            tl.restart();
            tl.play();
        })
});
