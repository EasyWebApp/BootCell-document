import { History } from 'cell-router/source';
import { HTTPClient } from 'koajax';

export const history = new History();

export const github = new HTTPClient({
    baseURI: 'https://api.github.com/',
    responseType: 'json'
});
