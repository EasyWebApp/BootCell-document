export default [
    {
        paths: ['example'],
        component: async () => (await import('./Home')).HomePage
    },
    {
        paths: ['example/product'],
        component: async () => (await import('./Product')).ProductPage
    },
    {
        paths: ['example/offcanvas'],
        component: async () => (await import('./Offcanvas')).OffcanvasPage
    }
];
