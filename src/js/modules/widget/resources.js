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

export async function updateImage(container, error, type) {
    try {
        const updatedImage = await retrieveImage(type);
        container.setAttribute('src', updatedImage);
    } catch (err) {
        container.setAttribute('src', '');
        displayError(error);
    }
}
