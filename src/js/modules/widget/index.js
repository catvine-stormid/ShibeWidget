// console.log('Widget!');
// async/await 

/* Find element to render image to and store in a variable */

const image = document.querySelector('.animalImage');
const container = document.querySelector('.container');
const newShibeButton = document.querySelector('.newShibeButton');
const newCatButton = document.querySelector('.newCatButton');
const newBirdButton = document.querySelector('.newBirdButton');

/* Hit API */

const shibeImage = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';
const catImage = 'https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true';
const birdImage = 'https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true';


async function retrieveShibe() {
    const response = await fetch(shibeImage);
    console.log(response);
    const shibe = await response.json();
    return shibe;
}

async function retrieveCat() {
    const response = await fetch(catImage);
    console.log(response);
    const cat = await response.json();
    return cat;
}

async function retrieveBird() {
    const response = await fetch(birdImage);
    console.log(response);
    const bird = await response.json();
    return bird;
}

/* Try/Catch block with an error state */

/* Read response from API and attach image to DOM */

function insertShibeToPage() {
    retrieveShibe()
        .then(shibe => {
            console.log(shibe);
            image.setAttribute('src', shibe);
        });
}

function insertCatToPage() {
    retrieveCat()
        .then(cat => {
            console.log(cat);
            image.setAttribute('src', cat);
        });
}

function insertBirdToPage() {
    retrieveBird()
        .then(bird => {
            console.log(bird);
            image.setAttribute('src', bird);
        });
}

try {
    insertShibeToPage();
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

newShibeButton.addEventListener('click', () => {
    try {
        insertShibeToPage();
    } catch (error) {
        console.error(`Error -> ${error}`);
        const errorMessage = 'Oops! Couldn\'t find a shibe :(';
        const text = document.createElement('p');
        text.innerText = errorMessage;
        container.appendChild(text);
    }
});

newCatButton.addEventListener('click', () => {
    try {
        insertCatToPage();
    } catch (error) {
        console.error(`Error -> ${error}`);
        const errorMessage = 'Oops! Couldn\'t find a cat :(';
        const text = document.createElement('p');
        text.innerText = errorMessage;
        container.appendChild(text);
    }
});

newBirdButton.addEventListener('click', () => {
    try {
        insertBirdToPage();
    } catch (error) {
        console.error(`Error -> ${error}`);
        const errorMessage = 'Oops! Couldn\'t find a cat :(';
        const text = document.createElement('p');
        text.innerText = errorMessage;
        container.appendChild(text);
    }
});

/* Transitions between images */

/* Select animal type */