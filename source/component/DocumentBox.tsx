import {
    WebCellProps,
    VNodeChildElement,
    component,
    mixin,
    watch,
    attribute,
    on,
    createCell,
    Fragment
} from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import { watchScroll } from 'web-utility/source/DOM';
import { autorun } from 'mobx';
import { observer } from 'mobx-web-cell';
import { Button } from 'boot-cell/source/Form/Button';

import style from './DocumentBox.less';
import { meta } from '../model';

interface DocumentBoxProps extends WebCellProps {
    menu: Record<string, HTMLHyperLinkProps[]>;
    header: string;
    description: string;
}

interface DocumentBoxState {
    headerList: ReturnType<typeof watchScroll>;
}

@observer
@component({
    tagName: 'document-box',
    renderTarget: 'children'
})
export class DocumentBox extends mixin<DocumentBoxProps, DocumentBoxState>() {
    @watch
    menu = [];

    @attribute
    @watch
    header = '';

    @attribute
    @watch
    description = '';

    private box?: HTMLElement;

    @watch
    set defaultSlot(defaultSlot: VNodeChildElement[]) {
        this.setProps({ defaultSlot }).then(() =>
            this.updateHeaderNav(this.box)
        );
    }

    state = { headerList: [] };

    connectedCallback() {
        this.classList.add('row', 'align-items-start', style.box);

        super.connectedCallback();

        autorun(() => this.updateHeaderNav(this.box));
    }

    updateHeaderNav(content?: HTMLElement) {
        if (!content || meta.deviceType !== 'desktop') return;

        const headerList = watchScroll(
            content,
            ({ links: [item] }) => {
                for (const link of item?.parentElement.querySelectorAll(
                    'a.active'
                ) || [])
                    link.classList.remove('active');

                item?.classList.add('active');
            },
            4
        );
        this.setState({ headerList });
    }

    @on('click', 'pre[class*="language-"]')
    autoCopy({ target }: MouseEvent) {
        self.getSelection()
            .getRangeAt(0)
            .selectNode(target as Node);

        document.execCommand('copy');
    }

    render(
        { header, menu, description, defaultSlot }: DocumentBoxProps,
        { headerList }: DocumentBoxState
    ) {
        const { deviceType } = meta,
            API = `https://web-cell.dev/BootCell/interfaces/${header
                .replace(' ', '')
                .toLowerCase()}props.html`;

        return (
            <>
                {deviceType === 'phone' ? null : (
                    <nav className="col-4 col-md-2 p-4 overflow-auto">
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
                <main className="col-12 col-sm-8 p-4 border-left">
                    <h1 className="d-flex justify-content-between align-items-center">
                        {header}
                        <Button size="sm" href={API}>
                            API
                        </Button>
                    </h1>
                    <p className="lead">{description}</p>

                    <div ref={(node: HTMLElement) => (this.box = node)}>
                        {defaultSlot}
                    </div>
                </main>

                {deviceType !== 'desktop' ? null : (
                    <nav className="col-2 p-4 overflow-auto">
                        {headerList.map(({ level, id, text }) => (
                            <a
                                className="d-block pl-2 text-nowrap"
                                style={{
                                    fontSize: `${0.5 + (6 - level) / 10}rem`,
                                    textIndent: `${level - 1}rem`
                                }}
                                href={'#' + id}
                            >
                                {text}
                            </a>
                        ))}
                    </nav>
                )}
            </>
        );
    }
}
