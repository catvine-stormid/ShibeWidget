export async function retrieveImage(imageType) {
    const response = await fetch(imageType);
    const retrievedImage = await response.json();
    return retrievedImage;
}

export function displayError(container) {
    const errorMessage = `Oops! Couldn't find an image :(`;
    container.innerText = errorMessage;
    container.classList.add('errorFound');
    return errorMessage;
}

export function clearError(container) {
    if (container.classList.contains('errorFound')) {
        container.textContent = '';
        container.classList.remove('errorFound');
    }
}

export function cacheImage(url, cache) {
    if (!cache.includes(url)) {
        cache.push(url);
    }
    return cache;
}


export async function updateImage({ image, errorContainer, animalURL, previousURLs }) {
    try {
        let updatedImage = await retrieveImage(animalURL);
        while (previousURLs.includes(updatedImage[0])) {
            // eslint-disable-next-line no-alert
            alert('Duplicate image! Trying again for a new image');
            updatedImage = await retrieveImage(animalURL);
        }
        cacheImage(updatedImage[0], previousURLs);
        image.setAttribute('src', updatedImage);
    } catch (err) {
        image.setAttribute('src', '');
        displayError(errorContainer);
    }
}

export function refreshImage({ image, animalURL, errorContainer, previousURLs, currentTimer }) {
    clearError(errorContainer);
    updateImage({ image, errorContainer, animalURL, previousURLs });
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