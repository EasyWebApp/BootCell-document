import { createCell } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';

export function HomePage() {
    return (
        <Jumbotron
            title="Example"
            description="Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts."
        >
            <Button
                outline
                target="_blank"
                href="https://github.com/EasyWebApp/BootCell-document/tree/master/source/page/Example"
            >
                Source Code
            </Button>
        </Jumbotron>
    );
}
