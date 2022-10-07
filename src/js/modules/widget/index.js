// split up update...() functions into smaller functions

import { container, shibaURL, catURL, birdURL, previousURLs } from './config';
import { createImage, createError, createControls, createButton } from './ui';
import { updateImage, clearError, addClass } from './resources';

function init() {
    const image = createImage(container);
    const errorContainer = createError(container);
    const controls = createControls(container);
    const shibaButton = createButton(controls, 'Shiba');
    const catButton = createButton(controls, 'Cat');
    const birdButton = createButton(controls, 'Bird');
    let currentTimer = setInterval(() => {updateImage(image, errorContainer, shibaURL, previousURLs);}, 5000);

    updateImage(image, errorContainer, shibaURL, previousURLs);

    shibaButton.addEventListener('click', () => {
        clearError(errorContainer);
        updateImage(image, errorContainer, shibaURL, previousURLs);
        clearInterval(currentTimer);
        currentTimer = setInterval(() => {updateImage(image, errorContainer, shibaURL, previousURLs);}, 5000);
    });
    
    catButton.addEventListener('click', () => {
        clearError(errorContainer);
        updateImage(image, errorContainer, catURL, previousURLs);
        clearInterval(currentTimer);
        currentTimer = setInterval(() => {updateImage(image, errorContainer, catURL, previousURLs);}, 5000);
    });
    
    birdButton.addEventListener('click', () => {
        clearError(errorContainer);
        updateImage(image, errorContainer, birdURL, previousURLs);
        clearInterval(currentTimer);
        currentTimer = setInterval(() => {updateImage(image, errorContainer, birdURL, previousURLs);}, 5000);
    });
}

init();

// Steps: 

/* Find element to render image to and store in a variable 

Hit API 

Try/Catch block with an error state 

Read response from API and attach image to DOM 

Features:

Event Delegation

Transitions between images 

Refactor UI Functions to JSX

*/