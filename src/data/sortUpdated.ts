import { Repository } from './types';

const byUpdate = (a: Repository, b: Repository) => (a.pushed_at > b.pushed_at ? -1 : 1);

export { byUpdate };
