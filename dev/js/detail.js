import { projects } from "./projects"


window.addEventListener('load', function() {

        console.log(projects[localStorage.getItem("indexValue")].images[1]);

        //populate data
        let title = document.querySelector("#detail h1");
        title.innerHTML = projects[localStorage.getItem("indexValue")].title;

        let description = document.querySelector("#detail p");
        description.innerHTML = projects[localStorage.getItem("indexValue")].description;



        let imgDetailsArray = this.document.querySelectorAll(".detail-imgs");

        imgDetailsArray.forEach((image, i) => {
            imgDetailsArray[i].style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[i] + ")";
        });

        // let heroImg = document.querySelector("#detail-hero");
        // heroImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[1] + ")";

        // let moreImg = document.querySelector("#moreImg");
        // moreImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[0] + ")";
        
});


// Back Button

var backBtn = document.querySelector("button");
backBtn.addEventListener("click", ()=>{
    location.href = "index.html";
})