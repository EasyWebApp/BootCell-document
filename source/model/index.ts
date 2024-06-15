import { RepositoryModel } from 'mobx-github';

import { MetaModel } from './Meta';

export const meta = new MetaModel();
export const repository = new RepositoryModel('EasyWebApp');
