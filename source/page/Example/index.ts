import { lazy } from 'web-cell';

export default [
    {
        path: 'example/album',
        component: lazy(() => import('./Album'))
    },
    {
        path: 'example/pricing',
        component: lazy(() => import('./Pricing'))
    },
    {
        path: 'example/checkout',
        component: lazy(() => import('./Checkout'))
    },
    {
        path: 'example/product',
        component: lazy(() => import('./Product'))
    },
    {
        path: 'example/cover',
        component: lazy(() => import('./Cover'))
    },
    {
        path: 'example/carousel',
        component: lazy(() => import('./Carousel'))
    },
    {
        path: 'example/jumbotron',
        component: lazy(() => import('./Jumbotron'))
    },
    {
        path: 'example/offcanvas',
        component: lazy(() => import('./Offcanvas'))
    }
];
