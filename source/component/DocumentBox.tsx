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
            <Row className={`w-100 ${className}`} {...props}>
                {deviceType !== 'phone' && (
                    <nav className="col-3 md:col-2 p-7 overflow-auto">
                        {Object.entries(menu).map(([group, list]) => (
                            <>
                                <h5 className="mx-3">{group}</h5>

                                {list.map(({ href, title }) => (
                                    <a
                                        className="d-block m-3"
                                        href={`#${href}`}
                                    >
                                        {title}
                                    </a>
                                ))}
                            </>
                        ))}
                    </nav>
                )}
                <main className="col-12 sm:col-9 md:col-10 p-7 border-start">
                    <h1 className="d-flex justify-content-between align-items-center">
                        {header}
                        <Button
                            variant="solid"
                            theme="primary"
                            size="sm"
                            href={API}
                        >
                            API
                        </Button>
                    </h1>
                    <p className="fs-lg fw-light">{description}</p>
                    <NavArticle>
                        <CodeCopy>{children}</CodeCopy>
                    </NavArticle>
                </main>
            </Row>
        );
    }
);
