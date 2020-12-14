import { observable } from 'mobx';
import { components } from '@octokit/openapi-types';

import { github } from './service';

export type Repository = components['schemas']['minimal-repository'];

export class RepositoryModel {
    @observable
    loading = false;

    @observable
    list: Repository[] = [];

    async getList() {
        this.loading = true;

        const { body } = await github.get<Repository[]>(
            'orgs/EasyWebApp/repos'
        );
        this.list = body.sort(({ updated_at: A }, { updated_at: B }) =>
            B.localeCompare(A)
        );
        this.loading = false;

        return this.list;
    }
}

export default new RepositoryModel();
