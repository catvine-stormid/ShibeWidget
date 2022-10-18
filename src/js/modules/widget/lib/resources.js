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
        while (cache.includes(updatedImage[0])) {
            // eslint-disable-next-line no-alert
            alert('Duplicate image! Trying again for a new image');
            updatedImage = await retrieveImage(animalURL);
        }
        cacheImage(updatedImage[0], cache);
        image.setAttribute('src', updatedImage);
    } catch (err) {
        image.setAttribute('src', '');
        displayError(errorContainer);
    }
}

export function refreshImage({ image, animalURL, errorContainer, cache, currentTimer }) {
    clearError(errorContainer);
    updateImage({ image, errorContainer, animalURL, cache });
    clearInterval(currentTimer);
}

// export const getSelection = selector => {

//     if (typeof selector === 'string') return [].slice.call(document.querySelectorAll(selector));
//     if (selector instanceof Array) return selector;
//     if (Object.prototype.isPrototypeOf.call(NodeList.prototype, selector)) return [].slice.call(selector);
//     if (selector instanceof HTMLElement) return [selector];
//     return [];
// };

// recursion/recursive calls
// unit tests