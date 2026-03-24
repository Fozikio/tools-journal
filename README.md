# @fozikio/tools-journal

> **Built into cortex-engine v1.0.0+**
> These tools are now included in [`@fozikio/cortex-engine`](https://github.com/Fozikio/cortex-engine) core � no separate install needed. This package remains available for use with cortex-engine **v0.x only**. If you're on v1.0.0+, just install `@fozikio/cortex-engine`.


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
