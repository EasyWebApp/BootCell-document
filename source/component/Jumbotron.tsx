import { createCell, Fragment } from 'web-cell';
import { WebCellProps } from 'boot-cell/source/utility/type';
import classNames from 'classnames';

export interface JumbotronProps extends WebCellProps {
    fluid?: boolean;
    title: string;
    description: string;
}

export function Jumbotron({
    fluid,
    title,
    description,
    defaultSlot
}: JumbotronProps) {
    const content = (
        <Fragment>
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>

            {defaultSlot[0] && (
                <Fragment>
                    <hr className="my-4" />
                    {defaultSlot}
                </Fragment>
            )}
        </Fragment>
    );

    return (
        <div className={classNames('jumbotron', fluid && 'jumbotron-fluid')}>
            {fluid ? <div className="container">{content}</div> : content}
        </div>
    );
}
