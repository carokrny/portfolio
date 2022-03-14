// *** Projects Section *** 

// Function to add an overlay and display link
// when user mouses over a project image. 

function toggleOverlay(event) {
    //extract which element (which .img-grid container) the event occured within 
    const element_id = event.target.id; 

    //get names of children elements to modify (the link icon and background image)
    const link_id = `${element_id}-link`;
    const img_id = `${element_id}-img`;

    //toggle the display of the link symbol and add overlay
    if (event.type === 'mouseenter') {
        document.getElementById(link_id).style.display = "block";
        document.getElementById(img_id).style.opacity = "0.4";
    } else if (event.type === 'mouseleave') {
        document.getElementById(link_id).style.display = "none";
        document.getElementById(img_id).style.opacity = "1";
    } else {
        console.log('error');
        document.getElementById(link_id).style.display = "none";
        element.style.opacity = "1";
    }
}


// Create event listeners 

// Mouse over portfolio image
document.getElementById('fortune').addEventListener("mouseenter", toggleOverlay);
document.getElementById('reddit').addEventListener("mouseenter", toggleOverlay);
document.getElementById('trivia').addEventListener("mouseenter", toggleOverlay);
document.getElementById('jammming').addEventListener("mouseenter", toggleOverlay);
document.getElementById('flashcards').addEventListener("mouseenter", toggleOverlay);
document.getElementById('hat').addEventListener("mouseenter", toggleOverlay);


// Mouse leave portfolio image 
document.getElementById('fortune').addEventListener("mouseleave", toggleOverlay);
document.getElementById('reddit').addEventListener("mouseleave", toggleOverlay);
document.getElementById('trivia').addEventListener("mouseleave", toggleOverlay);
document.getElementById('jammming').addEventListener("mouseleave", toggleOverlay);
document.getElementById('flashcards').addEventListener("mouseleave", toggleOverlay);
document.getElementById('hat').addEventListener("mouseleave", toggleOverlay);


