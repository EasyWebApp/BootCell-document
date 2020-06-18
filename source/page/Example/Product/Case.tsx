import { createCell } from 'web-cell';
import classNames from 'classnames';
import { BackgroundColors } from 'boot-cell/source/utility/constant';

import style from './Case.less';

export interface CaseProps {
    background?: BackgroundColors;
    color?: BackgroundColors;
    name: string;
    description: string;
}

const dark_colors = ['dark', 'primary'];

export function Case({ background, color, name, description }: CaseProps) {
    return (
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
}
