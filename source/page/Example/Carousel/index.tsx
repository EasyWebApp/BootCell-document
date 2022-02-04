import { component, mixin, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import classNames from 'classnames';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator';
import { Form } from 'boot-cell/source/Form/Form';
import { Field } from 'boot-cell/source/Form/Field';
import { Button } from 'boot-cell/source/Form/Button';
import { CarouselView, CarouselItem } from 'boot-cell/source/Media/Carousel';
import { SpinnerBox } from 'boot-cell/source/Prompt/Spinner';

import { Feature } from './Feature';
import style from './index.less';

import { headers, banners, features } from './data';
import repository, { Repository } from '../../../model/Repository';

@observer
@component({
    tagName: 'carousel-page',
    renderTarget: 'children'
})
export class CarouselPage extends mixin() {
    connectedCallback() {
        repository.getList();

        super.connectedCallback();
    }

    renderItem = ({ name, description, html_url }: Repository) => (
        <div className="col-lg-4 mb-4">
            <img
                className="rounded-circle"
                style={{ width: '8.75rem' }}
                src="https://web-cell.dev/WebCell-0.f1ffd28b.png"
            />
            <h2 style={{ fontWeight: '400' }}>{name}</h2>
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
                <NavBar brand="Carousel">
                    {headers.map(({ title, ...rest }) => (
                        <NavLink {...rest}>{title}</NavLink>
                    ))}
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

                <CarouselView controls indicators interval={3}>
                    {banners.map(item => (
                        <CarouselItem {...item} />
                    ))}
                </CarouselView>

                <div className={classNames('container', style.marketing)}>
                    <SpinnerBox className="row text-center" cover={loading}>
                        {list.slice(0, 3).map(this.renderItem)}
                    </SpinnerBox>
                    <hr className={style['featurette-divider']} />

                    {features.map((item, index) => (
                        <>
                            <Feature reverse={!!(index % 2)} {...item} />
                            <hr className={style['featurette-divider']} />
                        </>
                    ))}
                </div>
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
