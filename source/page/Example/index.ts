export default [
    {
        paths: ['example'],
        component: async () => (await import('./Home')).HomePage
    }
];
