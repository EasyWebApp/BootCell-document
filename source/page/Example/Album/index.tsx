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
        <Card className="mb-7 shadow-sm">
            <CardImg src={Placeholder} />
            <CardBody>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <div className="d-flex justify-content-between align-items-center">
                    <ButtonGroup>
                        <Button size="sm" variant="outline" theme="secondary">
                            View
                        </Button>
                        <Button size="sm" variant="outline" theme="secondary">
                            Edit
                        </Button>
                    </ButtonGroup>
                    <small className="fg-3">9 mins</small>
                </div>
            </CardBody>
        </Card>
    </Col>
);

export default () => (
    <>
        <Navbar>
            <NavbarBrand>
                <Icon className="me-3" name="camera" size={1.25} />
                Album
            </NavbarBrand>
            <Row>
                <Col sm={8} md={7} className="py-7">
                    <h4 className="fg-white">About</h4>
                    <p className="fg-3">
                        Add some information about the album below, the author,
                        or any other background context. Make it a few sentences
                        long so folks can pick up some informative tidbits.
                        Then, link them off to some social networking sites or
                        contact information.
                    </p>
                </Col>
                <Col sm={4} className="md:offset-1 py-7">
                    <h4 className="fg-white">Contact</h4>
                    <ul className="list-unstyled">
                        {contacts.map(text => (
                            <li key={text}>
                                <a href="#" className="fg-white">
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
                className={`${style.jumbotron} py-12 mb-0 bg-white text-center`}
                fluid
                title="Album example"
                description="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."
            >
                <p className="mb-0">
                    <Button
                        className="my-3 me-3"
                        variant="solid"
                        theme="primary"
                    >
                        Main call to action
                    </Button>
                    <Button className="my-3" variant="solid" theme="secondary">
                        Secondary action
                    </Button>
                </p>
            </Jumbotron>

            <div className="album py-12 bg-1">
                <Container>
                    <div className="row">
                        {Array.from(new Array(9), () => (
                            <ImageCard />
                        ))}
                    </div>
                </Container>
            </div>
        </main>

        <footer className="py-12 fg-3">
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
