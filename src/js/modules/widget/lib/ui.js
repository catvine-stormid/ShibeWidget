export function createImage(container) {
    const image = document.createElement('img');
    image.classList.add('image');
    container.appendChild(image);
    return container;
}

export function createError(container) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('errorContainer');
    errorContainer.setAttribute('role', 'alert');
    container.appendChild(errorContainer);
    return container;
}

export function createControls(container) {
    const controls = document.createElement('div');
    controls.classList.add('controls');
    container.appendChild(controls);
    return container;
}

export function createButton(container, type) {
    const newButton = document.createElement('button');
    newButton.textContent = `New ${type}!`;
    newButton.classList.add('button');
    newButton.setAttribute(`id`, `${type}`);
    container.appendChild(newButton);
    return container;
}