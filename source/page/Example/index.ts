import { lazy } from 'web-cell';

export default [
    // {
    //     paths: ['example/album'],
    //     component: async () => (await import('./Album')).AlbumPage
    // },
    {
        path: 'example/pricing',
        component: lazy(() => import('./Pricing'))
    },
    // {
    //     paths: ['example/checkout'],
    //     component: async () => (await import('./Checkout')).CheckoutPage
    // },
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
