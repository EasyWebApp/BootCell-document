import { createCell } from 'web-cell';
import { HTMLProps, HTMLHyperLinkProps } from 'boot-cell/source/utility/type';

interface SideNavProps extends HTMLProps {
    menu: { [group: string]: HTMLHyperLinkProps[] };
}

export function SideNav({ menu, ...rest }: SideNavProps) {
    return (
        <nav {...rest}>
            <ul className="list-unstyled">
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
