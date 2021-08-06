// *** Projects Section *** 

// Function to add an overlay and display link
// when user mouses over a project image. 

function addOverlay(event) {
    var element = event.target
    const element_id = element.id; 
    const link_id = `${element_id}-link`;
    //change the display of the link symbol and add overlay
    if (event.type === 'mouseover') {
        document.getElementById(link_id).style.display = "block";
        element.style.opacity = "0.4";
    } else if (event.type === 'mouseleave') {
        document.getElementById(link_id).style.display = "none";
        element.style.opacity = "1";
    } else {
        console.log('error');
        document.getElementById(link_id).style.display = "none";
        element.style.opacity = "1";
    }
}


// Create event listeners 

// Mouse over 
document.getElementById('fortune').addEventListener("mouseover", addOverlay);
document.getElementById('trivia').addEventListener("mouseover", addOverlay);
document.getElementById('excursion').addEventListener("mouseover", addOverlay);
document.getElementById('cheatsheet').addEventListener("mouseover", addOverlay);

// Mouse leave
document.getElementById('fortune').addEventListener("mouseleave", addOverlay);
document.getElementById('trivia').addEventListener("mouseleave", addOverlay);
document.getElementById('excursion').addEventListener("mouseleave", addOverlay);
document.getElementById('cheatsheet').addEventListener("mouseleave", addOverlay);


