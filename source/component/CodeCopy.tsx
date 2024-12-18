import { component, observer, on } from 'web-cell';

import { renderMode } from '../model/Meta';
import './CodeCopy.less';

@component({
    tagName: 'code-copy',
    mode: 'open',
    renderMode
})
@observer
export class CodeCopy extends HTMLElement {
    @on('click', 'pre[class*="language-"]')
    autoCopy({ target }: MouseEvent) {
        self.getSelection()
            .getRangeAt(0)
            .selectNode(target as Node);

        document.execCommand('copy');
    }

    render() {
        return <slot />;
    }
}
