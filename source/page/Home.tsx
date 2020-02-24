import { createCell } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';

import routes from '../../document/dist';

export function HomePage() {
    return (
        <Jumbotron
            title="BootCell"
            description="Build responsive, mobile-first projects on the web with the world’s most popular front-end component library."
        >
            <p>
                BootCell is a{' '}
                <a target="_blank" href="https://www.webcomponents.org/">
                    Web Components
                </a>{' '}
                UI library based on{' '}
                <a target="_blank" href="https://web-cell.dev/">
                    WebCell v2
                </a>
                ,{' '}
                <a target="_blank" href="https://getbootstrap.com/">
                    BootStrap v4
                </a>{' '}
                &amp;{' '}
                <a target="_blank" href="https://fontawesome.com/">
                    FontAwesome v5
                </a>
            </p>
            <Button outline size="lg" href={routes[0].paths[0]}>
                Get started
            </Button>
        </Jumbotron>
    );
}
