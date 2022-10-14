import widget from './lib/index';

// Initialization function for the widget 
// Runs if specified class is found on a container
// Takes in optional settings as a parameter
if (document.querySelector('.js-widget')) {
    console.log(widget('.js-widget', { type: 'shibe', interval: 5000 }));
}