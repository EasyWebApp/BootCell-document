// This file is created by "MDX index creating" script,
// please don't edit it manually!

import { lazy } from 'web-cell';

import { loadMDX } from '../utility';

export default [
    {
        path: 'reminder/badge',
        layout: 'docs',
        title: 'Badge',
        description:
            'Documentation and examples for badges, our small count and labeling component.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Reminder/Badge.mdx')))
    },
    {
        path: 'reminder/icon',
        layout: 'docs',
        title: 'Icon',
        description: 'Wrapper component for BootStrap Icon v1.2+ (Web font)',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Reminder/Icon.mdx')))
    }
];
