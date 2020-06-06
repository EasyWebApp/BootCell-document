import {
    WebCellProps,
    component,
    mixin,
    watch,
    attribute,
    createCell,
    Fragment
} from 'web-cell';
import { Button } from 'boot-cell/source/Form/Button';
import { HeaderList } from 'boot-cell/source/Navigator/HeaderList';

import { SideNavProps, SideNav } from './SideNav';

interface PageFrameProps extends WebCellProps {
    menu: SideNavProps['menu'];
    header: string;
    description: string;
}

@component({
    tagName: 'page-frame',
    renderTarget: 'children'
})
export class PageFrame extends mixin<PageFrameProps>() {
    @watch
    menu = [];

    @attribute
    @watch
    header = '';

    @attribute
    @watch
    description = '';

    private box: HTMLElement;
    private nav: HeaderList;

    connectedCallback() {
        this.classList.add('d-flex', 'align-items-start');

        super.connectedCallback();
    }

    updatedCallback() {
        if (this.box && this.nav) this.nav.spy(this.box);
    }

    render({ header, menu, description, defaultSlot }: PageFrameProps) {
        const API = `https://web-cell.dev/BootCell/interfaces/${header
            .replace(' ', '')
            .toLowerCase()}props.html`;

        return (
            <Fragment>
                <SideNav
                    className="sticky-top"
                    style={{
                        top: '3.5rem',
                        height: 'calc(100vh - 3.5rem)',
                        zIndex: 1019
                    }}
                    menu={menu}
                />

                <main className="flex-fill p-4 border-left">
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

                <HeaderList
                    className="p-4 d-none d-md-block"
                    style={{ top: '3.5rem' }}
                    ref={(node: HeaderList) => (this.nav = node)}
                />
            </Fragment>
        );
    }
}
