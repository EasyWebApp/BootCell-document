import { component, mixin, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
import { DropMenuItem } from 'boot-cell/source/Navigator/DropMenu';
import { Form } from 'boot-cell/source/Form/Form';
import { Field } from 'boot-cell/source/Form/Field';
import { Button } from 'boot-cell/source/Form/Button';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { SpinnerBox } from 'boot-cell/source/Prompt/Spinner';

import repository, { Repository } from '../../model/Repository';

@observer
@component({
    tagName: 'jumbotron-page',
    renderTarget: 'children'
})
export class JumbotronPage extends mixin() {
    connectedCallback() {
        repository.getList();

        super.connectedCallback();
    }

    renderItem = ({ name, description, html_url }: Repository) => (
        <div className="col-md-4">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>
                <Button color="secondary" href={html_url}>
                    View details »
                </Button>
            </p>
        </div>
    );

    render() {
        const { loading, list } = repository;

        return (
            <>
                <NavBar expand="lg" brand="NavBar">
                    <NavLink href=".">Home</NavLink>
                    <NavLink href="components/navigator/navbar">Link</NavLink>
                    <NavLink href="#" disabled>
                        Disabled
                    </NavLink>
                    <NavLink title="Dropdown">
                        <DropMenuItem>Action</DropMenuItem>
                        <DropMenuItem>Another action</DropMenuItem>
                        <DropMenuItem />
                        <DropMenuItem>Something else here</DropMenuItem>
                    </NavLink>
                    <Form inline className="my-2 my-lg-0">
                        <Field
                            type="search"
                            className="mr-sm-2"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Button
                            type="submit"
                            color="success"
                            outline
                            className="my-2 my-sm-0"
                        >
                            Search
                        </Button>
                    </Form>
                </NavBar>

                <Jumbotron
                    fluid
                    title="Hello, world!"
                    description="This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."
                >
                    <Button color="primary" size="lg">
                        Learn more »
                    </Button>
                </Jumbotron>

                <main className="container">
                    <SpinnerBox className="row" cover={loading}>
                        {list.slice(0, 3).map(this.renderItem)}
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
