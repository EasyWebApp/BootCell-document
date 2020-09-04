import { WebCellProps, createCell, Fragment } from 'web-cell';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';

import documents from '../../document/dist';

const menu = [
    {
        title: 'Documentation',
        href: documents[0].paths[0]
    },
    {
        title: 'API',
        href: 'https://web-cell.dev/BootCell/'
    },
    {
        title: 'Examples',
        href: 'example'
    },
    {
        title: 'Source code',
        href: 'https://github.com/EasyWebApp/BootCell'
    }
];

export function PageBox({ defaultSlot }: WebCellProps) {
    return (
        <>
            <NavBar brand="BootCell">
                {menu.map(({ title, ...rest }) => (
                    <NavLink {...rest}>{title}</NavLink>
                ))}
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
