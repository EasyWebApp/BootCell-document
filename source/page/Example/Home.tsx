import { FC } from 'web-cell';
import {
    Jumbotron,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    Container
} from 'boot-cell';
import { PageProps } from 'cell-router';

import data from './index.json';

export const HomePage: FC<PageProps> = ({ className = '', ...props }) => (
    <main className={`vw-100 ${className}`} {...props}>
        <Jumbotron
            fluid
            title="Example"
            description="Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts."
        >
            <Button
                variant="outline-primary"
                size="lg"
                target="_blank"
                href="https://github.com/EasyWebApp/BootCell-document/tree/main/source/page/Example"
            >
                Source Code
            </Button>
        </Jumbotron>

        <Container>{data.map(Section)}</Container>
    </main>
);

const Section = ({ title, description, list }: (typeof data)[0]) => (
    <section>
        <h2>{title}</h2>
        <p className="lead">{description}</p>

        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {list.map(({ href, image, title, description }) => {
                href ||= `example/${title.replace(' ', '-').toLowerCase()}`;

                return (
                    <li key={title}>
                        <Card>
                            <CardImg src={image} />
                            <CardBody>
                                <CardTitle>
                                    <a
                                        className="stretched-link"
                                        href={
                                            href.startsWith('http')
                                                ? href
                                                : `#${href}`
                                        }
                                    >
                                        {title}
                                    </a>
                                </CardTitle>

                                {description}
                            </CardBody>
                        </Card>
                    </li>
                );
            })}
        </ul>
    </section>
);
