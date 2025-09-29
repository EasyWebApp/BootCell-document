import { WebCell, component, observer } from 'web-cell';
import { watchScroll } from 'web-utility';
import { observable } from 'mobx';
import classNames from 'classnames';
import { Row } from 'boot-cell';

import { renderMode } from '../model/Meta';
import * as style from './NavArticle.module.less';

export interface NavArticle extends WebCell {}

@component({
    tagName: 'nav-article',
    mode: 'open',
    renderMode
})
@observer
export class NavArticle extends HTMLElement implements WebCell {
    @observable
    accessor headerList: ReturnType<typeof watchScroll> = [];

    connectedCallback() {
        globalThis.addEventListener?.('resize', this.updateHeaderNav);
        this.addEventListener('slotchange', this.updateHeaderNav);
    }

    disconnectedCallback() {
        globalThis.removeEventListener?.('resize', this.updateHeaderNav);
        this.removeEventListener('slotchange', this.updateHeaderNav);
    }

    updateHeaderNav = () => {
        const [article] = this.shadowRoot
            .querySelector('slot')
            .assignedElements();

        if (!article || self.innerWidth < 768) return;

        this.headerList = watchScroll(
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
    };

    renderContent() {
        const { headerList } = this;

        return (
            <Row className={`m-0 ${style.box}`}>
                <article
                    className={classNames(
                        'col-12',
                        headerList[0] && 'col-md-9'
                    )}
                >
                    <slot />
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
            </Row>
        );
    }

    render() {
        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/bootstrap@5/dist/css/bootstrap.min.css"
                />
                {this.renderContent()}
            </>
        );
    }
}
