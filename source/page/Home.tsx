import { createCell, Fragment } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';
import { TooltipBox } from 'boot-cell/source/Prompt/Tooltip';
import { DropMenu, DropMenuItem } from 'boot-cell/source/Navigator';
import { CommandLine } from 'github-web-widget/source/CommandLine';

import { scaffolds } from './data';
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
                    <Button
                        className="mr-0 mr-sm-3 mb-3 mb-sm-0"
                        color="success"
                        size="lg"
                        title={title}
                        href={path}
                    >
                        Read Documents
                    </Button>
                    <TooltipBox text="GitHub login first">
                        <DropMenu
                            buttonColor="primary"
                            buttonSize="lg"
                            caption="Create a Project"
                        >
                            {scaffolds.map(({ title, ...rest }) => (
                                <DropMenuItem {...rest}>{title}</DropMenuItem>
                            ))}
                        </DropMenu>
                    </TooltipBox>
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
