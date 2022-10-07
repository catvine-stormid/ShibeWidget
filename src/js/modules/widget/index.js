// split up update...() functions into smaller functions

import { container, shibaURL, catURL, birdURL, previousURLs } from './config';
import { createImage, createError, createControls, createButton } from './ui';
import { updateImage, refreshImage } from './resources';

function init() {
    
    let elements = {
        image: createImage(container),
        errorContainer: createError(container),
        controls: createControls(container),
        currentTimer: setInterval(() => {updateImage(elements.image, elements.errorContainer, shibaURL, previousURLs);}, 5000)
    };

    let buttons = {
        shibaButton: createButton(elements.controls, 'Shiba'),
        catButton: createButton(elements.controls, 'Cat'),
        birdButton: createButton(elements.controls, 'Bird'),
    };

    updateImage(elements.image, elements.errorContainer, shibaURL, previousURLs);

    elements.controls.onclick = function(event) {
        let target = event.target;

        if (target.tagName !== 'BUTTON') return;

        if (target.classList.contains('newShibaButton')) {
            refreshImage(elements.image, shibaURL, elements.errorContainer, previousURLs, elements.currentTimer);
            elements.currentTimer = setInterval(() => {updateImage(elements.image, elements.errorContainer, shibaURL, previousURLs);}, 5000);
        } else if (target.classList.contains('newCatButton')) {
            refreshImage(elements.image, catURL, elements.errorContainer, previousURLs, elements.currentTimer);
            elements.currentTimer = setInterval(() => {updateImage(elements.image, elements.errorContainer, catURL, previousURLs);}, 5000);
        } else if (target.classList.contains('newBirdButton')) {
            refreshImage(elements.image, birdURL, elements.errorContainer, previousURLs, elements.currentTimer);
            elements.currentTimer = setInterval(() => {updateImage(elements.image, elements.errorContainer, birdURL, previousURLs);}, 5000);
        }
        
    };
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