import md5 from 'md5';

export const md5ObjectHash = obj => md5(JSON.stringify(obj));
