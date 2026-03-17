# @fozikio/tools-journal

Journal plugin for cortex-engine. Write and read reflective journal entries keyed by date, with theme, mood, and evolution tracking.

## Install

```
npm install @fozikio/tools-journal
```

## Tools

| Tool | Description |
|------|-------------|
| `journal_write` | Write or update a reflective journal entry for a given date |
| `journal_read` | Read journal entries by specific date or last N days |

## Usage

```yaml
# cortex-engine config
plugins:
  - package: "@fozikio/tools-journal"
```

```typescript
import journalPlugin from "@fozikio/tools-journal";
import { CortexEngine } from "@fozikio/cortex-engine";

const engine = new CortexEngine({
  plugins: [journalPlugin],
});
```

## Documentation

- **[Wiki](https://github.com/Fozikio/cortex-engine/wiki)** — Guides, architecture, and full tool reference
- **[Plugin Authoring](https://github.com/Fozikio/cortex-engine/wiki/Plugin-Authoring)** — Build your own plugins
- **[Contributing](https://github.com/Fozikio/.github/blob/main/CONTRIBUTING.md)** — How to contribute

## License

MIT
