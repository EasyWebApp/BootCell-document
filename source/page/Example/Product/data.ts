import { FooterListProps } from '../../../component/FooterList';
import { CaseProps } from './Case';

export const headers = [
    'Tour',
    'Product',
    'Features',
    'Enterprise',
    'Support',
    'Pricing',
    'Cart'
];

export const products: Pick<CaseProps, 'background' | 'color'>[][] = [
    [
        { background: 'inverse', color: 'white' },
        { background: '1', color: 'body' }
    ],
    [
        { background: '1', color: 'body' },
        { background: 'primary', color: 'white' }
    ],
    [
        { background: '1', color: 'white' },
        { background: '1', color: 'white' }
    ],
    [
        { background: '1', color: 'white' },
        { background: '1', color: 'white' }
    ]
];

export const footers: Pick<FooterListProps, 'title' | 'menu'>[] = [
    {
        title: 'Features',
        menu: [
            { title: 'Cool stuff' },
            { title: 'Random feature' },
            { title: 'Team feature' },
            { title: 'Stuff for developers' },
            { title: 'Another one' },
            { title: 'Last time' }
        ]
    },
    {
        title: 'Resources',
        menu: [
            { title: 'Resource' },
            { title: 'Resource name' },
            { title: 'Another resource' },
            { title: 'Final resource' }
        ]
    },
    {
        title: 'Resources',
        menu: [
            { title: 'Business' },
            { title: 'Education' },
            { title: 'Government' },
            { title: 'Gaming' }
        ]
    },
    {
        title: 'About',
        menu: [
            { title: 'Team' },
            { title: 'Locations' },
            { title: 'Privacy' },
            { title: 'Terms' }
        ]
    }
];
