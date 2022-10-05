export function createImage(container) {
    const image = document.createElement('img');
    container.appendChild(image);
    return image;
}

export function createError(container) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('errorContainer');
    errorContainer.setAttribute('role', 'alert');
    container.appendChild(errorContainer);
    return errorContainer;
}

export function createControls(container) {
    const controls = document.createElement('div');
    controls.classList.add('controls');
    container.appendChild(controls);
    return controls;
}

export function createButton(container, type) {
    const newButton = document.createElement('button');
    newButton.textContent = `New ${type}!`;
    newButton.classList.add('button');
    newButton.classList.add(`new${type}Button`);
    container.appendChild(newButton);
    return newButton;
}