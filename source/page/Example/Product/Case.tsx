import { FC } from 'web-cell';
import classNames from 'classnames';
import { BackgroundColor } from 'boot-cell';

import * as style from './Case.module.less';

export type CaseProps = Partial<
    Record<'background' | 'color', BackgroundColor>
> &
    Record<'name' | 'description', string>;

const dark_colors = ['inverse', 'primary'];

export const Case: FC<CaseProps> = ({
    background,
    color,
    name,
    description
}) => (
    <section
        className={classNames(
            'md:flex-grow-1',
            'md:me-5',
            'pt-5',
            'px-5',
            'md:pt-12',
            'md:px-12',
            'text-center',
            'position-relative',
            `bg-${background}`,
            dark_colors.includes(background) && 'fg-white'
        )}
    >
        <div className="my-5 py-5">
            <h2 className="fs-4xl fw-light">{name}</h2>
            <p className="fs-lg fw-light">{description}</p>
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
