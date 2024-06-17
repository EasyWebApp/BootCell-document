import { promises } from 'fs';
import { filter, traverse } from 'fs-match';
import { join } from 'path';
import { parse } from 'yaml';

const title = 'MDX index creator',
    [folder] = process.argv.slice(2);

const MDXPattern = /\.(mdx?|markdown)$/,
    sourceCode: string[] = [],
    targetPath = join(folder, 'index.ts');

console.time(title);

(async () => {
    for await (const filePath of filter(traverse(folder), MDXPattern)) {
        const content = await promises.readFile(filePath, {
            encoding: 'utf-8'
        });
        const [_, frontMatter] =
            content.match(/^---([\s\S]*?)[\r\n]+---/m) || [];

        if (!frontMatter) continue;

        const meta = JSON.stringify(parse(frontMatter), null, 4)
            .slice(1, -1)
            .trim();
        const path = filePath.replaceAll('\\', '/').slice(folder.length);

        sourceCode.push(`{
    path: '${path.replace(MDXPattern, '')}',
    ${meta},
    component: lazy(loadMDX(() => import('./${path}')))
}`);
    }

    await promises.writeFile(
        targetPath,
        `// This file is created by "${title}" script,
// please don't edit it manually!

import { lazy } from 'web-cell';

import { loadMDX } from '../utility';

export default [
${sourceCode}
];
`
    );

    console.log(`[save] ${targetPath}`);
    console.timeEnd(title);
})();
