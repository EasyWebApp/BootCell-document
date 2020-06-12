import { WebCellProps, createCell } from 'web-cell';
import classNames from 'classnames';

import style from './Example.less';

export function Example({ className, defaultSlot }: WebCellProps) {
    return (
        <div
            className={classNames(
                'border',
                'border-light',
                'p-4',
                style.example,
                className
            )}
        >
            {defaultSlot}
        </div>
    );
}
