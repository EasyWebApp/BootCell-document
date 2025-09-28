import { FC, PropsWithChildren, WebCellProps, observer } from 'web-cell';
import { Button, Row } from 'boot-cell';

import { meta } from '../model';
import { CodeCopy } from './CodeCopy';
import { NavArticle } from './NavArticle';

export interface DocumentBoxProps extends WebCellProps<HTMLDivElement> {
    menu?: Record<string, WebCellProps<HTMLAnchorElement>[]>;
    path: string;
    header: string;
    description: string;
}

export const DocumentBox: FC<PropsWithChildren<DocumentBoxProps>> = observer(
    ({
        className = '',
        path,
        menu = [],
        header,
        description,
        children,
        ...props
    }) => {
        const [_, name] = path.split('/');
        const { deviceType } = meta,
            API = `https://web-cell.dev/BootCell/interfaces/${name}Props.html`;

        return (
            <Row className={`vw-100 ${className}`} {...props}>
                {deviceType !== 'phone' && (
                    <nav className="col-3 col-md-2 p-4 overflow-auto">
                        {Object.entries(menu).map(([group, list]) => (
                            <>
                                <h5 className="mx-2">{group}</h5>

                                {list.map(({ href, title }) => (
                                    <a
                                        className="d-block m-2"
                                        href={`#${href}`}
                                    >
                                        {title}
                                    </a>
                                ))}
                            </>
                        ))}
                    </nav>
                )}
                <main className="col-12 col-sm-9 col-md-10 p-4 border-left">
                    <h1 className="d-flex justify-content-between align-items-center">
                        {header}
                        <Button variant="primary" size="sm" href={API}>
                            API
                        </Button>
                    </h1>
                    <p className="lead">{description}</p>
                    <NavArticle>
                        <CodeCopy>{children}</CodeCopy>
                    </NavArticle>
                </main>
            </Row>
        );
    }
);
