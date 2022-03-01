import { projects } from "./projects"


console.log(projects[0].title);


// populate the hero images
let heroImgArray = document.querySelectorAll('#gallery li');
// iterate over the heroImgArray and populate the background images
heroImgArray.forEach((heroImg, i) => {
    heroImg.style.backgroundImage = "url(" + projects[i].images[0] + ")";
});





