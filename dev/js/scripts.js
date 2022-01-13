// import { skillsTrigger } from "./scrollAnimation.js"

import { slideInRight } from "./scrollAnimation.js"



// var
// const
// final



window.addEventListener('load', function(){



    // let number = 10;
    // let anotherNumber = 3;


    // number = "ten";

    // console.log(number);


    // let answer = number + anotherNumber;
    // console.log(answer);

    // index values               0                   1                   2
    let triggerElements = ["#history-middle","#history-first", "#skills-content"];
    // console.log(triggerElements);
    // console.log(triggerElements.length);
    //console.log(triggerElements[0]);

    // index values                  0                   1                   2
    let animationElements =["#history-middle p","#robot-profile", "#skills-content h1"];
    // console.log(animationElements);
    // console.log(animationElements.length)

        //  i = i + 1;   === i++
    for(let i = 0; i < triggerElements.length; i++){
        console.log(triggerElements[i]);
        slideInRight(triggerElements[i], animationElements[i]);
    }


    // slideInRight();

    // slideInRight(triggerElements[0], animationElements[0]);

    // slideInRight("#history-first", "#robot-profile");

    // this will call the skillsTrigger function located in the scrollAnimation.js file
    // skillsTrigger("right center", ".gallery","#skynet");

    // skillsTrigger("left center",".yellow-bar","#skills-content");
});



// demoThing();

// console.log("this is working!");


// function demoThing(){
//     console.log("this is working inside function!");
// }


// will call the function
// demoThing();