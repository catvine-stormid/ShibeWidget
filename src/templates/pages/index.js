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
    </div>
</DefaultLayout>;

export default HomePage;