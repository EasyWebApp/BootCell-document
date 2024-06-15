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
    // {
    //     paths: ['example/cover'],
    //     component: async () => (await import('./Cover')).CoverPage
    // },
    {
        path: 'example/carousel',
        component: lazy(() => import('./Carousel'))
    }
    // {
    //     paths: ['example/jumbotron'],
    //     component: async () => (await import('./Jumbotron')).JumbotronPage
    // },
    // {
    //     paths: ['example/offcanvas'],
    //     component: async () => (await import('./Offcanvas')).OffcanvasPage
    // }
];
