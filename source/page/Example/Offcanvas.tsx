import { createCell, Fragment } from 'web-cell';
import classNames from 'classnames';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { Nav, NavLink } from 'boot-cell/source/Navigator/Nav';
import { Form } from 'boot-cell/source/Form/Form';
import { Field } from 'boot-cell/source/Form/Field';
import { Button } from 'boot-cell/source/Form/Button';
import { Badge } from 'boot-cell/source/Reminder/Badge';
import { MediaObject } from 'boot-cell/source/Content/MediaObject';

import style from './Offcanvas.less';

export function OffcanvasPage() {
    return (
        <Fragment>
            <NavBar
                offcanvas
                brand="Offcanvas navbar"
                menu={[
                    { title: 'Dashboard' },
                    { title: 'Notifications' },
                    { title: 'Profile' },
                    { title: 'Switch account' },
                    {
                        title: 'Settings',
                        list: [
                            { title: 'Action' },
                            { title: 'Another action' },
                            { title: 'Something else here' }
                        ]
                    }
                ]}
            >
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
            <Nav scrollable>
                <NavLink>Dashboard</NavLink>
                <NavLink>
                    Friends{' '}
                    <Badge pill kind="light" className="align-text-bottom">
                        27
                    </Badge>
                </NavLink>
                <NavLink>Explore</NavLink>
                <NavLink>Suggestions</NavLink>
                {Array.from(new Array(5), () => (
                    <NavLink>Link</NavLink>
                ))}
            </Nav>
            <main className="container">
                <div
                    className={classNames(
                        'd-flex',
                        'align-items-center',
                        'p-3',
                        'my-3',
                        'text-white-50',
                        style['bg-purple'],
                        'rounded',
                        'shadow-sm'
                    )}
                >
                    <img
                        className={classNames('mr-3', style.logo)}
                        src="https://web-cell.dev/WebCell-0.f1ffd28b.png"
                    />
                    <div className={style['lh-100']}>
                        <h6
                            className={classNames(
                                'mb-0',
                                'text-white',
                                style['lh-100']
                            )}
                        >
                            BootCell
                        </h6>
                        <small>Since 2019</small>
                    </div>
                </div>
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 className="border-bottom border-gray pb-2 mb-0">
                        Recent updates
                    </h6>
                    {Array.from(new Array(3), () => (
                        <MediaObject
                            className="text-muted pt-3"
                            image="https://web-cell.dev/WebCell-0.f1ffd28b.png"
                            title="WebCell"
                        >
                            <p
                                className={classNames(
                                    'pb-3',
                                    'mb-0',
                                    'small',
                                    style['lh-125'],
                                    'border-bottom'
                                )}
                            >
                                <strong className="d-block">@TechQuery</strong>
                                Web Components engine based on JSX &amp;
                                TypeScript
                            </p>
                        </MediaObject>
                    ))}
                    <small className="d-block text-right mt-3">
                        <a href="#">All updates</a>
                    </small>
                </div>
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 className="border-bottom border-gray pb-2 mb-0">
                        Suggestions
                    </h6>
                    {Array.from(new Array(3), () => (
                        <MediaObject
                            className="text-muted pt-3"
                            image="https://web-cell.dev/WebCell-0.f1ffd28b.png"
                            title=""
                        >
                            <div
                                className={classNames(
                                    'pb-3',
                                    'mb-0',
                                    'small',
                                    style['lh-125'],
                                    'border-bottom'
                                )}
                            >
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong>Full Name</strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span className="d-block">@username</span>
                            </div>
                        </MediaObject>
                    ))}
                    <small className="d-block text-right mt-3">
                        <a href="#">All suggestions</a>
                    </small>
                </div>
            </main>
        </Fragment>
    );
}
