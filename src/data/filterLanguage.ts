import { Repository } from './types';

const filterJavaScript = (repo: Repository) => repo.language === 'JavaScript' && repo.created_at > '2022-09-01';
const filterTypeScript = (repo: Repository) =>
   repo.language === 'TypeScript' && repo.size > 100 && repo.created_at > '2022-09-01';

export { filterJavaScript, filterTypeScript };
