import { createCell, Fragment } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';
import { Card } from 'boot-cell/source/Content/Card';

import data from './index.json';

export function HomePage() {
    return (
        <>
            <Jumbotron
                fluid
                title="Example"
                description="Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts."
            >
                <Button
                    outline
                    size="lg"
                    target="_blank"
                    href="https://github.com/EasyWebApp/BootCell-document/tree/master/source/page/Example"
                >
                    Source Code
                </Button>
            </Jumbotron>

            <div className="container">{data.map(Section)}</div>
        </>
    );
}

function Section({ title, description, list }: typeof data[0]) {
    return (
        <section>
            <h2>{title}</h2>
            <p className="lead">{description}</p>

            <div className="card-deck m-auto">
                {list.map(({ href, image, title, description }) => {
                    href =
                        href ||
                        'example/' + title.replace(' ', '-').toLowerCase();

                    return (
                        <Card
                            className="mb-4"
                            style={{
                                minWidth: '15rem',
                                maxWidth: '15rem'
                            }}
                            image={image}
                            title={
                                <a className="stretched-link" href={href}>
                                    {title}
                                </a>
                            }
                            text={description}
                        />
                    );
                })}
            </div>
        </section>
    );
}
