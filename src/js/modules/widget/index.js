// split up update...() functions into smaller functions

import { container, shibaURL, catURL, birdURL } from './config';
import { createImage, createError, createControls, createButton } from './ui';
import { updateImage, clearError } from './resources';

function init() {
    const image = createImage(container);
    const errorContainer = createError(container);
    const controls = createControls(container);
    const shibaButton = createButton(controls, 'Shiba');
    const catButton = createButton(controls, 'Cat');
    const birdButton = createButton(controls, 'Bird');
    
    updateImage(image, errorContainer, shibaURL);

    shibaButton.addEventListener('click', () => {
        clearError(errorContainer);
        updateImage(image, errorContainer, shibaURL);
    });
    
    catButton.addEventListener('click', () => {
        clearError(errorContainer);
        updateImage(image, errorContainer, catURL);
    });
    
    birdButton.addEventListener('click', () => {
        clearError(errorContainer);
        updateImage(image, errorContainer, birdURL);
    });
}

init();

// Steps: 

/* Find element to render image to and store in a variable 

Hit API 

Try/Catch block with an error state 

Read response from API and attach image to DOM 

Features:

Set a timer and go back to hit API 

Ensure same image is not fetched more than once 

Transitions between images 

Refactor UI Functions to JSX

*/