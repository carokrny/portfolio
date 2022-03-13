// *** Header Section *** 

// Function to toggle between hamburger and nav list 
const hamburgerToggle = event => {
    const links = document.getElementById("links");
    const header = document.getElementById("header-nav");
    if (links.style.display === "block") {
        links.style.display = "none";
        header.style.height = "2.9rem";
    } else {
        links.style.display = "block";
        header.style.height = "auto";
    }
}

// function to close nav list
const navListClose = event => {
    document.getElementById("links").style.display = "none";
    document.getElementById("header-nav").style.height = "2.9rem";
}

// add event listeners 
document.getElementById("hamburger").addEventListener("click", hamburgerToggle);
document.getElementById("header-nav").addEventListener("mouseleave", navListClose);