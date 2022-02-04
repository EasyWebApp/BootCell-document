import type { HTMLHyperLinkProps } from 'web-utility';
import groupBy from 'lodash.groupby';

import documents from '../../document/dist';

documents.sort(({ meta: { title: A } }, { meta: { title: B } }) =>
    A.localeCompare(B)
);
export const side_menu = groupBy(
    documents.map(({ paths: [href], meta }) => ({ ...meta, href })),
    'group'
);

export const main_menu: HTMLHyperLinkProps[] = [
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
        title: 'Themes',
        target: '_blank',
        href: 'https://bootswatch.com/'
    },
    {
        title: 'Source code',
        href: 'https://github.com/EasyWebApp/BootCell'
    }
];

export const scaffolds: HTMLHyperLinkProps[] = Object.entries({
    scaffold: 'Common',
    DashBoard: 'Dashboard',
    'mark-wiki': 'Static'
}).map(([name, title]) => ({
    title,
    target: '_blank',
    href: `https://github.com/EasyWebApp/${name}/generate`
}));
