
// number of sections
let numberOfSections = 4;

// array of colors for the list items
let colors = ["#f2542d","#70a9a1","#40798c","#1f363d"];

// this will create a reference to the #section-container id in the content.kit file
let contentContainer = document.querySelector("#content-container");

let idNames = ["portfolio", "about", "contact", "skills"];

export function createContent(){
    for(var i = 0; i < numberOfSections; i++){

        let section = document.createElement("section");
    
        section.style.backgroundColor = colors[i];

        section.classList.add("content");

        section.id = idNames[i];
    
        contentContainer.appendChild(section);

        // crate a <h1> title to hold the island information
        let title = document.createElement("h1");

        // set the innerHTML to the text with the values of the array placed into it
        title.innerHTML = idNames[i];

        // append the title to the li
        section.appendChild(title);

        let para = document.createElement("p");

        para.innerHTML = "here is my text!!!";

            section.appendChild(para);
    }
}


// let gridAreas = [];

// i = i + 1

// 0 = 0 + 1 === 1

// 1 = 1+ 1 === 2

// for(var i = 0; i < 15; i++){
//     var gridAreaName = "g" + i;
//     gridAreas.push(gridAreaName);
//     console.log(gridAreas[i])
// }


// let listItem = document.createElement("li");

// listItem.style.gridArea = gridAreas[i];


