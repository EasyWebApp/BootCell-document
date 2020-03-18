import { WebCellProps, createCell } from 'web-cell';
import { HTMLProps, HTMLHyperLinkProps } from 'web-utility/source/DOM-type';

interface SideNavProps extends WebCellProps, HTMLProps {
    menu: { [group: string]: HTMLHyperLinkProps[] };
}

export function SideNav({ menu, defaultSlot, ...rest }: SideNavProps) {
    return (
        <nav {...rest}>
            <ul className="list-unstyled p-4 h-100 overflow-auto">
                {Object.entries(menu).map(([group, list]) => (
                    <li>
                        <h5>{group}</h5>

                        <ul className="list-unstyled">
                            {list.map(({ href, title }) => (
                                <li>
                                    <a href={href}>{title}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
