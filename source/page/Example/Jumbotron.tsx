import { component, observer } from 'web-cell';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    NavDropdown,
    DropdownItem,
    FormControl,
    Button,
    Jumbotron,
    SpinnerBox,
    Col
} from 'boot-cell';
import { CustomElement } from 'web-utility';
import { GitRepository } from 'mobx-github';

import { repository } from '../../model/';
import { renderMode } from '../../model/Meta';

@observer
@component({
    tagName: 'jumbotron-page',
    renderMode
})
export default class JumbotronPage
    extends HTMLElement
    implements CustomElement
{
    connectedCallback() {
        repository.getList();
    }

    disconnectedCallback() {
        repository.clear();
    }

    renderItem = ({ name, description, html_url }: GitRepository) => (
        <Col md={4}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>
                <Button variant="secondary" href={html_url}>
                    View details »
                </Button>
            </p>
        </Col>
    );

    render() {
        const { downloading, currentPage } = repository;

        return (
            <>
                <Navbar expand="lg">
                    <NavbarBrand>NavBar</NavbarBrand>
                    <Nav>
                        <NavLink href=".">Home</NavLink>
                        <NavLink href="#components/navigator/navbar">
                            Link
                        </NavLink>
                        <NavLink href="#" disabled>
                            Disabled
                        </NavLink>
                        <NavDropdown title="Dropdown">
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem />
                            <DropdownItem>Something else here</DropdownItem>
                        </NavDropdown>
                    </Nav>
                    <form inline className="my-2 my-lg-0">
                        <FormControl
                            type="search"
                            className="me-sm-2"
                            placeholder="Search"
                            ariaLabel="Search"
                        />
                        <Button
                            type="submit"
                            variant="outline-success"
                            className="my-2 my-sm-0"
                        >
                            Search
                        </Button>
                    </form>
                </Navbar>

                <Jumbotron
                    fluid
                    title="Hello, world!"
                    description="This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."
                >
                    <Button variant="primary" size="lg">
                        Learn more »
                    </Button>
                </Jumbotron>

                <main className="container">
                    <SpinnerBox className="row" cover={downloading > 0}>
                        {currentPage.slice(0, 3).map(this.renderItem)}
                    </SpinnerBox>
                    <hr />
                </main>
                <footer className="container">
                    <p>© Company 2017-{new Date().getFullYear()}</p>
                </footer>
            </>
        );
    }
}
