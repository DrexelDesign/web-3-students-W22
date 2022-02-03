import { gsap } from "gsap";

gsap.set("nav",{right:0});


// gsap.set("#button-1 .nav-rightSide", {scaleX:0, transformOrigin:("left, center")});

// let buttonOne = document.querySelector("#button-1");

let rightSide = document.querySelectorAll(".nav-container .nav-rightSide");

let buttons = document.querySelectorAll(".nav-container aside");

// rightSide.classList.add("active");

// console.log(rightSide);

let currentIndex =  -1;

// let isActive = false;



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



        // if(button.classList.contains("active")){
        //     // button.classList.remove("active");
        // }else{
        //     button.classList.add("active");
        // }
    })

    
    // buttonOne.addEventListener("click", ()=>{

    //     if(!isActive){
    //         rightSide.classList.add("active");
    //         isActive = true;
    //     }else{
    //         rightSide.classList.remove("active");
    //         isActive = false;
    //     }

    // });


    // gsap.set("#button-1 .nav-rightSide", {scaleX:1, transformOrigin:("right, center")});


    // let navContainer = document.querySelectorAll(".nav-container");
    // let navRightSide = document.querySelectorAll(".nav-rightSide");
    // let navButton = document.querySelectorAll(".nav-content button");

    // // gsap.to("#button-1",{x:"-=500"});

    // // let numbersToMove = [50,100,150];

    // navRightSide.forEach((button,i) => {

    //     console.log(button);

    //     if(i == 1){
    //         button.style.flexGrow = 4;
    //     }
        

    //     // button.addEventListener("click", e =>{
    //     //     if(i){
    //     //         console.log("YES");
    //     //         // gsap.to(navContainer[i],{flexGrow:4});
    //     //     }else{
    //     //         // gsap.to(navContainer[i],{flexGrow:1});
    //     //         console.log("NO");
    //     //     }
    //     // })

        
    // });

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

