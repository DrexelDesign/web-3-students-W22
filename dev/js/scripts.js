import { projects } from "./projects"

window.addEventListener('load', function() {

    // console.log(projects[0].title);

    // populate the hero images
    let heroImgArray = document.querySelectorAll('#gallery li');
    // iterate over the heroImgArray and populate the background images
    heroImgArray.forEach((heroImg, i) => {
        heroImg.style.backgroundImage = "url(" + projects[i].images[0] + ")";
    });

    let heroLinks = document.querySelectorAll("#gallery a");

    heroLinks.forEach((link, i) => {
        console.log("hello");

        link.addEventListener("click", () =>{
            localStorage.setItem("indexValue", i);
            link.href = "detail.html?=" + projects[i].title;
        });
    });
})