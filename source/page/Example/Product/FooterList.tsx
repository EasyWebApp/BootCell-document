import { createCell } from 'web-cell';
import { HTMLHyperLinkProps } from 'web-utility/source/DOM-type';
import { isXDomain } from 'web-utility/source/URL';

export interface FooterListProps {
    title: string;
    menu: HTMLHyperLinkProps;
}

export function FooterList({ title, menu }: FooterListProps) {
    return (
        <div className="col-4 col-md">
            <h5>{title}</h5>
            <ul className="list-unstyled text-small">
                {menu.map(({ href, title }) => (
                    <li>
                        <a
                            className="text-muted"
                            target={isXDomain(href) ? '_blank' : ''}
                            href={href}
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
