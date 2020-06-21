export default [
    {
        paths: ['example'],
        component: async () => (await import('./Home')).HomePage
    },
    {
        paths: ['example/pricing'],
        component: async () => (await import('./Pricing')).PricingPage
    },
    {
        paths: ['example/product'],
        component: async () => (await import('./Product')).ProductPage
    },
    {
        paths: ['example/carousel'],
        component: async () => (await import('./Carousel')).CarouselPage
    },
    {
        paths: ['example/offcanvas'],
        component: async () => (await import('./Offcanvas')).OffcanvasPage
    }
];
