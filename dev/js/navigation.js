import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { goToSection } from "./pageScroll"

gsap.registerPlugin(ScrollToPlugin, ScrambleTextPlugin);

// change the accent line animation direction
gsap.set(".accent",{transformOrigin:"right center", scaleX:0.5});

// gsap.set(".accent",{transformOrigin:"left center", scaleX:0});
gsap.set(".standard",{transformOrigin:"right center", scaleX:0.5});

let navLinks = gsap.utils.toArray("nav a");
let accentLines = gsap.utils.toArray(".accent");
let standardLines = gsap.utils.toArray(".standard");
let textArray = gsap.utils.toArray(".text");
let currentLink = 0;
let buttonText = ["Portfolio","About","Contact","Skills"];

function menuSetUp(){
	navLinks.forEach((link, i) => {
		if(i !== 0){
			gsap.set(accentLines[i],{scaleX:0})
		}
	});
	// force the portfolio to be selected
	gsap.to(textArray[0], {duration: 0.25, scrambleText: "Portfolio", ease: "none"})
}

export function buttonClicks(){
	console.log("clicks");
	menuSetUp();

    navLinks.forEach((link, i) => {
        link.addEventListener("click", e => {
            e.preventDefault();

            console.log(currentLink);
            // set the currentLink
          
            gsap.to(window, {scrollTo: i * innerHeight});

            console.log(i);
            gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
            gsap.to(accentLines[i], {duration: 0.25, scaleX:0.025, ease: "none"});
            gsap.to(standardLines[i], {duration: 0.25, scaleX:0.025, ease: "none"});
            gsap.to(standardLines[i], {duration: 0.25, scaleX:1, ease: "none", delay:0.25});
            // remove style the link to show the text

            gsap.to(textArray[currentLink], {duration: 0.25, scrambleText: "", ease: "none"});
            gsap.to(accentLines[currentLink], {duration: 0.25, scaleX:0.0, ease: "none"});
            gsap.to(standardLines[currentLink], {duration: 0.25, scaleX:0.5, ease: "none"});

            currentLink = i;
          
        });
    });
}


export function buttonMouseEvents(){

    navLinks.forEach((link, i) => {
        /* ------------
            mouse enter
        ------------ */
        link.addEventListener("mouseenter", e => {
            e.preventDefault();
            //check to see if the link is the current link and if so don't use a mouse enter on it
            if(i != currentLink){
                gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
                gsap.to(accentLines[i], {duration: 0.25, scaleX:0.5, ease: "none"});
            }
        });


        /* ------------
            mouse out
        ------------ */
        link.addEventListener("mouseleave", e => {
            e.preventDefault();
            if(i != currentLink){
                gsap.to(textArray[i], {duration: 0.25, scrambleText: "", ease: "none"});
                gsap.to(accentLines[i], {duration: 0.25, scaleX:0, ease: "none"});
            }
        });
    });
}


    // Click event listener
    // for(var i = 0; i < buttonContainer.length; i++){

    //     buttonContainer[i].addEventListener("click", function(e){
    //         console.log("clicked");

    //         e.preventDefault();

    //         // grab the index value of what was clicked
    //         const currentIndex = [].indexOf.call(buttonContainer, e.target);
    //         // call the go to section function from the pageScroll js file
    //         // goToSection(currentIndex)

    //         gsap.to(window, {duration: 0.85, scrollTo: { y: sectionIDs[currentIndex], ease: "Power3.easeInOut" }});
    //     });
    // }

    


// // change the accent line animation direction
// gsap.set(".accent",{transformOrigin:"left center", scaleX:0});
// gsap.registerPlugin(TextPlugin, ScrambleTextPlugin);

// let buttons = gsap.utils.toArray(".button");
// let accentLines = gsap.utils.toArray(".accent");
// let buttonText = ["Portfolio","About","Contact","Skills"];



// let buttonContainer = gsap.utils.toArray(".button-container");
// // create a var to hold the currentIndex value
// let oldButtonIndex = 0;

// ;


// for(var i = 0; i < buttonContainer.length; i++){

//     buttonContainer[i].addEventListener("mouseenter", function(e){
//         console.log("mouse over");
//         console.log(e.target.tagName);
        
//         // grab the index value of what called this function
//         const indexValue = [].indexOf.call(buttonContainer, e.target)
//         // set the current index value to the old one to use in the mouse leave function
//         oldButtonIndex = indexValue;
//         console.log(indexValue);

//         // check to see if any of the buttons has the class of selected added 
//         if(buttonContainer[indexValue].classList.contains("selected") === false){
//             console.log("does not have the class selected");
//             gsap.to(buttons[indexValue], {duration: 0.25, scrambleText: buttonText[indexValue], ease: "none"});
//             gsap.to(accentLines[indexValue], {duration: 0.25, scaleX:1, ease: "none"});
//         }else{
//             console.log("has class slected");
//         }
//     });

//     buttonContainer[i].addEventListener("mouseleave", function(e){ 

//         const indexValue = [].indexOf.call(buttonContainer, e.target)

//         if(buttonContainer[indexValue].classList.contains("selected") === false){
//             gsap.to(buttons[oldButtonIndex], {duration: 0.25, scrambleText: "", ease: "none"});
//             gsap.to(accentLines[oldButtonIndex], {duration: 0.25, scaleX:0, ease: "none"});
//         }
//     });

//     buttonContainer[i].addEventListener("click",function(e){
//         // add the selected class so that you can check for the mouse out and over
//         // grab the index value of what called this function
//         const indexValue = [].indexOf.call(buttonContainer, e.target)

//         // remove the selected class from the old button
//         buttonContainer[oldButtonIndex].classList.remove("selected")

//         // force the old button back to its static state
//         // forceMouseOut(oldButtonIndex);

//         // add a class called selected to check against in the mouse over and out event listeners
//         buttonContainer[indexValue].classList.add("selected");

//         gsap.to(accentLines[oldButtonIndex], {duration: 0.25, scaleX:0.1, ease: "none", transformOrigin:"right center"});

//     })

//     // function forceMouseOut(index){
//     //     gsap.to(buttons[index], {duration: 0.25, scrambleText: "", ease: "none"});
//     //     gsap.to(accentLines[index], {duration: 0.25, scaleX:0, ease: "none"});
//     // }
// }