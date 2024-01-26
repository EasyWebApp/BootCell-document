import { WebCellComponent } from 'web-cell';
import { PageProps } from 'cell-router';

import { DocumentBox } from './component/DocumentBox';
import { side_menu } from './page/data';

export function loadMDX<T extends () => Promise<{ default: WebCellComponent }>>(
    loader: T
) {
    return async () => {
        const exports = await loader();
        const meta = exports['frontmatter'];

        return {
            default: (props: PageProps) => (
                <DocumentBox
                    {...props}
                    menu={side_menu}
                    path=""
                    header={meta.title}
                    description={meta.description}
                >
                    <exports.default />
                </DocumentBox>
            )
        };
    };
}
