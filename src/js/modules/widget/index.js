/* Find element to render image to and store in a variable */

// const image = document.querySelector('.animalImage');
const container = document.querySelector('.container');

// /* Hit API */

const shibaImage = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';

function createImage() {
    const image = document.createElement('img');
    container.appendChild(image);
}

function createShibaButton() {
    const newButton = document.createElement('button');
    newButton.innerHTML = 'New Shiba!';
    newButton.classList.add('button');
    newButton.classList.add('newShibaButton');
    container.appendChild(newButton);
};

function init() {
    createImage();
    createShibaButton();
}

async function retrieveShiba() {
    const response = await fetch(shibaImage);
    const shiba = await response.json();
    return shiba;
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

// /* Features:

// /* Set a timer and go back to hit API */

// /* Ensure same image is not fetched more than once */

// /* Button to retrigger/replace the image */

// /* Transitions between images */

// /* Select animal type */


init();

insertShibaToPage();

const shibaButton = document.querySelector('.newShibaButton');

shibaButton.addEventListener('click', () => {
    insertShibaToPage();
});