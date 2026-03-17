/**
 * @fozikio/tools-journal — journal management plugin for cortex-engine.
 *
 * Provides 2 tools: journal_write, journal_read.
 * Uses the generic CortexStore API (put/get/update/query) on the 'journals' collection.
 */

import type { ToolPlugin } from '@fozikio/cortex-engine';
import { journalWriteTool } from './tools/journal-write.js';
import { journalReadTool } from './tools/journal-read.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-journal',
  tools: [
    journalWriteTool,
    journalReadTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { journalWriteTool } from './tools/journal-write.js';
export { journalReadTool } from './tools/journal-read.js';
