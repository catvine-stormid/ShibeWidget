// console.log('Widget!');
// async/await 

/* Find element to render image to and store in a variable */

const image = document.querySelector('.shibeImage');
const container = document.querySelector('.container');

/* Hit API */

const shibeImage = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';

async function retrieveShibe() {
    const response = await fetch(shibeImage);
    console.log(response);
    const shibe = await response.json();
    return shibe;
}

/* Try/Catch block with an error state (oops!) */

/* Read response from API and attach image to DOM */

try {
    retrieveShibe()
        .then(shibe => {
            console.log(shibe);
            image.setAttribute('src', shibe);
        });
} catch (error) {
    console.error(`Error -> ${error}`);
    const errorMessage = 'Oops! Couldn\'t find a shibe :(';
    const text = document.createElement('p');
    text.innerText = errorMessage;
    container.appendChild(text);
}

/* Features:

/* Set a timer and go back to hit API */

/* Ensure same image is not fetched more than once */

/* Button to retrigger/replace the image */

/* Transitions between images */

/* Select animal type */