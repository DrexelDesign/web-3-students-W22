import { gsap } from "gsap";

var colorArray = ["#8ecae6","#219ebc","#023047","#ffb703","#fb8500"];
var colorButtons = document.querySelectorAll("#colors li");
var content = document.querySelector("#content");

export function buidPickerOptions(){
    colorButtons.forEach((button,i) => {
        // set the background color of each button
        button.style.backgroundColor = colorArray[i];

        button.addEventListener("click", () =>{
            // set the background color from the button that is clicked
            content.style.backgroundColor = colorArray[i];
        })
    });

    // set the pattern for each button goes here

    // add an eventlistern for each pattern button goes here
}

// toggle buttons under the title
var pickerButtons = document.querySelectorAll("#select-top button");

export function pickerOptions(){

    pickerButtons.forEach((button,i) => {
        button.addEventListener("click", () =>{

            if(i === 0){
                console.log("this is color");
                gsap.to("#colors",{duration:0.25, y:0});
                // remove selected class from the other button
                pickerButtons[1].classList.remove("selected");
                // add the selected class to this button which is pickerButtons[0]
                button.classList.add("selected");
            }else{
                console.log("this is pattern");
                // the user wants to see the patterns so move the colors out of view
                gsap.to("#colors",{duration:0.25, y:50});
                // remove selected class from the other button
                pickerButtons[0].classList.remove("selected");
                // add the selected class to this button which is pickerButtons[0]
                button.classList.add("selected");
            }
        })
    });
}