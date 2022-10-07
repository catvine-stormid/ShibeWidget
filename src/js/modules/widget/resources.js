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

export async function updateImage(container, error, type, cache) {
    try {
        let updatedImage = await retrieveImage(type);
        while (cache.includes(updatedImage[0])) {
            // eslint-disable-next-line no-alert
            alert('Duplicate image! Trying again for a new image');
            updatedImage = await retrieveImage(type);
        }
        cacheImage(updatedImage[0], cache);
        container.setAttribute('src', updatedImage);
    } catch (err) {
        container.setAttribute('src', '');
        displayError(error);
    }
}

export function addClass(container, type, type1, type2, type3) {
    container.removeAttribute('class');
    if (type === type1) {
        container.classList.add('shiba');
    } else if (type === type2) {
        container.classList.add('cat');
    } else if (type === type3) {
        container.classList.add('bird');
    }
}

// recursion/recursive calls
// unit tests