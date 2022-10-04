import { h } from 'preact';
import DefaultLayout from '@layouts/default';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>
    <div class="container js-widget">
        <img src="" class="shibeImage" />
        <button class="newShibeButton">New Shibe!</button>
    </div>
</DefaultLayout>;

export default HomePage;