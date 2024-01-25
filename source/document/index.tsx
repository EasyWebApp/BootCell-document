import { WebCellComponent, lazy } from 'web-cell';
import { PageProps } from 'cell-router';

import { DocumentBox } from '../component/DocumentBox';

function loadMDX<T extends () => Promise<{ default: WebCellComponent }>>(
    loader: T
) {
    return async () => {
        const exports = await loader();
        const meta = exports['frontmatter'];

        return {
            default: (props: PageProps) => (
                <DocumentBox
                    {...props}
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

export default [
    {
        path: 'icon',
        component: lazy(loadMDX(() => import('./Icon.mdx')))
    }
];
