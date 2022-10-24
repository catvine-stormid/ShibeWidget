import { errorMessage, errorClass } from './constants';

export async function retrieveImage(imageType) {
    const response = await fetch(imageType);
    const retrievedImage = await response.json();
    return retrievedImage;
}

export function displayError(container) {
    container.textContent = errorMessage;
    container.classList.add(errorClass);
    return container;
}

export function clearError(container) {
    if (container.classList.contains(errorClass)) {
        container.textContent = '';
        container.classList.remove(errorClass);
    }
    return container;
}

export function cacheImage(url, cache) {
    if (!cache.includes(url)) {
        cache.push(url);
    }
    return cache;
}


export async function updateImage({ image, errorContainer, animalURL, cache }) {
    try {
        let updatedImage = await retrieveImage(animalURL);
        updatedImage = updatedImage[0];
        while (cache.includes(updatedImage)) {
            // eslint-disable-next-line no-alert
            alert('Duplicate image! Trying again for a new image');
            updatedImage = await retrieveImage(animalURL);
        }
        cacheImage(updatedImage, cache);
        image.setAttribute('src', updatedImage);
    } catch (err) {
        image.setAttribute('src', '');
        displayError(errorContainer);
        return errorContainer;
    }
    return image;
}
// recursion/recursive calls
// unit tests