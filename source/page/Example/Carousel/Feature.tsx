import { JsxChildren } from 'dom-renderer';
import { FC } from 'web-cell';
import classNames from 'classnames';
import { Image, Row } from 'boot-cell';

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
    <Row>
        <Col md={7} className={classNames({ 'order-md-2': reverse })}>
            <h2 className={style['featurette-heading']}>{title}</h2>
            <p className="lead">{summary}</p>
        </Col>
        <Col md={5} className={classNames({ 'order-md-1': reverse })}>
            <Image fluid style={{ width: '500px' }} src={logo} />
        </Col>
    </Row>
);
