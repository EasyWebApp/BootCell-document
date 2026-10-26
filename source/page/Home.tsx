import { FC } from 'web-cell';
import { PageProps } from 'cell-router';
import {
    Jumbotron,
    Button,
    TooltipBox,
    DropdownButton,
    DropdownItem,
    Container
} from 'boot-cell';
import { CommandLine } from 'github-web-widget';

import { scaffolds } from './data';
import routes from '../document';

export const HomePage: FC<PageProps> = ({ className = '', ...props }) => (
    <main className={`w-100 ${className}`} {...props}>
        <Container className="lg:d-flex flex-row-reverse align-items-center text-center md:text-start">
            <img
                className="pt-12 lg:p-12"
                style={{ width: '50vw' }}
                src="https://web-cell.dev/WebCell-0.a6336415.png"
            />
            <Jumbotron
                className=""
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
                        WebCell v3
                    </a>
                    ,{' '}
                    <a target="_blank" href="https://getbootstrap.com/">
                        Bootstrap v6
                    </a>{' '}
                    &amp;{' '}
                    <a target="_blank" href="https://fontawesome.com/">
                        FontAwesome v7
                    </a>
                </p>
                <Button
                    className="me-0 sm:me-5 mb-5 sm:mb-0"
                    variant="solid"
                    theme="success"
                    size="lg"
                    href={`#${routes[0].path}`}
                >
                    Read Documents
                </Button>
                <TooltipBox content="GitHub login first">
                    <DropdownButton
                        variant="solid"
                        theme="primary"
                        size="lg"
                        caption="Create a Project"
                    >
                        {scaffolds.map(({ title, ...rest }) => (
                            <DropdownItem {...rest}>{title}</DropdownItem>
                        ))}
                    </DropdownButton>
                </TooltipBox>
            </Jumbotron>
        </Container>

        <CommandLine
            className="d-block mx-auto mb-12 p-5 bg-inverse fg-white"
            style={{ maxWidth: '27rem' }}
            text="npm install boot-cell"
        />
    </main>
);
