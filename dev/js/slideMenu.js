import { gsap } from "gsap";

gsap.set("nav",{right:0});

export function setupMenu(){


    let navContainer = document.querySelectorAll(".nav-container");
    // let navRightSide = document.querySelectorAll(".nav-rightSide");

    let navButton = document.querySelectorAll(".nav-content button");

    // gsap.to("#button-1",{x:"-=500"});

    let numbersToMove = [50,100,150]

    // gsap.to(navContainer[0],{x:"-=" + (navRightSide[0].offsetWidth - numbersToMove[0]) });


    for(let i = 0; i< navContainer.length; i++){

        navButton[i].addEventListener("click", ()=>{
            //gsap.to(navContainer[i],{x:"-=" + (navRightSide[i].offsetWidth - numbersToMove[i]) });
            gsap.to(navContainer[i],{width:"+=85vw"});
            if(i == ){

            }
        })
        
        // let numberConvert = (navRightSide[i].offsetWidth + numbersToMove[i]).toString();
        // console.log(numberConvert);
        // console.log(navRightSide[i].offsetWidth);
        // gsap.set(navContainer[i],{x:"+=" + numberConvert });
    }


}