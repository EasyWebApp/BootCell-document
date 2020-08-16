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
        paths: ['example/checkout'],
        component: async () => (await import('./Checkout')).CheckoutPage
    },
    {
        paths: ['example/product'],
        component: async () => (await import('./Product')).ProductPage
    },
    {
        paths: ['example/cover'],
        component: async () => (await import('./Cover')).CoverPage
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
