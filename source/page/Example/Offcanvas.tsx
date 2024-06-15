import classNames from 'classnames';
import {
    OffcanvasNavbar,
    Nav,
    NavLink,
    NavDropdown,
    DropdownItem,
    FormControl,
    Button,
    Badge,
    MediaObject
} from 'boot-cell';

import * as style from './Offcanvas.module.less';

export default () => (
    <>
        <OffcanvasNavbar brand="Offcanvas navbar">
            <NavLink>Dashboard</NavLink>
            <NavLink>Notifications</NavLink>
            <NavLink>Profile</NavLink>
            <NavLink>Switch account</NavLink>
            <NavDropdown title="Settings">
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
            </NavDropdown>

            <form inline className="my-2 my-lg-0">
                <FormControl
                    type="search"
                    className="mr-sm-2"
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
        </OffcanvasNavbar>
        <Nav scrollable>
            <NavLink>Dashboard</NavLink>
            <NavLink>
                Friends{' '}
                <Badge pill color="light" className="align-text-bottom">
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
                    src="https://github.com/EasyWebApp.png"
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
                        image="https://github.com/EasyWebApp.png"
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
                            Web Components engine based on JSX &amp; TypeScript
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
                        image="https://github.com/EasyWebApp.png"
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
    </>
);
