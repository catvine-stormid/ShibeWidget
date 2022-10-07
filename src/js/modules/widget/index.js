// split up update...() functions into smaller functions

import { container, shibaURL, catURL, birdURL, previousURLs } from './config';
import { createImage, createError, createControls, createButton } from './ui';
import { updateImage, refreshImage } from './resources';

function init() {
    const image = createImage(container);
    const errorContainer = createError(container);
    const controls = createControls(container);
    const shibaButton = createButton(controls, 'Shiba');
    const catButton = createButton(controls, 'Cat');
    const birdButton = createButton(controls, 'Bird');
    let currentTimer = setInterval(() => {updateImage(image, errorContainer, shibaURL, previousURLs);}, 5000);

    updateImage(image, errorContainer, shibaURL, previousURLs);

    controls.onclick = function(event) {
        let target = event.target;

        if (target.tagName !== 'BUTTON') return;

        if (target.classList.contains('newShibaButton')) {
            refreshImage(image, shibaURL, errorContainer, previousURLs, currentTimer);
        } else if (target.classList.contains('newCatButton')) {
            refreshImage(image, catURL, errorContainer, previousURLs, currentTimer);
        } else if (target.classList.contains('newBirdButton')) {
            refreshImage(image, birdURL, errorContainer, previousURLs, currentTimer);
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