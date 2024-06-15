import { FC, WebCellProps } from 'web-cell';
import { HTMLHyperLinkProps, isXDomain } from 'web-utility';
import classNames from 'classnames';

export interface FooterListProps extends WebCellProps {
    colSpan: number;
    title: string;
    menu: HTMLHyperLinkProps[];
}

export const FooterList: FC<FooterListProps> = ({ colSpan, title, menu }) => (
    <div className={classNames(`col-${colSpan}`, 'col-md')}>
        <h5>{title}</h5>
        <ul className="list-unstyled text-small">
            {menu.map(({ href, title }) => (
                <li key={title}>
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
