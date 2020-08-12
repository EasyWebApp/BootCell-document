import { VNodeChildElement, createCell } from 'web-cell';
import classNames from 'classnames';
import { Image } from 'boot-cell/source/Media/Image';

import style from './index.less';

export interface FeatureProps {
    reverse?: boolean;
    title: string | VNodeChildElement;
    summary: string | VNodeChildElement;
    logo: string;
}

export function Feature({ reverse, title, summary, logo }: FeatureProps) {
    return (
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
}
