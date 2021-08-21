// *** Projects Section *** 

// Function to add an overlay and display link
// when user mouses over a project image. 

function addOverlay(event) {
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
document.getElementById('fortune').addEventListener("mouseenter", addOverlay);
document.getElementById('trivia').addEventListener("mouseenter", addOverlay);
document.getElementById('excursion').addEventListener("mouseenter", addOverlay);
document.getElementById('hat').addEventListener("mouseenter", addOverlay);


// Mouse leave portfolio image 
document.getElementById('fortune').addEventListener("mouseleave", addOverlay);
document.getElementById('trivia').addEventListener("mouseleave", addOverlay);
document.getElementById('excursion').addEventListener("mouseleave", addOverlay);
document.getElementById('hat').addEventListener("mouseleave", addOverlay);


