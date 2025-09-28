import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Icon,
    Jumbotron,
    Button,
    ButtonGroup,
    Card,
    CardImg,
    CardBody
} from 'boot-cell';

import * as style from './index.module.less';

const contacts = ['Follow on Twitter', 'Like on Facebook', 'Email me'];

const Placeholder = new URL('./placeholder.svg', import.meta.url) + '';

const ImageCard = () => (
    <Col md={4}>
        <Card className="mb-4 shadow-sm">
            <CardImg src={Placeholder} />
            <CardBody>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <div className="d-flex justify-content-between align-items-center">
                    <ButtonGroup>
                        <Button size="sm" variant="outline-secondary">
                            View
                        </Button>
                        <Button size="sm" variant="outline-secondary">
                            Edit
                        </Button>
                    </ButtonGroup>
                    <small className="text-muted">9 mins</small>
                </div>
            </CardBody>
        </Card>
    </Col>
);

export default () => (
    <>
        <Navbar narrow>
            <NavbarBrand>
                <Icon className="mr-2" name="camera" size={1.25} />
                Album
            </NavbarBrand>
            <Row>
                <Col sm={8} md={7} className="py-4">
                    <h4 className="text-white">About</h4>
                    <p className="text-muted">
                        Add some information about the album below, the author,
                        or any other background context. Make it a few sentences
                        long so folks can pick up some informative tidbits.
                        Then, link them off to some social networking sites or
                        contact information.
                    </p>
                </Col>
                <Col sm={4} className="offset-md-1 py-4">
                    <h4 className="text-white">Contact</h4>
                    <ul className="list-unstyled">
                        {contacts.map(text => (
                            <li key={text}>
                                <a href="#" className="text-white">
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Navbar>

        <main>
            <Jumbotron
                className={`${style.jumbotron} py-5 mb-0 bg-white text-center`}
                fluid
                title="Album example"
                description="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."
            >
                <p className="mb-0">
                    <Button className="my-2 mr-2" variant="primary">
                        Main call to action
                    </Button>
                    <Button className="my-2" variant="secondary">
                        Secondary action
                    </Button>
                </p>
            </Jumbotron>

            <div className="album py-5 bg-light">
                <Container>
                    <div className="row">
                        {Array.from(new Array(9), () => (
                            <ImageCard />
                        ))}
                    </div>
                </Container>
            </div>
        </main>

        <footer className="py-5 text-muted">
            <Container>
                <p className="mb-1 float-end">
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
            </Container>
        </footer>
    </>
);
