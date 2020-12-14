import {
    WebCellProps,
    component,
    mixin,
    watch,
    attribute,
    createCell,
    Fragment
} from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import { observer } from 'mobx-web-cell';
import { Button } from 'boot-cell/source/Form/Button';

import { meta } from '../model';
import { CodeCopy } from './CodeCopy';
import { NavArticle } from './NavArticle';
import style from './NavArticle.less';

interface DocumentBoxProps extends WebCellProps {
    menu: Record<string, HTMLHyperLinkProps[]>;
    header: string;
    description: string;
}

@observer
@component({
    tagName: 'document-box',
    renderTarget: 'children'
})
export class DocumentBox extends mixin<DocumentBoxProps>() {
    @watch
    menu = [];

    @attribute
    @watch
    header = '';

    @attribute
    @watch
    description = '';

    connectedCallback() {
        this.classList.add('row', 'align-items-start', style.box);

        super.connectedCallback();
    }

    render({ header, menu, description, defaultSlot }: DocumentBoxProps) {
        const { deviceType } = meta,
            API = `https://web-cell.dev/BootCell/interfaces/${header
                .replace(' ', '')
                .toLowerCase()}props.html`;

        return (
            <>
                {deviceType === 'phone' ? null : (
                    <nav className="col-3 col-md-2 p-4 overflow-auto">
                        {Object.entries(menu).map(([group, list]) => (
                            <>
                                <h5 className="mx-2">{group}</h5>

                                {list.map(({ href, title }) => (
                                    <a className="d-block m-2" href={href}>
                                        {title}
                                    </a>
                                ))}
                            </>
                        ))}
                    </nav>
                )}
                <main className="col-12 col-sm-9 col-md-10 p-4 border-left">
                    <h1 className="d-flex justify-content-between align-items-center">
                        {header}
                        <Button color="primary" size="sm" href={API}>
                            API
                        </Button>
                    </h1>
                    <p className="lead">{description}</p>
                    <NavArticle>
                        <CodeCopy>{defaultSlot}</CodeCopy>
                    </NavArticle>
                </main>
            </>
        );
    }
}
