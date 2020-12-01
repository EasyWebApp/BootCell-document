import { component, mixin, createCell, Fragment } from 'web-cell';
import classNames from 'classnames';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { Form } from 'boot-cell/source/Form/Form';
import { Field } from 'boot-cell/source/Form/Field';
import { Button } from 'boot-cell/source/Form/Button';
import { CarouselView, CarouselItem } from 'boot-cell/source/Media/Carousel';

import { Feature } from './Feature';
import style from './index.less';

import { Repository, github } from '../../../model';
import { headers, banners, features } from './data';

interface CarouselPageState {
    projects: Repository[];
}

@component({
    tagName: 'carousel-page',
    renderTarget: 'children'
})
export class CarouselPage extends mixin<{}, CarouselPageState>() {
    state = {
        projects: [] as Repository[]
    };

    async connectedCallback() {
        super.connectedCallback();

        const { body } = await github.get<Repository[]>(
            'orgs/EasyWebApp/repos'
        );

        await this.setState({
            projects: body
                .sort(({ updated_at: A }, { updated_at: B }) =>
                    B.localeCompare(A)
                )
                .slice(0, 3)
        });
    }

    render(_, { projects }: CarouselPageState) {
        return (
            <>
                <NavBar brand="Carousel" menu={headers}>
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
                    <div className="row text-center">
                        {projects.map(({ name, description, html_url }) => (
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
                        ))}
                    </div>
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
