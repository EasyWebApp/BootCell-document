import { component, mixin, on } from 'web-cell';

import './CodeCopy.less';

@component({
    tagName: 'code-copy',
    renderTarget: 'children'
})
export class CodeCopy extends mixin() {
    @on('click', 'pre[class*="language-"]')
    autoCopy({ target }: MouseEvent) {
        self.getSelection()
            .getRangeAt(0)
            .selectNode(target as Node);

        document.execCommand('copy');
    }
}
