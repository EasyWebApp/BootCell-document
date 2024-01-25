import { FC, WebCellProps } from 'web-cell';
import classNames from 'classnames';

import * as style from './Example.module.less';

export const Example: FC<WebCellProps<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => (
    <div
        className={classNames(
            'border',
            'border-light',
            'p-4',
            style.example,
            className
        )}
        {...props}
    >
        {children}
    </div>
);
