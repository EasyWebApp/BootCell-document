export default [
    {
        paths: ['example'],
        component: async () => (await import('./Home')).HomePage
    },
    {
        paths: ['example/offcanvas'],
        component: async () => (await import('./Offcanvas')).OffcanvasPage
    }
];
