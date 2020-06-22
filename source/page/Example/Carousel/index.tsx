import { component, mixin, createCell, Fragment } from 'web-cell';
import classNames from 'classnames';
import { ReposListForOrgResponseData } from '@octokit/types';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { Form } from 'boot-cell/source/Form/Form';
import { Field } from 'boot-cell/source/Form/Field';
import { Button } from 'boot-cell/source/Form/Button';
import { CarouselView } from 'boot-cell/source/Content/Carousel';

import { Feature } from './Feature';
import style from './index.less';

import { github } from '../../../model';
import { headers, banners, features } from './data';

interface CarouselPageState {
    projects: ReposListForOrgResponseData;
}

@component({
    tagName: 'carousel-page',
    renderTarget: 'children'
})
export class CarouselPage extends mixin<{}, CarouselPageState>() {
    state = {
        projects: [] as ReposListForOrgResponseData
    };

    async connectedCallback() {
        super.connectedCallback();

        const { body } = await github.get<ReposListForOrgResponseData>(
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
            <Fragment>
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
                            kind="success"
                            outline
                            className="my-2 my-sm-0"
                        >
                            Search
                        </Button>
                    </Form>
                </NavBar>

                <CarouselView controls indicators interval={3} list={banners} />

                <div className={classNames('container', style.marketing)}>
                    <div className="row text-center">
                        {projects.map(({ name, description, html_url }) => (
                            <div className="col-lg-4 mb-4">
                                <img
                                    className="rounded-circle"
                                    style={{ width: '8.75rem' }}
                                    src="https://web-cell.dev/WebCell-0.f1ffd28b.png"
                                />
                                <h2 style={{ fontWeight: 400 }}>{name}</h2>
                                <p>{description}</p>
                                <p>
                                    <Button kind="secondary" href={html_url}>
                                        View details »
                                    </Button>
                                </p>
                            </div>
                        ))}
                    </div>
                    <hr className={style['featurette-divider']} />

                    {features.map((item, index) => (
                        <Fragment>
                            <Feature reverse={!!(index % 2)} {...item} />
                            <hr className={style['featurette-divider']} />
                        </Fragment>
                    ))}
                </div>
                <footer className="container">
                    <p className="float-right">
                        <a href="#top">Back to top</a>
                    </p>
                    <p>
                        © 2017-{new Date().getFullYear()} Company, Inc. ·{' '}
                        <a href="#">Privacy</a> · <a href="#">Terms</a>
                    </p>
                </footer>
            </Fragment>
        );
    }
}
