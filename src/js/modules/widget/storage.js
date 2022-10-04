// const newCatButton = document.querySelector('.newCatButton');
// const newBirdButton = document.querySelector('.newBirdButton');

// const catImage = 'https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true';
// const birdImage = 'https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true';

// async function retrieveCat() {
//     const response = await fetch(catImage);
//     console.log(response);
//     const cat = await response.json();
//     return cat;
// }

// async function retrieveBird() {
//     const response = await fetch(birdImage);
//     console.log(response);
//     const bird = await response.json();
//     return bird;
// }


// function insertCatToPage() {
//     retrieveCat()
//         .then(cat => {
//             console.log(cat);
//             image.setAttribute('src', cat);
//         });
// }

// function insertBirdToPage() {
//     retrieveBird()
//         .then(bird => {
//             console.log(bird);
//             image.setAttribute('src', bird);
//         });
// }

// newCatButton.addEventListener('click', () => {
//     try {
//         insertCatToPage();
//     } catch (error) {
//         console.error(`Error -> ${error}`);
//         const errorMessage = 'Oops! Couldn\'t find a cat :(';
//         const text = document.createElement('p');
//         text.innerText = errorMessage;
//         container.appendChild(text);
//     }
// });

// newBirdButton.addEventListener('click', () => {
//     try {
//         insertBirdToPage();
//     } catch (error) {
//         console.error(`Error -> ${error}`);
//         const errorMessage = 'Oops! Couldn\'t find a cat :(';
//         const text = document.createElement('p');
//         text.innerText = errorMessage;
//         container.appendChild(text);
//     }
// });