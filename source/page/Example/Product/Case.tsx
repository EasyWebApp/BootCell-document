import { FC } from 'web-cell';
import classNames from 'classnames';
import { BackgroundColor } from 'boot-cell';

import * as style from './Case.module.less';

export type CaseProps = Partial<
    Record<'background' | 'color', BackgroundColor>
> &
    Record<'name' | 'description', string>;

const dark_colors = ['dark', 'primary'];

export const Case: FC<CaseProps> = ({
    background,
    color,
    name,
    description
}) => (
    <section
        className={classNames(
            'flex-md-grow-1',
            'mr-md-3',
            'pt-3',
            'px-3',
            'pt-md-5',
            'px-md-5',
            'text-center',
            'position-relative',
            `bg-${background}`,
            dark_colors.includes(background) && 'text-white'
        )}
    >
        <div className="my-3 py-3">
            <h2 className="display-5">{name}</h2>
            <p className="lead">{description}</p>
        </div>
        <div
            className={classNames(
                `bg-${color}`,
                'shadow-sm',
                'mx-auto',
                style.preview
            )}
        />
    </section>
);
