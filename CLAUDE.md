# CLAUDE.md - Adaption Arena (Dota 2 Custom Game)

## Project Overview

**Adaption Arena** is a Dota 2 custom game mod featuring an arena game mode with hero mutations/variants and talent systems. The workspace contains 3 interlinked TypeScript subprojects.

## Workspace Structure

```
arena_mutation/
├── dota2_arena_mutation/   # Main custom game (x-template based)
├── generation/             # Hero KV code generator
└── l18n/                   # AI-powered localization tool
```

## Subproject Details

### 1. dota2_arena_mutation (Main Game)

- **Addon name:** `adaption_arena`
- **Stack:** TypeScript -> Lua (TSTL 1.31.3) + React 16 / Panorama UI + Webpack 5 + Gulp 4
- **TypeScript:** ~5.6.2
- **Node:** >=16

**Directory layout:**
- `game/scripts/src/` - Game logic (TypeScript transpiled to Lua)
  - `heroes/` - Hero implementations (antimage, crystal_maiden, mars)
  - `mechanics/` - Attribute bonuses, talent system, increments
  - `modules/` - GameMode, HeroController, UIModule, GoldNotifier, etc.
  - `utils/` - Timers, encryption, ModifierUtils
- `content/panorama/src/` - React UI (TSX)
  - `hud/` - Main HUD with abilities, talents, player bar
  - `hooks/` - useAbilityInfo, useHeroInfo, useXNetTable, etc.
  - `loading-screen/`, `end_screen/`
- `game/scripts/npc/` - Generated KV files (heroes, abilities, items, units)
- `localization/` - Localization source files (.loc.ts)
- `excels/` - Spreadsheet data (converted to KV)
- `scripts/` - Build/deploy scripts, gulpscripts, TSTL config

**Key commands:**
```bash
yarn dev          # Watch mode (gulp + webpack + tstl in parallel)
yarn prod         # Production build with encryption
yarn launch       # Launch Dota 2 with addon
yarn lint         # ESLint
yarn api          # Generate server API client from OpenAPI spec
yarn update_locs  # Update localization files
```

### 2. generation (Hero Code Generator)

- **Stack:** TypeScript + tsx runtime
- **Purpose:** Converts TS hero definitions -> Dota 2 KV files + Panorama JSON metadata

**Symlinks (set up via `yarn link:*`):**
- `base-heroes` -> `dota2_arena_mutation/game/scripts/src/heroes/`
- `npc-kvs` -> `dota2_arena_mutation/game/scripts/npc/`
- `panorama` -> `dota2_arena_mutation/content/panorama/src/`
- `vpks` -> local Dota 2 VPK updates folder

**Key command:**
```bash
yarn start        # Run generate-heroes.ts
```

**Key files:**
- `generate-heroes.ts` - Main pipeline (hero defs -> KV + JSON)
- `get-all-heroes.ts` - Imports hero definitions from base-heroes
- `get-ability-info.ts` - Extracts ability data from TypeScript
- `path-helper.ts` - File path utilities
- `tsbase.ts` - Lua/Node compatibility shim (print, _G, IS_LUA)

### 3. l18n (Localization/Translation)

- **Stack:** TypeScript + OpenAI (gpt-5-nano) / Ollama (mistral-small:22b)
- **Languages:** pt-BR, en-US, ru, zh-CN, es
- **Purpose:** AI-powered batch translation of game strings

**Key command:**
```bash
yarn start        # Run translation pipeline
```

**Key files:**
- `index.ts` - Main orchestrator
- `translate-openai.ts` - OpenAI backend (primary)
- `translate-ai.ts` - Ollama backend (local alternative)
- `ability.types.ts` - Core types (ValueProvider, Language enum, Ability/Modifier types)
- `build_string.ts` - String building for localization
- `external-abilities.ts` - Loads abilities/modifiers/plain text from game assets
- `engine/languages-manager.ts` - Multi-language coordinator
- `engine/values-manager.ts` - Per-language storage with dirty tracking
- `engine/translation-service.ts` - Translation facade
- `glossario.txt` - Game terminology glossary (injected into AI prompts)
- `raw-files/` - Cached translation JSON per language

**Data flow:** Game assets -> external-abilities -> build_string -> AI translation -> raw-files -> compile to addon_*.txt

## Game Design

### Mutation System
- Heroes have multiple mutation variants (up to 7 per hero)
- Each mutation modifies abilities, talents, and stat scaling
- Talent system: 4 rows x 4 talents per class/specialization
- 22 shared attribute talent types (armor, spell amp, mana regen, etc.)

### Implemented Heroes
| Hero | Variants | Status |
|------|----------|--------|
| Antimage | 7 (shadow_rogue, shadow_dancer, arcane_hunter, frost_mage, ice_stronghold, mana_addict, snow_walker) | Full code |
| Crystal Maiden | 4 (frost_archmage, ice_stronghold/frosty_fortress, frost_mage, snow_walker) | Full code |
| Mars | 4 (frost_mage, ice_stronghold, snow_walker) | Full code |
| 18 others | Localization only | Pending |

## Development Conventions

- **Language:** TypeScript everywhere (game logic, UI, tooling)
- **Game logic** is written in TS and transpiled to Lua via `typescript-to-lua`
- **UI** uses React with `react-panorama-x` for Dota 2 Panorama integration
- **KV files** in `game/scripts/npc/` are **generated** - edit hero TS definitions + run generation instead
- **Localization** .loc.ts files define translatable strings; l18n tool handles AI translation
- **Styling** uses LESS, compiled via Gulp

## Important Notes

- Never edit KV files in `game/scripts/npc/heroes/` directly - they are generated by the `generation` project
- The `tsbase.ts` shim must be loaded before generation scripts (provides Lua globals in Node context)
- Symlinks in `generation/` must be set up before first run (`yarn link:folders && yarn link:npc && yarn link:panorama`)
- API keys in l18n should be moved to environment variables (currently hardcoded)
