import { documentReady, serviceWorkerUpdate } from 'web-utility';
import { DOMRenderer } from 'dom-renderer';
import { configure } from 'mobx';

import { PageRouter } from './page';

configure({ enforceActions: 'never' });

const { serviceWorker } = window.navigator;

if (process.env.NODE_ENV !== 'development')
    serviceWorker
        ?.register('sw.js')
        .then(serviceWorkerUpdate)
        .then(worker => {
            if (
                window.confirm(
                    'New version of this Web App detected, update now?'
                )
            )
                worker.postMessage({ type: 'SKIP_WAITING' });
        });

serviceWorker?.addEventListener('controllerchange', () =>
    window.location.reload()
);

documentReady.then(() => new DOMRenderer().render(<PageRouter />));
