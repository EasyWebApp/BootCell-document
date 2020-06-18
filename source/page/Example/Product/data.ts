import { NavProps } from 'boot-cell/source/Navigator';
import { CaseProps } from './Case';
import { FooterListProps } from './FooterList';

export const headers: NavProps['list'] = [
    { title: 'Tour' },
    { title: 'Product' },
    { title: 'Features' },
    { title: 'Enterprise' },
    { title: 'Support' },
    { title: 'Pricing' },
    { title: 'Cart' }
];

export const products: Pick<CaseProps, 'background' | 'color'>[][] = [
    [
        { background: 'dark', color: 'light' },
        { background: 'light', color: 'dark' }
    ],
    [
        { background: 'light', color: 'dark' },
        { background: 'primary', color: 'light' }
    ],
    [
        { background: 'light', color: 'white' },
        { background: 'light', color: 'white' }
    ],
    [
        { background: 'light', color: 'white' },
        { background: 'light', color: 'white' }
    ]
];

export const footers: FooterListProps[] = [
    {
        title: 'Features',
        menu: [
            {
                title: 'Cool stuff'
            },
            {
                title: 'Random feature'
            },
            {
                title: 'Team feature'
            },
            {
                title: 'Stuff for developers'
            },
            {
                title: 'Another one'
            },
            {
                title: 'Last time'
            }
        ]
    },
    {
        title: 'Resources',
        menu: [
            {
                title: 'Resource'
            },
            {
                title: 'Resource name'
            },
            {
                title: 'Another resource'
            },
            {
                title: 'Final resource'
            }
        ]
    },
    {
        title: 'Resources',
        menu: [
            {
                title: 'Business'
            },
            {
                title: 'Education'
            },
            {
                title: 'Government'
            },
            {
                title: 'Gaming'
            }
        ]
    },
    {
        title: 'About',
        menu: [
            {
                title: 'Team'
            },
            {
                title: 'Locations'
            },
            {
                title: 'Privacy'
            },
            {
                title: 'Terms'
            }
        ]
    }
];
