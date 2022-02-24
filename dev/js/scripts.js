import { slideInRight, slideInLeft} from "./scrollAnimation.js"
window.addEventListener('load', function(){

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



















    let triggerElements = ["#history-middle","#history-first", "#skills-content"];
    let animationElements =["#history-middle p","#robot-profile", "#skills-content h1"];
    let buttonIndex = 0;

    for( const element of triggerElements){
        // console.log(buttonIndex);
        console.log(element + " is an element");
        
        if(element === "#history-first"){
            console.log("The index is " + buttonIndex);
        }
        buttonIndex ++;
    }

    for(let i = 0; i < triggerElements.length; i++){
        if( i === triggerElements.length/2){
            slideInLeft(triggerElements[i], animationElements[i]);
        }else{
            slideInRight(triggerElements[i], animationElements[i]);
        }
    }
});