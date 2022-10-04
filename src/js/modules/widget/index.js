/* Find element to render image to and store in a variable */

const image = document.querySelector('.animalImage');
const container = document.querySelector('.container');
const newShibeButton = document.querySelector('.newShibeButton');

/* Hit API */

const shibeImage = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';

async function retrieveShibe() {
    try {
        const response = await fetch(shibeImage);
        console.log(response);
        const shibe = await response.json();
        return shibe;
    } catch {
        const errorMessage = `<p>Oops! Couldn\'t find a shibe :( </p>`;
        container.innerHTML = errorMessage;
    }
}

/* Try/Catch block with an error state */

/* Read response from API and attach image to DOM */

async function insertShibeToPage() {
    const shibaImage = await retrieveShibe();
    image.setAttribute('src', shibaImage);
}

/* Features:

/* Set a timer and go back to hit API */

/* Ensure same image is not fetched more than once */

/* Button to retrigger/replace the image */

newShibeButton.addEventListener('click', () => {
    insertShibeToPage();
});

/* Transitions between images */

/* Select animal type */

insertShibeToPage();
