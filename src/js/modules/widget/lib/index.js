/* Importing: 
    - Cache
    - UI creation functions
    - Image hydration functions 
    - Default settings */

import { previousURLs } from './config';
import { createImage, createError, createControls, createButton } from './ui';
import { updateImage, refreshImage } from './resources';
import defaults from './defaults';

// Export default/initialization function to be called elsewhere
// Pass the class selector of the container that you want the widget to be built inside of
// Pass in options you want to be different from the default - animal type or interval time

export default (selector, options) => {
    
    // Grab the container element from the document body using the selector class

    let container = document.querySelector(selector);

    // Overwrites default settings with any passed in configurations to create the final settings

    const settings = {
        ...defaults, ...options
    };

    // Defines the URL the image will be fetched from - this will fill with whatever animal setting was passed in to the URL.
    // Default animal is Shibes

    const animalURL = `https://shibe.online/api/${settings.type}s?count=1&urls=true&httpsUrls=true`;
    
    // Define and create each of the document elements

    const image = createImage(container);
    const errorContainer = createError(container);
    const controls = createControls(container);
    const shibaButton = createButton(controls, 'shibe');
    const catButton = createButton(controls, 'cat');
    const birdButton = createButton(controls, 'bird');

    // Defines the interval timer to refresh images. This uses whichever timeframe was passed into the initialization function.
    // Default time is 5000  miliseconds.

    let currentTimer = setInterval(() => {updateImage(state);}, settings.interval);

    // Contains all variables created so far into one Single State Object for easier access later.
    
    const state = {
        container,
        image,
        errorContainer,
        controls,
        currentTimer,
        shibaButton,
        catButton,
        birdButton,
        animalURL,
        previousURLs,
        settings
    };

    // Runs the initial image update based on the animal that was passed in

    updateImage(state);

    // Adds a listener to the controls container - ignores any clicks that aren't on button elements
    // Get ID from target button clicked
    // Loop through buttons 


    controls.onclick = function(event) {
        let target = event.target;

        if (target.tagName !== 'BUTTON') return;

        const type = target.id;

        // const buttons = document.querySelectorAll('button');

        // for (let i = 0; i < buttons.length; i++) {
        state.animalURL = `https://shibe.online/api/${type}s?count=1&urls=true&httpsUrls=true`;
        refreshImage(state);
        state.currentTimer = setInterval(() => {updateImage(state);}, settings.interval);
        // }

        // listen on all buttons
        // for each button clicked's ID, restate animalURL,
        
    };

    // ----------------------------------------------------------

    //return to this later!! 

    // return nodes.map(node => ({
    //     settings: { ...defaults, ...node.dataset, ...options }
    // }));
};

// understand the code first
// refactor buttons/cut down repetition

// --------------------------------------------------

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