import { gsap } from "gsap";

gsap.set("#card-1",{transformOrigin:"center bottom", scaleX:0.9, scaleY:0});
gsap.set("#card-2",{transformOrigin:"center bottom", scaleX:0.95, scaleY:0});

let main = document.querySelector("main");
let mainTL = gsap.timeline({paused:true});
    mainTL.to(".grey",{duration:0.5, backgroundColor:"#111111"},"change")
    .to(main,{duration:0.5, scale:0.75, y:"+=100", transformOrigin: "center bottom"},"change")
    // show the red cards
    .to("#card-2",{duration:0.15, scaleY:1, ease:"none"})
    .to("#card-1",{duration:0.15, scaleY:1, ease:"none"},"-=50%");

let hiddenMenuTL = gsap.timeline({paused:true});
hiddenMenuTL.from(".hiddenMenuLink",{duration:0.5, y:"+=50", alpha:0, stagger:0.25},"+=0.5");


export function resizePage(isOpen){

    console.log("here");
    if(isOpen === false){
        mainTL.play();
        // animate the menu coming into view
        hiddenMenuTL.play();
        gsap.set("#hidden",{zIndex:100});

        // disable scrolling
        disableScroll();

    }else{
        mainTL.reverse();

        gsap.set("#hidden",{zIndex:-1});

        // enable scrolling
        enableScroll();
    }
}









/* =====================================
    Disable scrolling code
===================================== */


// code found here: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily 

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};


function preventDefault(e) {
    e.preventDefault();
  }
  
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  
  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; } 
    }));
  } catch(e) {
    console.log("there was an error");
  }
  
  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


  // call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  
  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }