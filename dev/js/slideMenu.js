import { gsap } from "gsap";

gsap.set("nav",{right:0});

let rightSide = document.querySelectorAll(".nav-container .nav-rightSide");
let buttons = document.querySelectorAll(".nav-container aside");
let currentIndex =  -1;

export function setupMenu(){
    buttons.forEach((button , i) => {
        button.addEventListener("click", () => {

            console.log(currentIndex + " this is current index");

            if(currentIndex != -1){
                console.log("shrink");
                rightSide[currentIndex].classList.remove("active");
            }

            currentIndex = i;
            rightSide[i].classList.add("active");
        })
    })


    // add a listener to the content section
    let content = document.querySelector("#content");

    content.addEventListener("click", () => {
        rightSide[currentIndex].classList.remove("active");

        currentIndex = -1;
    })

}