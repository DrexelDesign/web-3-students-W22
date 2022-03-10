import {slideInRight,slideInLeft} from "./scrollAnimation.js"

window.addEventListener('load', function () {

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        console.log(e.target.checked);
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);



    let triggerElements = ["#history-middle", "#history-first", "#skills-content"];
    let animationElements = ["#history-middle p", "#robot-profile", "#skills-content h1"];
    let buttonIndex = 0;

    for (const element of triggerElements) {
        // console.log(buttonIndex);
        console.log(element + " is an element");

        if (element === "#history-first") {
            console.log("The index is " + buttonIndex);
        }
        buttonIndex++;
    }

    for (let i = 0; i < triggerElements.length; i++) {
        if (i === triggerElements.length / 2) {
            slideInLeft(triggerElements[i], animationElements[i]);
        } else {
            slideInRight(triggerElements[i], animationElements[i]);
        }
    }
});