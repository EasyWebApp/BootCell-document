import { HTTPClient } from 'koajax';

export const github = new HTTPClient({
    baseURI: 'https://api.github.com/',
    responseType: 'json'
});
