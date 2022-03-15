// *** Scroll animations *** 

// function to reveal element(s) with ".reveal" class on scroll 
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        // grab viewport height
        const windowHeight = window.innerHeight;

        // grab dist element is from top of viewport
        const elementTop = reveals[i].getBoundingClientRect().top;
 
        // dist from bottom when to make element visible on scroll (10%vh)
        const elementVisible = windowHeight * 0.1;

        // make element visible if in view 
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }    
}

// function to hide element(s) with ".hide" class on scroll
const hide = () => {
    const hides = document.querySelectorAll(".hide");

    for (let i = 0; i < hides.length; i++) {
        // grab viewport height
        const windowHeight = window.innerHeight;

        // grab dist element is from top of viewport
        const elementTop = hides[i].getBoundingClientRect().top;

        // dist from bottom when to make element disappear on scroll (90% vh) 
        const elementHidden = windowHeight * 0.9;

        // make element disappear as it approaches top of viewframe 
        if (elementTop < windowHidden - elementHidden) {
            hides[i].classList.add("disappear");
        } else {
            hides[i].classList.remove("disappear");
        }
    }    
}

// connect event listeners to window scroll event 
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", hide);

// To check the scroll position on page load
reveal();
hide();