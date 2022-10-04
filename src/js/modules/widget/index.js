/* Find element to render image to and store in a variable */

const container = document.querySelector('.container');

// /* Hit API */

const shibaImage = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';
const catImage = 'https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true';
const birdImage = 'https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true';


function createImage() {
    const image = document.createElement('img');
    container.appendChild(image);
    return image;
}

function createButton(animal) {
    const newButton = document.createElement('button');
    newButton.innerHTML = `New ${animal}!`;
    newButton.classList.add('button');
    newButton.classList.add(`new${animal}Button`);
    container.appendChild(newButton);
    return newButton;
}

function init() {
    const image = createImage();
    const shibaButton = createButton('Shiba');
    const catButton = createButton('Cat');
    const birdButton = createButton('Bird');

    insertShibaToPage();

    shibaButton.addEventListener('click', () => {
        insertShibaToPage();
    });
    
    catButton.addEventListener('click', () => {
        insertCatToPage();
    });
    
    birdButton.addEventListener('click', () => {
        insertBirdToPage();
    });
}

async function retrieveShiba() {
    const response = await fetch(shibaImage);
    const shiba = await response.json();
    return shiba;
}

async function retrieveCat() {
    const response = await fetch(catImage);
    const cat = await response.json();
    return cat;
}

async function retrieveBird() {
    const response = await fetch(birdImage);
    const bird = await response.json();
    return bird;
}
// /* Try/Catch block with an error state */

// /* Read response from API and attach image to DOM */

async function insertShibaToPage() {
    try {
        const shibaImage = await retrieveShiba();
        const imageContainer = document.querySelector('img');
        imageContainer.setAttribute('src', shibaImage);
    } catch (err) {
        const errorMessage = `<p>Oops! Couldn't find a shiba :( </p>`;
        container.insertAdjacentHTML('afterbegin', errorMessage);
    }
}

async function insertCatToPage() {
    try {
        const catImage = await retrieveCat();
        const imageContainer = document.querySelector('img');
        imageContainer.setAttribute('src', catImage);
    } catch (err) {
        const errorMessage = `<p>Oops! Couldn't find a cat :( </p>`;
        container.insertAdjacentHTML('afterbegin', errorMessage);
    }
}

async function insertBirdToPage() {
    try {
        const birdImage = await retrieveBird();
        const imageContainer = document.querySelector('img');
        imageContainer.setAttribute('src', birdImage);
    } catch (err) {
        const errorMessage = `<p>Oops! Couldn't find a bird :( </p>`;
        container.insertAdjacentHTML('afterbegin', errorMessage);
    }
}

// /* Features:

// /* Set a timer and go back to hit API */

// /* Ensure same image is not fetched more than once */

// /* Button to retrigger/replace the image */

// /* Transitions between images */

// /* Select animal type */

init();