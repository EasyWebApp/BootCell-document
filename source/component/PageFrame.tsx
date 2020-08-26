import {
    WebCellProps,
    VNodeChildElement,
    component,
    mixin,
    watch,
    attribute,
    createCell,
    Fragment
} from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import { watchScroll } from 'web-utility/source/DOM';
import { Button } from 'boot-cell/source/Form/Button';

import style from './PageFrame.less';

interface PageFrameProps extends WebCellProps {
    menu: Record<string, HTMLHyperLinkProps[]>;
    header: string;
    description: string;
}

interface PageFrameState {
    headerList: ReturnType<typeof watchScroll>;
}

@component({
    tagName: 'page-frame',
    renderTarget: 'children'
})
export class PageFrame extends mixin<PageFrameProps, PageFrameState>() {
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
        this.setProps({ defaultSlot }).then(
            () => this.box && this.updateHeaderNav(this.box)
        );
    }

    state = { headerList: [] };

    connectedCallback() {
        this.classList.add('row', 'align-items-start', style.box);

        super.connectedCallback();
    }

    updateHeaderNav(content: HTMLElement) {
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

    render(
        { header, menu, description, defaultSlot }: PageFrameProps,
        { headerList }: PageFrameState
    ) {
        const API = `https://web-cell.dev/BootCell/interfaces/${header
            .replace(' ', '')
            .toLowerCase()}props.html`;

        return (
            <Fragment>
                <nav className="col-4 col-md-2 p-4 overflow-auto">
                    {Object.entries(menu).map(([group, list]) => (
                        <Fragment>
                            <h5 className="mx-2">{group}</h5>

                            {list.map(({ href, title }) => (
                                <a className="d-block m-2" href={href}>
                                    {title}
                                </a>
                            ))}
                        </Fragment>
                    ))}
                </nav>

                <main className="col-8 p-4 border-left">
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

                <nav className="col-2 p-4 overflow-auto d-none d-md-block">
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
            </Fragment>
        );
    }
}
