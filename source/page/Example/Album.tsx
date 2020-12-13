import { createCell, Fragment } from 'web-cell';
import { BannerNavBar } from 'boot-cell/source/Navigator/NavBar';
import { Icon } from 'boot-cell/source/Reminder/Icon';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';
import { ButtonGroup } from 'boot-cell/source/Form/ButtonGroup';
import { Card } from 'boot-cell/source/Content/Card';

import style from './Album.less';

const contacts = ['Follow on Twitter', 'Like on Facebook', 'Email me'];

function Placeholder() {
    return (
        <svg
            className="bd-placeholder-img"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
        >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
            </text>
        </svg>
    );
}

function ImageCard() {
    return (
        <div className="col-md-4">
            <Card
                className="mb-4 shadow-sm"
                image={<Placeholder />}
                text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            >
                <div className="d-flex justify-content-between align-items-center">
                    <ButtonGroup>
                        <Button size="sm" outline color="secondary">
                            View
                        </Button>
                        <Button size="sm" outline color="secondary">
                            Edit
                        </Button>
                    </ButtonGroup>
                    <small className="text-muted">9 mins</small>
                </div>
            </Card>
        </div>
    );
}

export function AlbumPage() {
    return (
        <>
            <BannerNavBar
                narrow
                brand={
                    <>
                        <Icon className="mr-2" name="camera" width={20} />
                        Album
                    </>
                }
            >
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-muted">
                            Add some information about the album below, the
                            author, or any other background context. Make it a
                            few sentences long so folks can pick up some
                            informative tidbits. Then, link them off to some
                            social networking sites or contact information.
                        </p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            {contacts.map(text => (
                                <li>
                                    <a href="#" className="text-white">
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </BannerNavBar>

            <main>
                <Jumbotron
                    className={`${style.jumbotron} py-5 mb-0 bg-white text-center`}
                    fluid
                    title="Album example"
                    description="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."
                >
                    <p className="mb-0">
                        <Button className="my-2 mr-2" color="primary">
                            Main call to action
                        </Button>
                        <Button className="my-2" color="secondary">
                            Secondary action
                        </Button>
                    </p>
                </Jumbotron>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {Array.from(new Array(9), () => (
                                <ImageCard />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-5 text-muted">
                <div className="container">
                    <p className="mb-1 float-right">
                        <a href="#top">Back to top</a>
                    </p>
                    <p className="mb-1">
                        Album example is © BootCell, but please download and
                        customize it for yourself!
                    </p>
                    <p className="mb-1">
                        New to BootCell?{' '}
                        <a href="https://bootstrap.web-cell.dev/">
                            Visit the homepage
                        </a>{' '}
                        or read our <a>getting started guide</a>.
                    </p>
                </div>
            </footer>
        </>
    );
}
