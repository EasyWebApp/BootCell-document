import { serviceWorkerUpdate } from 'web-utility/source/event';
import { documentReady, render, createCell } from 'web-cell';

import { PageRouter } from './page';

const { serviceWorker } = window.navigator;

serviceWorker
    ?.register('sw.js')
    .then(serviceWorkerUpdate)
    .then(worker => {
        if (window.confirm('New version of this Web App detected, update now?'))
            worker.postMessage({ type: 'SKIP_WAITING' });
    });

serviceWorker?.addEventListener('controllerchange', () =>
    window.location.reload()
);

documentReady.then(() => render(<PageRouter />));
