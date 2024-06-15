import { FC, PropsWithChildren, observer } from 'web-cell';
import {
    Nav,
    OffcanvasNavbar,
    NavDropdown,
    NavLinkProps,
    NavLink,
    DropdownItem
} from 'boot-cell';

import { meta } from '../model';
import documents from '../document';

export interface PageFrameProps {
    menu: NavLinkProps[];
    activeIndex?: number;
    subMenu?: typeof documents;
}

export const PageFrame: FC<PropsWithChildren<PageFrameProps>> = observer(
    ({ menu, activeIndex, subMenu, children }) => (
        <>
            <OffcanvasNavbar
                brand={
                    <a
                        className="text-white text-decoration-none d-flex align-items-center"
                        href="#"
                    >
                        <img
                            className="me-2"
                            style={{ width: '2rem' }}
                            src="https://web-cell.dev/WebCell-0.f9823b00.png"
                        />
                        BootCell
                    </a>
                }
                expand="md"
                variant="dark"
                sticky="top"
            >
                <Nav className="justify-content-end flex-fill gap-md-3">
                    {menu.map(({ title, target, href }, index) => {
                        const current = index === activeIndex;

                        return !current || meta.deviceType !== 'phone' ? (
                            <NavLink
                                target={target}
                                href={
                                    href.startsWith('http') ? href : `#${href}`
                                }
                                active={current}
                            >
                                {title}
                            </NavLink>
                        ) : (
                            <NavDropdown title={title} active={current}>
                                {subMenu.map(({ path }) => (
                                    <DropdownItem href={path}>
                                        {title}
                                    </DropdownItem>
                                ))}
                            </NavDropdown>
                        );
                    })}
                </Nav>
            </OffcanvasNavbar>

            <div className="flex-fill overflow-auto scrollbar-none">
                {children}
            </div>

            <footer className="text-center bg-light py-5">
                Proudly developed with{' '}
                <a target="_blank" href="https://web-cell.dev/">
                    WebCell v3
                </a>
                ,{' '}
                <a target="_blank" href="https://web-cell.dev/BootCell/">
                    BootCell v1
                </a>{' '}
                &amp;{' '}
                <a
                    target="_blank"
                    href="https://github.com/EasyWebApp/MarkCell"
                >
                    MarkCell
                </a>
            </footer>
        </>
    )
);
