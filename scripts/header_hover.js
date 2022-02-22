/**
 * Javascript animations for header
 * 
 */

const white = 'rgb(255, 255, 254)';
const navy = 'rgb(0, 34, 107)';

/**
 * Channge color of elements in header
 */
function colorHeader(backgroundColor, textColor) {
    // color header  
    document.getElementsByTagName('header')[0].style.background = backgroundColor;
    document.getElementsByTagName('header')[0].style.color = textColor;

    // need to update nav-link class so links have same color as text
    const navLinks = document.getElementsByClassName('nav-link');
    for (const link of navLinks) {
        link.style.color = textColor;
    }
}

/**
 * Toggle color of header elements when mouse enters/leaves the header
 */
function toggleColor(event) {
    if (event.type === 'mouseenter') {
        // make background navy and text white when moused over
        colorHeader(navy, white);
    } else if (event.type === 'mouseleave') {
        // return background to white and text to navy when mouse exits
        colorHeader(white, navy);
    } else {
        // return background to white and text to navy if error
        console.log('error');
        colorHeader(white, navy);
    }
}

// Create event listeners 
document.getElementsByTagName('header')[0].addEventListener('mouseenter', toggleColor);
document.getElementsByTagName('header')[0].addEventListener('mouseleave', toggleColor);