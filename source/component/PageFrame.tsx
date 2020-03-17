import { WebCellProps, createCell } from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import { Button } from 'boot-cell/source/Form/Button';

import { SideNav } from './SideNav';

interface PageFrameProps extends WebCellProps {
    menu: { [key: string]: HTMLHyperLinkProps[] };
    title: string;
    description: string;
}

export function PageFrame({
    menu,
    title,
    description,
    defaultSlot
}: PageFrameProps) {
    const API = `https://web-cell.dev/BootCell/interfaces/${title
        .replace(' ', '')
        .toLowerCase()}props.html`;

    return (
        <div className="d-flex">
            <SideNav className="border-right p-4" menu={menu} />

            <div className="flex-fill p-4">
                <h1 className="d-flex justify-content-between align-items-center">
                    {title}
                    <Button size="sm" href={API}>
                        API
                    </Button>
                </h1>
                <p className="lead">{description}</p>

                {defaultSlot}
            </div>
        </div>
    );
}
