import { lazy } from 'web-cell';

export default [
    // {
    //     paths: ['example/album'],
    //     component: async () => (await import('./Album')).AlbumPage
    // },
    // {
    //     paths: ['example/pricing'],
    //     component: async () => (await import('./Pricing')).PricingPage
    // },
    // {
    //     paths: ['example/checkout'],
    //     component: async () => (await import('./Checkout')).CheckoutPage
    // },
    // {
    //     paths: ['example/product'],
    //     component: async () => (await import('./Product')).ProductPage
    // },
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
