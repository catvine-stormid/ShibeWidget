import { enableFetchMocks } from 'jest-fetch-mock';
import widget from '../lib';
import { retrieveImage, displayError, cacheImage, clearError, updateImage } from '../lib/resources';
import { errorMessage } from '../lib/constants';
import { createImage, createError, createControls, createButton } from '../lib/ui';

enableFetchMocks();

//add describe / it blocks (x)
// move error messages into constants - can be accessed in resources/tests (x)
//coverage (x)
//test initialization (x)


//test ui creation functions

describe('ui creation', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    it('creates an image container', () => {
        expect(createImage(container).nodeName).toEqual('IMG');
        expect(createImage(container).className).toEqual('image');
    });

    it('creates controls block', () => {
        expect(createControls(container).className).toEqual('controls');
    });

    it('creates a button', () => {
        expect(createButton(container, 'dog').nodeName).toEqual('BUTTON');
        expect(createButton(container, 'dog').id).toEqual('dog');
    });

    it('creates an error block', () => {
        expect(createError(container).className).toEqual('errorContainer');
    });
});
//test for retrieveimage

describe('image retrieval', () => {
    const MOCK_URL = 'https://cdn.shibe.online/shibes/84f3bfe44a684a30e38124cd2111a7f7652b0fc7.jpg';

    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(MOCK_URL),
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
        
    it('returns an image from url', async () => {
        expect.assertions(1);
        const image = await retrieveImage('shiba');
        expect(image).toBe('https://cdn.shibe.online/shibes/84f3bfe44a684a30e38124cd2111a7f7652b0fc7.jpg');
    });
});

//test for display + clear error messages

describe('errors', () => {
    it('returns an error', () => {
    // testing this function requires a document element to attach to
        const container = document.createElement('div');
        expect(displayError(container).textContent).toEqual(errorMessage);
    });
    it('clears error container', () => {
        const container = document.createElement('div');
        expect(clearError(container).textContent).toEqual(``);
    });
});

//test cache 
//--length of array for first item, second item from a different link, test adding duplicate (x)

describe('cache', () => {
    let cache = [];

    beforeEach(() => {
        cache = [];
    });

    it('stores a url', () => {
        const URL = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';
        expect(cacheImage(URL, cache)).toHaveLength(1);
    });

    it('stores a different url', () => {
        const URL = 'https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true';
        expect(cacheImage(URL, cache)).toHaveLength(1);
    });

    it(`doesn't add duplicates`, () => {
        cache = ['https://shibes.online'];
        const URL = 'https://shibes.online';
        expect(cacheImage(URL, cache)).toHaveLength(1);
    });
});

// !! test for update image !! - come back to this later!! too complicated 
    
describe('image update', () => {
    let cache = [];
    document.body.innerHTML =
            `<div class="container">
                <img class="image" />
                <div class="errorContainer" />
            </div>`;
    let image = document.querySelector('.image');
    let errorContainer = document.querySelector('.errorContainer');
    let animalURL = 'shibe';
    let firstMockURL = ['https://cdn.shibe.online/shibes/84f3bfe44a684a30e38124cd2111a7f7652b0fc7.jpg'];
    let secondMockURL = ['https://cdn.shibe.online/shibes/8eb09784a031fe2b85dffa9fcbde5ddd75f0059d.jpg'];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('updates an image', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(firstMockURL),
            })
        );
        const imageUpdate = await updateImage({ image, errorContainer, animalURL, cache });
        expect(imageUpdate.src).toBe(firstMockURL[0]);
        expect(image.src).toBe(firstMockURL[0]);
    });

    it('throws an error when no image found', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject({
                json: () => Promise.reject(firstMockURL),
            })
        );
        const imageUpdate = await updateImage({ image, errorContainer, animalURL, cache });
        expect(imageUpdate.className).toBe('errorContainer errorFound');
    });

    it('updates a new image when duplicate found', async () => {
        global.fetch = jest.fn()
            .mockImplementationOnce(() => Promise.resolve({
                json: () => Promise.resolve(firstMockURL),
            }))
            .mockImplementationOnce(() => Promise.resolve({
                json: () => Promise.resolve(secondMockURL),
            }));
    
        cache = [firstMockURL[0]];
        const imageUpdate = await updateImage({ image, errorContainer, animalURL, cache });
        expect(imageUpdate.src).toBe(secondMockURL[0]);
    });
});

// must be able to:
// - retrieve an image (mock URL + retrieveImage function) (x)
// - have access to a cache [] (x)
// - have a SECOND mock url to add to test duplicate prevention (x)
// - image container to add source to (x)
// - error container to display an error in (x)

//test for refresh image

// come back to this 

//test for widget initialization with specified settings

describe('widget init', () => {
    let deerInstance;

    beforeEach(() => {
        document.body.innerHTML = `<div class="container" />`;
        deerInstance = widget('.container', { type: 'deer', interval: 1500 });
    });

    it('takes setting inputs correctly', () => {
        expect(deerInstance.state.settings.type).toBe('deer');
        expect(deerInstance.state.settings.interval).toBe(1500);
        expect(deerInstance.state.animalURL).toBe('https://shibe.online/api/deers?count=1&urls=true&httpsUrls=true');
        
    });

    global.setInterval = jest.fn(() => console.log('interval called'), 1000);

    it('calls setInterval', () => {
        expect(global.setInterval).toHaveBeenCalled();
    });

    it('has an image container', () => {
        expect(deerInstance.state.image.nodeName).toBe('IMG');
    });

    it('has a controls container', () => {
        expect(deerInstance.state.controls.className).toBe('controls');
    });

    it('has buttons in the controls container', () => {
        expect(deerInstance.state.controls.childNodes.length).toBe(3);
    });

    it('has an error container', () => {
        expect(deerInstance.state.errorContainer.className).toMatch('errorContainer');
    });

    
});

