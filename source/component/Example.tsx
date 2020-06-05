import { WebCellProps, createCell } from 'web-cell';
import classNames from 'classnames';

export function Example({ className, defaultSlot }: WebCellProps) {
    return (
        <div
            className={classNames(
                'border',
                'border-light',
                'p-4',
                'bd-example',
                className
            )}
        >
            {defaultSlot}
        </div>
    );
}
