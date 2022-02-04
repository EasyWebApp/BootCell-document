import {
    WebCellProps,
    component,
    mixin,
    watch,
    attribute,
    createCell,
    Fragment
} from 'web-cell';
import { observer } from 'mobx-web-cell';

import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLinkProps, NavLink } from 'boot-cell/source/Navigator/Nav';
import { DropMenuItem } from 'boot-cell/source/Navigator';

import { meta } from '../model';
import documents from '../../document/dist';

export interface PageFrameProps extends WebCellProps {
    menu: NavLinkProps[];
    activeIndex?: number;
    subMenu?: typeof documents;
}

@observer
@component({
    tagName: 'page-frame',
    renderTarget: 'children'
})
export class PageFrame extends mixin<PageFrameProps>() {
    @watch
    menu = [];

    @attribute
    @watch
    activeIndex?: number;

    @watch
    subMenu = [];

    render({ menu, activeIndex, subMenu, defaultSlot }: PageFrameProps) {
        return (
            <>
                <NavBar
                    offcanvas
                    brand="BootCell"
                    expand="md"
                    background="dark"
                    theme="dark"
                >
                    {menu.map(({ title, ...rest }, index) => {
                        const current = index === activeIndex;

                        return !current || meta.deviceType !== 'phone' ? (
                            <NavLink {...rest} active={current}>
                                {title}
                            </NavLink>
                        ) : (
                            <NavLink title={title} active={current}>
                                {subMenu.map(
                                    ({ paths: [path], meta: { title } }) => (
                                        <DropMenuItem href={path}>
                                            {title}
                                        </DropMenuItem>
                                    )
                                )}
                            </NavLink>
                        );
                    })}
                </NavBar>

                {defaultSlot}

                <footer className="text-center bg-light py-5">
                    Proudly developed with{' '}
                    <a target="_blank" href="https://web-cell.dev/">
                        WebCell v2
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
        );
    }
}
