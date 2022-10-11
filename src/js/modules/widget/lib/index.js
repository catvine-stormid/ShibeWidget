import { previousURLs } from './config';
import { createImage, createError, createControls, createButton } from './ui';
import { updateImage, refreshImage } from './resources';
import defaults from './defaults';

export default (selector, options) => {
    
    let container = document.querySelector(selector);

    const settings = {
        ...defaults, ...options
    };

    const animalURL = `https://shibe.online/api/${settings.type}s?count=1&urls=true&httpsUrls=true`;
    const image = createImage(container);
    const errorContainer = createError(container);
    const controls = createControls(container);
    const shibaButton = createButton(controls, 'Shiba');
    const catButton = createButton(controls, 'Cat');
    const birdButton = createButton(controls, 'Bird');
    let currentTimer = setInterval(() => {updateImage(state);}, settings.interval);
    
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

    // state.currentTimer = currentTimer;
    // updateImage(state);

    controls.onclick = function(event) {
        let target = event.target;

        if (target.tagName !== 'BUTTON') return;

        if (target === shibaButton) {
            state.animalURL = `https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`;
            refreshImage(state);
            state.currentTimer = setInterval(() => {updateImage(state);}, settings.interval);
        } else if (target === catButton) {
            state.animalURL = `https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true`;
            refreshImage(state);
            state.currentTimer = setInterval(() => {updateImage(state);}, settings.interval);
        } else if (target === birdButton) {
            state.animalURL = `https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true`;
            refreshImage(state);
            state.currentTimer = setInterval(() => {updateImage(state);}, settings.interval);
        }
        
    };

    // ----------------------------------------------------------

    //return to this later!! 

    // return nodes.map(node => ({
    //     settings: { ...defaults, ...node.dataset, ...options }
    // }));
};

// understand the code first
// code comments 
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