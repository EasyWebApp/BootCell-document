import { FC, WebCellProps } from 'web-cell';
import classNames from 'classnames';

import * as style from './Example.module.less';

export const Example: FC<WebCellProps<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => (
    <div
        className={classNames('border', 'p-7', style.example, className)}
        {...props}
    >
        {children}
    </div>
);
