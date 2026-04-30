export type {
  MDictOptions,
  MDictHeader,
  KeyHeader,
  KeyInfoItem,
  RecordHeader,
  RecordInfo,
  KeyWordItem,
} from './mdict-base.js';

export { Mdict } from './mdict.js';
export { MDX, FuzzyWord } from './mdx.js';
export { MDD } from './mdd.js';

// Browser-friendly scanner. The Node-only `FileScanner` lives at
// './file-scanner.js' to keep the main entry free of `node:fs`.
export { BlobScanner } from './scanner.js';
export type { Scanner } from './scanner.js';
