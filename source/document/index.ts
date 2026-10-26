// This file is created by "MDX index creator" script,
// please don't edit it manually!

import { loadMDX } from '../utility';

export default [
    {
        path: 'Calendar/CountDown',
        layout: 'docs',
        title: 'Count down',
        description: null,
        group: 'Components',
        component: loadMDX(() => import('./Calendar/CountDown.mdx'))
    },
    {
        path: 'components/Calendar/MonthCalendar',
        layout: 'docs',
        title: 'Month calendar',
        description: 'Display a monthly calendar with selectable date entries.',
        group: 'Components',
        component: loadMDX(
            () => import('./components/Calendar/MonthCalendar.mdx')
        )
    },
    {
        path: 'components/Content/Accordion',
        layout: 'docs',
        title: 'Accordion',
        description:
            'Build expandable sections with native details and summary elements.',
        group: 'Components',
        component: loadMDX(() => import('./components/Content/Accordion.mdx'))
    },
    {
        path: 'components/Content/Card',
        layout: 'docs',
        title: 'Card',
        description:
            'Compose flexible content containers from card primitives.',
        group: 'Components',
        component: loadMDX(() => import('./components/Content/Card.mdx'))
    },
    {
        path: 'components/Content/SplitView',
        layout: 'docs',
        title: 'Split view',
        description:
            'Arrange two independently sized panes with a draggable divider.',
        group: 'Components',
        component: loadMDX(() => import('./components/Content/SplitView.mdx'))
    },
    {
        path: 'components/Content/Table',
        layout: 'docs',
        title: 'Table',
        description:
            'Render responsive, themed tables with standard table markup.',
        group: 'Components',
        component: loadMDX(() => import('./components/Content/Table.mdx'))
    },
    {
        path: 'components/Content/Tabs',
        layout: 'docs',
        title: 'Tabs',
        description:
            'Switch between content panels with accessible tab navigation.',
        group: 'Components',
        component: loadMDX(() => import('./components/Content/Tabs.mdx'))
    },
    {
        path: 'components/Form/Button',
        layout: 'docs',
        title: 'Button',
        description:
            'Create actions with independent appearance and theme properties.',
        group: 'Components',
        component: loadMDX(() => import('./components/Form/Button.mdx'))
    },
    {
        path: 'components/Form/FormField',
        layout: 'docs',
        title: 'Form fields',
        description: 'Compose labels, controls, and input checks for forms.',
        group: 'Components',
        component: loadMDX(() => import('./components/Form/FormField.mdx'))
    },
    {
        path: 'components/Form/InputGroup',
        layout: 'docs',
        title: 'Input groups',
        description:
            'Extend form controls with text, buttons, or button groups.',
        group: 'Components',
        component: loadMDX(() => import('./components/Form/InputGroup.mdx'))
    },
    {
        path: 'components/Media/Carousel',
        layout: 'docs',
        title: 'Carousel',
        description:
            'Present slides with navigable carousel controls and indicators.',
        group: 'Components',
        component: loadMDX(() => import('./components/Media/Carousel.mdx'))
    },
    {
        path: 'components/Media/Image',
        layout: 'docs',
        title: 'Image',
        description:
            'Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them — all via classes.',
        group: 'Components',
        component: loadMDX(() => import('./components/Media/Image.mdx'))
    },
    {
        path: 'components/Navigator/BreadCrumb',
        layout: 'docs',
        title: 'Bread crumb',
        description:
            "Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.",
        group: 'Components',
        component: loadMDX(
            () => import('./components/Navigator/BreadCrumb.mdx')
        )
    },
    {
        path: 'components/Navigator/Dropdown',
        layout: 'docs',
        title: 'Dropdown',
        description: 'Toggle a menu of links from a button or navigation item.',
        group: 'Components',
        component: loadMDX(() => import('./components/Navigator/Dropdown.mdx'))
    },
    {
        path: 'components/Navigator/Nav',
        layout: 'docs',
        title: 'Nav',
        description:
            'Build flexible navigation with links, tabs, and dropdowns.',
        group: 'Components',
        component: loadMDX(() => import('./components/Navigator/Nav.mdx'))
    },
    {
        path: 'components/Navigator/Navbar',
        layout: 'docs',
        title: 'Navbar',
        description:
            'Add responsive navigation with a navbar or drawer-backed navbar.',
        group: 'Components',
        component: loadMDX(() => import('./components/Navigator/Navbar.mdx'))
    },
    {
        path: 'components/Navigator/Pagination',
        layout: 'docs',
        title: 'Pagination',
        description:
            'Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.',
        group: 'Components',
        component: loadMDX(
            () => import('./components/Navigator/Pagination.mdx')
        )
    },
    {
        path: 'components/Prompt/Alert',
        layout: 'docs',
        title: 'Alert',
        description: 'Show contextual feedback with semantic theme colors.',
        group: 'Components',
        component: loadMDX(() => import('./components/Prompt/Alert.mdx'))
    },
    {
        path: 'components/Prompt/Modal',
        layout: 'docs',
        title: 'Modal',
        description: 'Display modal dialogs with native dialog elements.',
        group: 'Components',
        component: loadMDX(() => import('./components/Prompt/Modal.mdx'))
    },
    {
        path: 'components/Prompt/Tooltip',
        layout: 'docs',
        title: 'Tooltip',
        description: 'Show a simple CSS tooltip when a trigger is hovered.',
        group: 'Components',
        component: loadMDX(() => import('./components/Prompt/Tooltip.mdx'))
    },
    {
        path: 'components/Reminder/Progress',
        layout: 'docs',
        title: 'Progress bar',
        description:
            'Show task completion with a semantic, themed progress bar.',
        group: 'Components',
        component: loadMDX(() => import('./components/Reminder/Progress.mdx'))
    },
    {
        path: 'Content/FAIcon',
        layout: 'docs',
        title: 'FAIcon',
        description: 'Render Font Awesome v7 icons with BootCell components.',
        group: 'Components',
        component: loadMDX(() => import('./Content/FAIcon.mdx'))
    },
    {
        path: 'Content/Jumbotron',
        layout: 'docs',
        title: 'Jumbotron',
        description:
            'Lightweight, flexible component for showcasing hero unit style content.',
        group: 'Components',
        component: loadMDX(() => import('./Content/Jumbotron.mdx'))
    },
    {
        path: 'Content/ListGroup',
        layout: 'docs',
        title: 'List group',
        description:
            'List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.',
        group: 'Components',
        component: loadMDX(() => import('./Content/ListGroup.mdx'))
    },
    {
        path: 'Content/MediaObject',
        layout: 'docs',
        title: 'Media object',
        description:
            'Documentation and examples for Bootstrap’s media object to construct highly repetitive components like blog comments, tweets, and the like.',
        group: 'Components',
        component: loadMDX(() => import('./Content/MediaObject.mdx'))
    },
    {
        path: 'Form/ButtonGroup',
        layout: 'docs',
        title: 'Button group',
        description:
            'Group buttons on one line or stack them in a vertical column.',
        group: 'Components',
        component: loadMDX(() => import('./Form/ButtonGroup.mdx'))
    },
    {
        path: 'Prompt/Spinner',
        layout: 'docs',
        title: 'Spinner',
        description:
            'Indicate the loading state of a component or page with BootCell spinners, built entirely with HTML, CSS, and no JavaScript.',
        group: 'Components',
        component: loadMDX(() => import('./Prompt/Spinner.mdx'))
    },
    {
        path: 'Reminder/Badge',
        layout: 'docs',
        title: 'Badge',
        description:
            'Documentation and examples for badges, our small count and labeling component.',
        group: 'Components',
        component: loadMDX(() => import('./Reminder/Badge.mdx'))
    },
    {
        path: 'Reminder/Icon',
        layout: 'docs',
        title: 'Icon',
        description: 'Wrapper component for Bootstrap Icons v1 (web font)',
        group: 'Components',
        component: loadMDX(() => import('./Reminder/Icon.mdx'))
    }
];
