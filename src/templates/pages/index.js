import { h } from 'preact';
import DefaultLayout from '@layouts/default';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>
    <div class="container js-widget">
        <img src="" class="animalImage" />
        <div class="buttons">
            <button class="button newShibeButton">New Shibe!</button>
            <button class="button newCatButton">New Cat!</button>
            <button class="button newBirdButton">New Bird!</button>
        </div>
    </div>
    
</DefaultLayout>;

export default HomePage;