import { skillsTrigger } from "./scrollAnimation.js"

window.addEventListener('load', function(){
    // this will call the skillsTrigger function located in the scrollAnimation.js file
    skillsTrigger("right center", ".gallery","#skynet");

    skillsTrigger("left center",".yellow-bar","#skills-content");
});



// demoThing();

// console.log("this is working!");


// function demoThing(){
//     console.log("this is working inside function!");
// }


// will call the function
// demoThing();