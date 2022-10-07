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

export function refreshImage(container, type, error, cache, timer) {
    clearError(error);
    updateImage(container, error, type, cache);
    clearInterval(timer);
}

// recursion/recursive calls
// unit tests