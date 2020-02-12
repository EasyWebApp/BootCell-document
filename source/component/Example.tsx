import { createCell } from 'web-cell';
import { WebCellProps } from 'boot-cell/source/utility/type';

import style from './Example.module.css';

export function Example({ defaultSlot }: WebCellProps) {
    return (
        <div className={`border border-light p-4 ${style.box}`}>
            {defaultSlot}
        </div>
    );
}
