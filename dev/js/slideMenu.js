import { gsap } from "gsap";

gsap.set("nav",{right:0});

export function setupMenu(){


    let navContainer = document.querySelectorAll(".nav-container");
    let navRightSide = document.querySelectorAll(".nav-rightSide");
    let navButton = document.querySelectorAll(".nav-content button");

    // gsap.to("#button-1",{x:"-=500"});

    // let numbersToMove = [50,100,150];

    navRightSide.forEach((button,i) => {

        console.log(button);

        if(i == 1){
            button.style.flexGrow = 4;
        }
        

        // button.addEventListener("click", e =>{
        //     if(i){
        //         console.log("YES");
        //         // gsap.to(navContainer[i],{flexGrow:4});
        //     }else{
        //         // gsap.to(navContainer[i],{flexGrow:1});
        //         console.log("NO");
        //     }
        // })

        
    });

}


    // for(let i = 0; i< navContainer.length; i++){

    //     navButton[i].addEventListener("click", ()=>{
    //         //gsap.to(navContainer[i],{x:"-=" + (navRightSide[i].offsetWidth - numbersToMove[i]) });
    //         gsap.to(navContainer[i],{width:"+=85vw"});
    //         if(i == ){

    //         }
    //     })
        
    //     // let numberConvert = (navRightSide[i].offsetWidth + numbersToMove[i]).toString();
    //     // console.log(numberConvert);
    //     // console.log(navRightSide[i].offsetWidth);
    //     // gsap.set(navContainer[i],{x:"+=" + numberConvert });
    // }

