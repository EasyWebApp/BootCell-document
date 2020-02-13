import { createCell } from 'web-cell';
import { HTMLProps, WebCellProps } from 'boot-cell/source/utility/type';
import classNames from 'classnames';

export function Example({ className, defaultSlot }: HTMLProps & WebCellProps) {
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
