import { JsxChildren } from 'dom-renderer';
import { FC } from 'web-cell';
import classNames from 'classnames';
import { Image } from 'boot-cell';

import * as style from './index.module.less';

export interface FeatureProps extends Record<'title' | 'summary', JsxChildren> {
    reverse?: boolean;
    logo: string;
}

export const Feature: FC<FeatureProps> = ({
    reverse,
    title,
    summary,
    logo
}) => (
    <div className="row">
        <div className={classNames('col-md-7', reverse && 'order-md-2')}>
            <h2 className={style['featurette-heading']}>{title}</h2>
            <p className="lead">{summary}</p>
        </div>
        <div className={classNames('col-md-5', reverse && 'order-md-1')}>
            <Image fluid style={{ width: '500px' }} src={logo} />
        </div>
    </div>
);
