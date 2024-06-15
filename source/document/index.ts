// This file is created by "MDX index creator" script,
// please don't edit it manually!

import { lazy } from 'web-cell';

import { loadMDX } from '../utility';

export default [
    {
        path: 'calendar/countdown',
        layout: 'docs',
        title: 'Count down',
        description: null,
        group: 'Components',
        component: lazy(loadMDX(() => import('./Calendar/CountDown.mdx')))
    },
    {
        path: 'content/faicon',
        layout: 'docs',
        title: 'FAIcon',
        description: 'Wrapper component for FontAwesome v5 (CSS fonts)',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Content/FAIcon.mdx')))
    },
    {
        path: 'content/jumbotron',
        layout: 'docs',
        title: 'Jumbotron',
        description:
            'Lightweight, flexible component for showcasing hero unit style content.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Content/Jumbotron.mdx')))
    },
    {
        path: 'content/mediaobject',
        layout: 'docs',
        title: 'Media object',
        description:
            'Documentation and examples for Bootstrap’s media object to construct highly repetitive components like blog comments, tweets, and the like.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Content/MediaObject.mdx')))
    },
    {
        path: 'prompt/spinner',
        layout: 'docs',
        title: 'Spinner',
        description:
            'Indicate the loading state of a component or page with BootCell spinners, built entirely with HTML, CSS, and no JavaScript.',
        group: 'Components',
        component: lazy(loadMDX(() => import('./Prompt/Spinner.mdx')))
    },
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
