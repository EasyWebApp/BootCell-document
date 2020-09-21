import { History } from 'cell-router/source';
import { HTTPClient } from 'koajax';

import { MetaModel } from './Meta';

export const history = new History();

export const meta = new MetaModel();

export const github = new HTTPClient({
    baseURI: 'https://api.github.com/',
    responseType: 'json'
});
