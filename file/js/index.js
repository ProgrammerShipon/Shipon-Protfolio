
/**
 * Navbar sticky
 */
window.onscroll = function(){
   stickyFunction();
}
const navBar = document.querySelector('.logo-menu-area');
const stickyNav = navBar.offsetTop;
function stickyFunction () {
   if (window.pageYoffset > stickyNav) {
      navBar.classList.add('stickyActive');
   } else {
      navBar.classList.remove('stickyActive')
   }
}

// Typing script
const target = document.querySelector(`#script-write`)
const list = [
   "Web Developer.",
   "Web Designer.",
   "my experience.",
   "HTML , CSS , SCSS.",
   "JAVASCRIPT.",
]
const options = {
   // writeSpeed: 75,
   // clearSpeed: 50,
   // writeAfter: 150,
   // clearAfter: 1500,
   // superAccurate: false,
}

const typer = new TypeWriter(target, list, options);
typer.start();