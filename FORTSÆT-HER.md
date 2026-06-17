# DragonBook — Continue Here  🐉

> **For Morris:** Attach this file **+ `dragebog.html`** in a fresh chat (or open both in Claude Code) and say *"Continue the DragonBook build — read FORTSÆT-HER.md."* That's all the next session needs.
> Conversation in **Danish**, app UI in **English**, outputs kept concise.

---

## What this is
**DragonBook — D&D Edition**: a single self-contained `dragebog.html` (~1500 lines, no build step, no external JS deps). A D&D 5e character + dice + combat companion. Heraldic red/gold dragon theme. Tagline **"D&D · Dice on the Run"**.

**Files in `/mnt/user-data/outputs/`:**
- `dragebog.html` — **THE APP** (all edits target this).
- `srd-combat-reference.md` — SRD 5.1 data reference (weapons, classes, combo progressions).
- `terningebakke.html` — old standalone dice roller (superseded, ignore).

---

## How it's wired
- **Router:** `go(view)` toggles `.view` / `.view.active`. Views: `view-home`, `view-edit`, `view-detail`, `view-attack`, `view-dice`. Combat is a modal `#combatModal`.
- **Storage:** `Store.load()/Store.save()` use `window.storage` with in-memory fallback. Keys: `'characters'`, `'diceSkin'`. (No localStorage — not supported in this environment.)
- **Theme:** CSS vars — `--bg #170D10`, `--gold #C9A24B`, `--gold-hi #F0CE84`, `--crimson #B7403B`, `--bone #ECE3D2`, `--edge #4A2B30`, `--edge-gold #5e4326`. Fonts: Cinzel (display), Sora (body), Space Mono (numbers).
- **Dragon photo** is embedded as base64 (`DRAGON_BG`) — the combat tray background.

## Data models
**Character**
```js
{ id, name, race, klasse, height, level /*1–20*/, stats:{str,dex,con,int,wis,cha}, attacks:[] }
```
**Attack**
```js
{
  id, name,
  weapon,            // SRD weapon name, or '' for custom
  hands,             // 1 | 2  (grip for Versatile weapons)
  base:{n,s},        // editable base damage die, auto-filled from weapon
  auto,              // bool — auto-calc to-hit/damage from stats
  ability,           // 'auto' | 'str' | 'dex' | ... (which stat in auto mode)
  prof,              // bool — proficient → adds proficiency bonus to hit
  toHit,             // manual TOTAL (manual mode) OR extra bonus (auto mode)
  dmg:{ dice:{4,6,8,10,12}, flat },  // EXTRA dice + flat (manual total OR extra in auto)
  type,              // damage type
  combos:[ {key, n?, flat?, slot?, undead?} ]  // toggleable riders
}
```

## Key helpers (don't re-derive these)
- `mod(score)` · `pb(level)` (5e proficiency: 2 + floor((L-1)/4)) · `modStr(v)`
- `weaponAbilityKey(a,c)` — melee→STR, ranged→DEX, finesse→higher of STR/DEX, or explicit override
- `effToHit(a,c)` / `effFlat(a,c)` — the source of truth for to-hit & flat. Auto = abilityMod + (prof?PB:0) + extra; Manual = the stored total. **Always pass the character `c`.**
- `WEAPONS` (37 SRD objects: `{name,cat,n,s,type, fin?,light?,heavy?,two?,reach?,thrown?,ammo?,load?,vers?[n,s]}`), `WEAPON_CATS`, `weaponTags(w)`, `weaponBase(weapon,hands)`
- `attackCounts(a)` — merges base + extra dice; has legacy fallbacks (see below)
- `COMBOS` catalog + `COMBO_KEYS`, `comboContribution(c)`, `comboLabel(c)`
- Dice: `facetSVG(...)`, `rollInTray(...)`, `SKINS`, `colorFor(s)`, dungeon/floor URIs

## Combat flow
`startAttack(charId,atkId)` → choose advantage → `rollToHit()` (uses `effToHit`, then `renderCombos()` shows toggle chips) → `rollDamage()` (`attackCounts` + active combos' dice, doubled on crit; flat = `effFlat` + combo flat, **flat NOT doubled on crit**). Nat20 → gold glow + fire layer; nat1 → red fumble.

---

## Done so far
1. Dice roller core — faceted polyhedral d4–d100, advantage/disadvantage, modifiers, crit/fumble, history, haptics.
2. Multi-screen app — character roster, create/edit, ability scores via animated 4d6-drop-lowest, class→emblem icons.
3. Metallic dice skins + per-die-type "Dice appearance" studio.
4. 3D faceted dice look; procedural dungeon scene replaced by the user's real dragon photo; fire-on-nat20.
5. **Point 1+2** — full SRD weapon table (grouped dropdown showing each die, e.g. "Longsword · 1d8 (1d10)"), property **badges**, **1H/2H grip toggle** for Versatile, base-damage separated from extra dice, **editable Base damage** control (auto-filled, override die/count for magic/homebrew).
6. **Point 3** — **Combos**: Sneak Attack, Rage, Hunter's Mark, Hex, Divine Smite (roll-time spell-slot picker + vs undead/fiend), Improved Smite. Attach in editor, toggle per swing in combat; dice double on crit, Rage flat doesn't.
7. **Point 4** — character **level** + **auto to-hit/damage** from ability mod + proficiency. "Manual / Auto from stats" toggle, ability chips, Proficient toggle, live breakdown. To-hit/flat steppers become "extra on top" in auto mode.
8. **Branding** — top-left **SRD 5.1 · CC BY 4.0** chip (taps to reveal full attribution), **"by Morris"** credit, slogan tagline.

## Backward compatibility (keep intact)
- **Legacy attacks** (no `hands`, no `base`): their `dmg.dice` already holds the weapon die → `attackCounts` uses dice as-is, no double count. Loaded in the editor as "custom" (weapon cleared).
- **Point-1/2-era attacks** (`hands` set, no `base`): `attackCounts` derives base from `weaponBase`.
- **No `auto` field** → treated as Manual. All `eff*` functions tolerate missing `c`.

---

## ⏭️ NEXT: HP / AC on the sheet
Add to the **character model**: `maxHp`, `hp` (current), `ac`, maybe `tempHp`.
- **Editor (`view-edit`):** fields for Max HP and AC (number inputs, next to Level/Height).
- **Sheet (`view-detail`):** an HP tracker — current/max with +/− (damage & heal) and a small bar; AC shown as a shield badge. Persist via `Store.save`.
- **Nice-to-have:** quick "apply damage/heal" stepper; temp HP; death-save tracker. Keep it optional and backward-compatible (missing fields default sensibly).
- Consider auto-suggesting Max HP from class hit die + CON mod × level, but **let the user override** (same pattern as Base damage).

### Later roadmap (not started)
Class presets (pick Fighter → suggest starter attacks) · PWA install (manifest + service worker) so it lives on the phone · then Capacitor → App Store/Play · login + cloud sync + in-app design purchases (needs a backend). D&D Beyond integration ruled out (no public API).

---

## Working conventions
- **Validate every JS edit:** extract the `<script>` and run `new Function(m1)`:
  ```bash
  node -e "const fs=require('fs');const h=fs.readFileSync('dragebog.html','utf8');const m=h.match(/<script>([\s\S]*)<\/script>/);try{new Function(m[1]);console.log('OK')}catch(e){console.log('ERR',e.message)}"
  ```
- **Verify logic** (math/geometry/5e rules) with small throwaway node scripts before trusting it.
- **View the actual file region before `str_replace`** — the file has surprised us mid-edit before.
- After a batch of edits, **present `dragebog.html`** to the user.
- Read the **frontend-design** SKILL before UI work.

## Licensing (settled)
Built on **D&D SRD 5.1**, released under **CC BY 4.0** — free to use, remix, and sell with the one attribution line (already in the app top-left + atop the reference `.md`). Classic 5e rules.

---

*Pick up at "NEXT: HP / AC on the sheet". Everything above is already built and tested.*
