import { FC } from 'web-cell';
import { createRouter } from 'cell-router';

import { PageFrame } from '../component/PageBox';
import { main_menu } from './data';
import { HomePage } from './Home';
import documents from '../document';
import { HomePage as ExampleHome } from './Example/Home';

const { Route } = createRouter();

export const PageRouter: FC = () => (
    <PageFrame menu={main_menu}>
        <Route path="" component={HomePage} />
        {documents.map(props => (
            <Route {...props} />
        ))}
        <Route path="example" component={ExampleHome} />
    </PageFrame>
);
