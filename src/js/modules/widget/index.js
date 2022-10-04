/* Find element to render image to and store in a variable */

// const image = document.querySelector('.animalImage');
const container = document.querySelector('.container');

// /* Hit API */

const shibeImage = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';

async function retrieveShibe() {
    const response = await fetch(shibeImage);
    console.log(response);
    const shibe = await response.json();
    return shibe;
}

function importImage(image) {
    container.innerHTML = `<img src='${image}' />`;
}

// const shibeButton = `<button class="button newShibeButton">New Shibe!</button>`;

function createButton() {
    const newButton = document.createElement('button');
    newButton.innerHTML = 'New Shibe!';
    newButton.classList.add('button');
    newButton.classList.add('newShibeButton');
    container.appendChild(newButton);
};

// /* Try/Catch block with an error state */

// /* Read response from API and attach image to DOM */

async function insertShibeToPage() {
    try {
        const shibaImage = await retrieveShibe();
        importImage(shibaImage);
        createButton();
    } catch (err) {
        const errorMessage = `<p>Oops! Couldn't find a shibe :( </p>`;
        container.innerHTML = errorMessage;
    }
}

// /* Features:

// /* Set a timer and go back to hit API */

// /* Ensure same image is not fetched more than once */

// /* Button to retrigger/replace the image */

const newShibeButton = document.querySelector('.newShibeButton');

console.log(newShibeButton);

// newShibeButton.addEventListener('click', () => {
//     insertShibeToPage();
// });

// /* Transitions between images */

// /* Select animal type */

insertShibeToPage();
