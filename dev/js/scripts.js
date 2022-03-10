
import { gsap } from "gsap";
import {getPrimaryColor} from "./colors"
import { slideInRight, slideInLeft} from "./scrollAnimation.js"



// var
// const
// final



window.addEventListener('load', function(){


     // set the primary color from scripts.js

    // var color = setPrimaryColor("#e50606");

    // console.log(primaryColor + " this is primary color");


    gsap.to("body",{duration:1, backgroundColor: getPrimaryColor()});


    console.log(getPrimaryColor() + " this is what was returned to me");

    // console.log(getPrimaryColor() + " this is primary color");


























    // var redColor = "red";

    // redColor = "hello";

    // console.log(redColor + " this is red");
    // function getPrimaryColor(){

    // }

    // function setPrimaryColor(){
        
    // }

    // var redColor = "##f94d4d";


    // redColor = "#4d8cf9";


    // function getRedColor(){
    //     var redColor = "#f94d4d!!!!";
    //     return redColor;
    // }

    // var redColor = getRedColor();
    // console.log(redColor + " this is the red color");









    // get a css var value
    // var colorYellow = getComputedStyle(document.documentElement).getPropertyValue("--yellow");
    // console.log(colorYellow + " is the hex value for yellow");

    // set a css var value
    // colorYellow = this.document.documentElement.style.setProperty("--yellow", 'coral');


    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {

       

        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); //add this
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); //add this
        }    


        console.log(toggleSwitch.checked + ' this is the value for the checkbox');
        e.stopPropagation();
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }






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


    let buttonIndex = 0;

    for( const element of triggerElements){
        // console.log(buttonIndex);
        console.log(element + " is an element");
        
        if(element === "#history-first"){
            console.log("The index is " + buttonIndex);
        }

        buttonIndex ++;
    }



        //  i = i + 1;   === i++
    for(let i = 0; i < triggerElements.length; i++){
        // console.log(triggerElements[i]);

        if(triggerElements[i] === "#skills-content" || triggerElements[i] === "#history-middle"){
            // console.log(i + " is the index value of triggerElements");
        }

        //  = 1 = 6;
        //  == 
        //  === 1 === 2


        // if(2 === 2){
        //     // this is the true statement

        // }else{
        //     // this is the false statement

        // }



        
        if( i === triggerElements.length/2){
            slideInLeft(triggerElements[i], animationElements[i]);
        }else{
            slideInRight(triggerElements[i], animationElements[i]);
        }
    }

    // for(let i = 2; i < triggerElements.length; i++){
    //     slideInLeft(triggerElements[i], animationElements[i]);
    // }


    // for (i in triggerElements) {
    //     console.log(triggerElements[i]);
    // }


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