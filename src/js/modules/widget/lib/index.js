/* Importing: 
    - Cache
    - UI creation functions
    - Image hydration functions 
    - Default settings */

import { cache } from './config';
import { createImage, createError, createControls, createButton } from './ui';
import { updateImage, clearError } from './resources';
import defaults from './defaults';

export const changeURL = state => event => {

    let target = event.target;
    
    if (target.tagName !== 'BUTTON') return;
    
    // Get ID from target button clicked to get animal type
    
    const type = target.id;
    
    // Redefine animalURL - fills in URL with chosen animal from button ID
    // Grab a new image based on the updated URL and reset current timer
    
    state.animalURL = `https://shibe.online/api/${type}s?count=1&urls=true&httpsUrls=true`;
    clearError(state.errorContainer);
    updateImage(state);
    clearInterval(state.currentTimer);
    state.currentTimer = setInterval(() => { updateImage(state); }, state.currentInterval);
};

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
    // Default time is 5000 miliseconds.

    let currentInterval = settings.interval;
    let currentTimer;

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
        cache,
        settings,
        currentInterval,
    };

    // Runs the initial image update based on the animal that was passed in

    state.currentTimer = setInterval(() => {updateImage(state);}, currentInterval);
    updateImage(state);

    // Adds a listener to the controls container - ignores any clicks that aren't on button elements

    state.controls.addEventListener('click', handler(state));

    return { state };
};

// --------------------------------------------------

// Steps: 

// Find element to render image to and store in a variable 

// Hit API 

// Try/Catch block with an error state 

// Read response from API and attach image to DOM 

// ---------------------------------------------------

// Features:

// Transitions between images 

// Refactor UI Functions to JSX
