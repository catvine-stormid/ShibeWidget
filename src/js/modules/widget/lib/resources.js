import { errorMessage, errorClass } from "./constants";

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
    container.textContent = "";
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
      alert("Duplicate image! Trying again for a new image");
      updatedImage = await retrieveImage(animalURL);
    }
    cacheImage(updatedImage, cache);
    image.setAttribute("src", updatedImage);
  } catch (err) {
    image.setAttribute("src", "");
    displayError(errorContainer);
    return errorContainer;
  }
  return image;
}

//move handler into seperate function

export async function changeURLOnClick(
  event,
  { animalURL, errorContainer, currentTimer, image, cache, currentInterval }
) {
  if (event.target.matches("button")) {
    // Get ID from target button clicked to get animal type

    const type = event.target.id;

    // Redefine animalURL - fills in URL with chosen animal from button ID
    // Grab a new image based on the updated URL and reset current timer

    animalURL = `https://shibe.online/api/${type}s?count=1&urls=true&httpsUrls=true`;
    clearError(errorContainer);
    await updateImage({ image, errorContainer, animalURL, cache });
    clearInterval(currentTimer);
    currentTimer = setInterval(() => {
      updateImage({ image, errorContainer, animalURL, cache });
    }, currentInterval);
    return animalURL;
  }
}

// export function refreshImage({ image, animalURL, errorContainer, cache, currentTimer }) {
//     clearError(errorContainer);
//     updateImage({ image, errorContainer, animalURL, cache });
//     clearInterval(currentTimer);
// }

// recursion/recursive calls
// unit tests
