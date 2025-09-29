import { observer, WebCellComponent } from 'web-cell';
import { PageProps } from 'cell-router';

import { DocumentBox } from './component/DocumentBox';
import { side_menu } from './page/data';

export const loadMDX = <T extends () => Promise<{ default: WebCellComponent }>>(
    loader: T
) =>
    observer(async (props: PageProps) => {
        const exports = await loader();
        const meta = exports['frontmatter'];

        return (
            <DocumentBox
                {...props}
                menu={side_menu}
                path={props.path.split('#').at(-1)}
                header={meta.title}
                description={meta.description}
            >
                <exports.default />
            </DocumentBox>
        );
    });
