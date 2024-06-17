// This file is created by "MDX index creator" script,
// please don't edit it manually!

import { lazy } from 'web-cell';

import { loadMDX } from '../utility';

export default [
    {
        path: 'Calendar/CountDown',
        layout: 'docs',
        title: 'Count down',
        description: null,
        group: 'Components',
        component: lazy(loadMDX(() => import('./Calendar/CountDown.mdx')))
    },
    {
        path: 'Content/FAIcon',
        layout: 'docs',
        title: 'FAIcon',
        description: 'Wrapper component for FontAwesome v5 (CSS fonts)',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Content/FAIcon.mdx')))
    },
    {
        path: 'Content/Jumbotron',
        layout: 'docs',
        title: 'Jumbotron',
        description:
            'Lightweight, flexible component for showcasing hero unit style content.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Content/Jumbotron.mdx')))
    },
    {
        path: 'Content/ListGroup',
        layout: 'docs',
        title: 'List group',
        description:
            'List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Content/ListGroup.mdx')))
    },
    {
        path: 'Content/MediaObject',
        layout: 'docs',
        title: 'Media object',
        description:
            'Documentation and examples for Bootstrap’s media object to construct highly repetitive components like blog comments, tweets, and the like.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Content/MediaObject.mdx')))
    },
    {
        path: 'Form/ButtonGroup',
        layout: 'docs',
        title: 'Button group',
        description:
            'Group a series of buttons together on a single line or stack them in a vertical column.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Form/ButtonGroup.mdx')))
    },
    {
        path: 'Prompt/Spinner',
        layout: 'docs',
        title: 'Spinner',
        description:
            'Indicate the loading state of a component or page with BootCell spinners, built entirely with HTML, CSS, and no JavaScript.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Prompt/Spinner.mdx')))
    },
    {
        path: 'Reminder/Badge',
        layout: 'docs',
        title: 'Badge',
        description:
            'Documentation and examples for badges, our small count and labeling component.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Reminder/Badge.mdx')))
    },
    {
        path: 'Reminder/Icon',
        layout: 'docs',
        title: 'Icon',
        description: 'Wrapper component for Bootstrap Icon v1.2+ (Web font)',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Reminder/Icon.mdx')))
    }
];
