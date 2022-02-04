import {
    WebCellElement,
    component,
    mixin,
    watch,
    createCell,
    Fragment,
    WebCellProps
} from 'web-cell';
import { watchScroll } from 'web-utility/source/DOM';
import classNames from 'classnames';

import style from './NavArticle.less';

interface NavArticleState {
    headerList: ReturnType<typeof watchScroll>;
}

@component({
    tagName: 'nav-article',
    renderTarget: 'children'
})
export class NavArticle extends mixin<WebCellProps, NavArticleState>() {
    @watch
    set defaultSlot(defaultSlot: WebCellElement) {
        this.setProps({ defaultSlot }).then(this.updateHeaderNav);
    }

    state = { headerList: [] };

    connectedCallback() {
        this.classList.add('row', 'm-0', style.box);

        self.addEventListener('resize', this.updateHeaderNav);

        super.connectedCallback();
    }

    disconnectedCallback() {
        self.removeEventListener('resize', this.updateHeaderNav);
    }

    updateHeaderNav = () => {
        const { firstElementChild: article } = this;

        if (!article || self.innerWidth < 768) return;

        const headerList = watchScroll(
            article as HTMLElement,
            ({ links: [item] }) => {
                for (const link of item?.parentElement.querySelectorAll(
                    `a.${style.active}`
                ) || [])
                    link.classList.remove(style.active);

                item?.classList.add(style.active);
            },
            4
        );
        this.setState({ headerList });
    };

    render({ defaultSlot }: WebCellProps, { headerList }: NavArticleState) {
        return (
            <>
                <article
                    className={classNames(
                        'col-12',
                        headerList[0] && 'col-md-9'
                    )}
                >
                    {defaultSlot}
                </article>
                {headerList[0] && (
                    <nav className="d-none d-md-block col-3 p-4 overflow-auto">
                        {headerList.map(({ level, id, text }) => (
                            <a
                                className="d-block pl-2 text-nowrap"
                                style={{
                                    fontSize: `${0.5 + (6 - level) / 10}rem`,
                                    textIndent: `${level - 1}rem`
                                }}
                                href={`#${id}`}
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
