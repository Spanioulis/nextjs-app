import { Repository } from './types';

const filterJavaScript = (repo: Repository) => repo.language === 'JavaScript';
const filterTypeScript = (repo: Repository) => repo.language === 'TypeScript';

export { filterJavaScript, filterTypeScript };
