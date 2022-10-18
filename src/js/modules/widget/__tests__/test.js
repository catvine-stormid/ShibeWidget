import { enableFetchMocks } from 'jest-fetch-mock';
import widget from '../lib';
import { retrieveImage, displayError, cacheImage, clearError } from '../lib/resources';
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
        expect(createImage(container).outerHTML).toMatch(/image/);
    });

    it('creates controls block', () => {
        expect(createControls(container).outerHTML).toMatch(/controls/);
    });

    it('creates a button', () => {
        expect(createButton(container, 'dog').outerHTML).toMatch(/button/);
        expect(createButton(container, 'dog').outerHTML).toMatch(/dog/);
    });

    it('creates an error block', () => {
        expect(createError(container).outerHTML).toMatch(/errorContainer/);
    });
});
//test for retrieveimage

//import jest-fetch-mock or alternate?
describe('image retrieval', () => {
    it('returns an image from url', async () => {
        expect.assertions(1);
        const image = await retrieveImage('https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');
        expect(image[0]).toMatch(/jpg/);
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
        expect(cacheImage(URL, cache).length).toBe(1);
    });

    it('stores a different url', () => {
        const URL = 'https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true';
        expect(cacheImage(URL, cache).length).toBe(1);
    });

    it(`doesn't add duplicates`, () => {
        cache = ['https://shibes.online'];
        const URL = 'https://shibes.online';
        expect(cacheImage(URL, cache).length).toBe(1);
    });
});

// test for update image

// come back to this later!! too complicated 

//test for refresh image

describe('widget init', () => {
    it('takes setting inputs correctly', () => {
        document.body.innerHTML = `<div class="container" />`;
        const deerInstance = widget('.container', { type: 'deer', interval: 1500 });
        expect(deerInstance.state.settings.type).toBe('deer');
        expect(deerInstance.state.settings.interval).toBe(1500);
        expect(deerInstance.state.animalURL).toBe('https://shibe.online/api/deers?count=1&urls=true&httpsUrls=true');
    });
});

