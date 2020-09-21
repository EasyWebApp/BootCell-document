import { createCell, Fragment } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';
import { CommandLine } from 'github-web-widget/source/CommandLine';

import routes from '../../document/dist';

export interface HomePageProps {
    entry: typeof routes[0];
}

export function HomePage({
    entry: {
        meta: { title },
        paths: [path]
    }
}: HomePageProps) {
    return (
        <>
            <div className="container d-md-flex flex-row-reverse align-items-center text-center text-md-left">
                <img
                    className="pt-5 p-md-5"
                    style={{ width: '50vw' }}
                    src="https://web-cell.dev/WebCell-0.f1ffd28b.png"
                />
                <Jumbotron
                    className="bg-white"
                    title="BootCell"
                    description="Build responsive, mobile-first projects on the web with the world’s most popular front-end component library."
                >
                    <p>
                        BootCell is a{' '}
                        <a
                            target="_blank"
                            href="https://www.webcomponents.org/"
                        >
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
                    <Button outline size="lg" title={title} href={path}>
                        Get started
                    </Button>
                </Jumbotron>
            </div>

            <CommandLine
                className="d-block mx-auto mb-5"
                style={{ maxWidth: '27rem' }}
            >
                npm install boot-cell
            </CommandLine>
        </>
    );
}
