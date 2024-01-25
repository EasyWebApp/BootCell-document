import { WebCellProps } from 'web-cell';

import documents from '../document';

documents.sort(({ path: A }, { path: B }) => A.localeCompare(B));

export const main_menu: WebCellProps<HTMLAnchorElement>[] = [
    {
        title: 'Documentation',
        href: documents[0].path
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
        title: 'Themes',
        target: '_blank',
        href: 'https://bootswatch.com/'
    },
    {
        title: 'Source code',
        href: 'https://github.com/EasyWebApp/BootCell'
    }
];

export const scaffolds: WebCellProps<HTMLAnchorElement>[] = Object.entries({
    scaffold: 'Common',
    DashBoard: 'Dashboard',
    'mark-wiki': 'Static'
}).map(([name, title]) => ({
    title,
    target: '_blank',
    href: `https://github.com/EasyWebApp/${name}/generate`
}));
