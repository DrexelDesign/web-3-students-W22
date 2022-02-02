// import {skillsTrigger,galleryAni} from "./scrollAnimation.js";
// import {burgerTL} from "./burgerAnimation.js";
// import {menuAnimation} from "./mobileMenu.js"
// import {scrollPage} from "./pageScroll"
// import { displayWindowSize } from "./mobileResizing"

import { setupMenu } from "./slideMenu"


window.addEventListener('load', function () {
    setupMenu();
    // galleryAni();
})

//listen to window resize
// window.addEventListener("resize", displayWindowSize);

// //check the window size on load
// window.addEventListener('load', displayWindowSize); 