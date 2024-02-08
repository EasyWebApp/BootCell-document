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
    <main className={`vw-100 ${className}`} {...props}>
        <Container className="d-lg-flex flex-row-reverse align-items-center text-center text-md-start">
            <img
                className="pt-5 p-lg-5"
                style={{ width: '50vw' }}
                src="https://web-cell.dev/WebCell-0.f9823b00.png"
            />
            <Jumbotron
                className="bg-white"
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
                        BootStrap v5
                    </a>{' '}
                    &amp;{' '}
                    <a target="_blank" href="https://fontawesome.com/">
                        FontAwesome v6
                    </a>
                </p>
                <Button
                    className="me-0 me-sm-3 mb-3 mb-sm-0"
                    variant="success"
                    size="lg"
                    href={`#${routes[0].path}`}
                >
                    Read Documents
                </Button>
                <TooltipBox content="GitHub login first">
                    <DropdownButton
                        variant="primary"
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
            className="d-block mx-auto mb-5"
            style={{ maxWidth: '27rem' }}
            text="npm install boot-cell"
        />
    </main>
);
