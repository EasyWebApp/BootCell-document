import { component, observer } from 'web-cell';
import { CustomElement } from 'web-utility';
import {
    Nav,
    NavLink,
    Navbar,
    NavbarBrand,
    FormControl,
    Button,
    Carousel,
    CarouselItem,
    SpinnerBox,
    Container,
    Col,
    Image
} from 'boot-cell';
import { GitRepository } from 'mobx-github';

import { Feature } from './Feature';
import './index.less';
import * as style from './index.module.less';

import { headers, banners, features } from './data';
import { repository } from '../../../model';
import { renderMode } from '../../../model/Meta';

@observer
@component({
    tagName: 'carousel-page',
    renderMode
})
export default class CarouselPage extends HTMLElement implements CustomElement {
    connectedCallback() {
        repository.getList();
    }

    disconnectedCallback() {
        repository.clear();
    }

    renderItem = ({ name, description, html_url }: GitRepository) => (
        <Col lg={4} className="mb-4">
            <Image
                roundedCircle
                style={{ width: '8.75rem' }}
                src="https://github.com/EasyWebApp.png"
            />
            <h2 style={{ fontWeight: '400' }}>{name}</h2>
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
                <Navbar>
                    <NavbarBrand>Carousel</NavbarBrand>
                    <Nav>
                        {headers.map(({ title, ...rest }) => (
                            <NavLink key={title} {...rest}>
                                {title}
                            </NavLink>
                        ))}
                    </Nav>
                    <form inline className="my-2 my-lg-0">
                        <FormControl
                            type="search"
                            className="mr-sm-2"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Button
                            type="submit"
                            variant="success"
                            outline
                            className="my-2 my-sm-0"
                        >
                            Search
                        </Button>
                    </form>
                </Navbar>

                <Carousel controls indicators interval={3}>
                    {banners.map(item => (
                        <CarouselItem key={item.title} {...item} />
                    ))}
                </Carousel>

                <Container className={style.marketing}>
                    <SpinnerBox
                        className="row text-center"
                        cover={downloading > 0}
                    >
                        {currentPage.slice(0, 3).map(this.renderItem)}
                    </SpinnerBox>
                    <hr className={style['featurette-divider']} />

                    {features.map((item, index) => (
                        <>
                            <Feature reverse={!!(index % 2)} {...item} />
                            <hr className={style['featurette-divider']} />
                        </>
                    ))}
                </Container>
                <footer className="container my-5">
                    <p className="float-right">
                        <a href="#top">Back to top</a>
                    </p>
                    <p>
                        © 2017-{new Date().getFullYear()} Company, Inc. ·{' '}
                        <a href="#">Privacy</a> · <a href="#">Terms</a>
                    </p>
                </footer>
            </>
        );
    }
}
