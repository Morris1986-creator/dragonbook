# DragonBook — D&D 5e Combat Reference (SRD 5.1)

> **Source / attribution (required if we ship this):**
> This work includes material taken from the System Reference Document 5.1 ("SRD 5.1") by Wizards of the Coast LLC, available at https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License (https://creativecommons.org/licenses/by/4.0/legalcode).

This document is the **data source** for upgrading DragonBook's attacks & combos. Everything here is mechanical (numbers/rules) and free to use under CC‑BY‑4.0.

---

## 1. Core attack math

Every weapon attack works the same way:

- **Attack roll** = `d20 + ability modifier + proficiency bonus (if proficient)`
- **Damage roll** = `weapon dice + ability modifier`
- **Ability used:**
  - Melee weapon → **Strength**
  - Ranged weapon → **Dexterity**
  - **Finesse** weapon → player chooses **Strength or Dexterity** (whichever is higher)
- Ability modifier = `floor((score − 10) / 2)`

### Proficiency bonus by level
| Level | Bonus |
|------|------|
| 1–4 | +2 |
| 5–8 | +3 |
| 9–12 | +4 |
| 13–16 | +5 |
| 17–20 | +6 |

> **App use:** if we add **level** + **ability scores** to a character, the app can *auto-calculate* the to-hit bonus and the damage modifier instead of the player typing them.

---

## 2. Weapons (SRD 5.1)

Format: **Damage** / **Type** (B=bludgeoning, P=piercing, S=slashing) / **Properties**.

### Simple Melee
| Weapon | Dmg | Type | Properties |
|---|---|---|---|
| Club | 1d4 | B | Light |
| Dagger | 1d4 | P | Finesse, Light, Thrown (20/60) |
| Greatclub | 1d8 | B | Two-handed |
| Handaxe | 1d6 | S | Light, Thrown (20/60) |
| Javelin | 1d6 | P | Thrown (30/120) |
| Light hammer | 1d4 | B | Light, Thrown (20/60) |
| Mace | 1d6 | B | — |
| Quarterstaff | 1d6 | B | Versatile (1d8) |
| Sickle | 1d4 | S | Light |
| Spear | 1d6 | P | Thrown (20/60), Versatile (1d8) |

### Simple Ranged
| Weapon | Dmg | Type | Properties |
|---|---|---|---|
| Light crossbow | 1d8 | P | Ammunition (80/320), Loading, Two-handed |
| Dart | 1d4 | P | Finesse, Thrown (20/60) |
| Shortbow | 1d6 | P | Ammunition (80/320), Two-handed |
| Sling | 1d4 | B | Ammunition (30/120) |

### Martial Melee
| Weapon | Dmg | Type | Properties |
|---|---|---|---|
| Battleaxe | 1d8 | S | Versatile (1d10) |
| Flail | 1d8 | B | — |
| Glaive | 1d10 | S | Heavy, Reach, Two-handed |
| Greataxe | 1d12 | S | Heavy, Two-handed |
| Greatsword | 2d6 | S | Heavy, Two-handed |
| Halberd | 1d10 | S | Heavy, Reach, Two-handed |
| Lance | 1d12 | P | Reach, Special |
| Longsword | 1d8 | S | Versatile (1d10) |
| Maul | 2d6 | B | Heavy, Two-handed |
| Morningstar | 1d8 | P | — |
| Pike | 1d10 | P | Heavy, Reach, Two-handed |
| Rapier | 1d8 | P | Finesse |
| Scimitar | 1d6 | S | Finesse, Light |
| Shortsword | 1d6 | P | Finesse, Light |
| Trident | 1d6 | P | Thrown (20/60), Versatile (1d8) |
| War pick | 1d8 | P | — |
| Warhammer | 1d8 | B | Versatile (1d10) |
| Whip | 1d4 | S | Finesse, Reach |

### Martial Ranged
| Weapon | Dmg | Type | Properties |
|---|---|---|---|
| Blowgun | 1 | P | Ammunition (25/100), Loading |
| Hand crossbow | 1d6 | P | Ammunition (30/120), Light, Loading |
| Heavy crossbow | 1d10 | P | Ammunition (100/400), Heavy, Loading, Two-handed |
| Longbow | 1d8 | P | Ammunition (150/600), Heavy, Two-handed |
| Net | — | — | Special, Thrown (5/15) |

---

## 3. Weapon properties (what they do to an attack)

| Property | Effect (relevant to attacks) |
|---|---|
| **Finesse** | Use STR *or* DEX for attack & damage (your choice). |
| **Versatile (XdY)** | If wielded in two hands, damage die becomes the listed XdY. |
| **Light** | Enables **Two-Weapon Fighting** (bonus-action off-hand attack). |
| **Two-handed** | Requires both hands; cannot dual-wield. |
| **Heavy** | Small creatures have disadvantage on attacks with it. |
| **Reach** | +5 ft reach. |
| **Thrown (s/l)** | Can be thrown; uses the same ability as the melee attack. |
| **Ammunition (s/l)** | Needs ammo; DEX-based ranged attack. |
| **Loading** | Only one shot per action (no extra attacks with it). |
| **Special** | Has a unique rule (Lance, Net). |

> **App use:** auto-pick STR/DEX from properties, offer a **1H/2H toggle** for Versatile weapons (switches the damage die), and flag **Light** weapons as eligible for the off-hand bonus attack.

---

## 4. Classes — combat profile

| Class | Hit die | Attack ability | Weapon proficiencies | Extra Attack | Spellcasting |
|---|---|---|---|---|---|
| Barbarian | d12 | STR | Simple + Martial | L5 | — |
| Bard | d8 | CHA/DEX | Simple, hand crossbow, longsword, rapier, shortsword | — (Valor/Swords subclass only) | CHA |
| Cleric | d8 | WIS/STR | Simple | — (some domains) | WIS |
| Druid | d8 | WIS | Club, dagger, dart, javelin, mace, quarterstaff, scimitar, sickle, sling, spear | — | WIS |
| Fighter | d10 | STR/DEX | Simple + Martial | **L5 / L11 / L20** | — (Eldritch Knight) |
| Monk | d8 | DEX | Simple + shortsword | L5 | — (Way of Four Elements) |
| Paladin | d10 | STR/CHA | Simple + Martial | L5 | CHA (half) |
| Ranger | d10 | DEX/WIS | Simple + Martial | L5 | WIS (half) |
| Rogue | d8 | DEX | Simple, hand crossbow, longsword, rapier, shortsword | — | — (Arcane Trickster) |
| Sorcerer | d6 | CHA | Dagger, dart, sling, quarterstaff, light crossbow | — | CHA |
| Warlock | d8 | CHA | Simple | — (Blade Pact + Thirsting Blade) | CHA (Pact) |
| Wizard | d6 | INT | Dagger, dart, sling, quarterstaff, light crossbow | — | INT |

**Extra Attack** = you make **2** weapon attacks instead of 1 when you take the Attack action (Fighter scales to 3 at L11 and 4 at L20).

---

## 5. Bonus actions & "combo" attacks

This is the heart of the upgrade — what lets a turn be more than one roll.

| Combo | Who | What happens |
|---|---|---|
| **Two-Weapon Fighting** | Anyone wielding two **Light** melee weapons | After the Attack action, **bonus action**: one attack with the off-hand weapon. (No ability mod to off-hand damage unless a Fighting Style says so.) |
| **Martial Arts** | Monk | After Attack action with unarmed/monk weapon, **bonus action** unarmed strike. |
| **Flurry of Blows** | Monk (L2, 1 ki) | Bonus action: **two** unarmed strikes. |
| **Extra Attack** | Barbarian/Fighter/Monk/Paladin/Ranger (L5) | 2 attacks per Attack action (not a bonus action). |
| **Action Surge** | Fighter (L2) | One extra **action** → effectively another full Attack action. |

---

## 6. Damage-boost combos (extra dice on a hit)

These are the satisfying "stack more dice" features — perfect for the dice tray.

| Feature | Class | Trigger | Bonus |
|---|---|---|---|
| **Sneak Attack** | Rogue | Finesse/ranged weapon, with advantage **or** an ally next to target; once per turn | See table below |
| **Rage** | Barbarian | STR-based melee while raging | +2 (L1–8), +3 (L9–15), +4 (L16+) flat damage |
| **Divine Smite** | Paladin (L2) | Melee hit, spend a spell slot | 2d8 radiant (1st slot) +1d8 per slot level above 1st, **max 5d8**; +1d8 vs undead/fiends |
| **Improved Divine Smite** | Paladin (L11) | Every melee hit | +1d8 radiant |
| **Hunter's Mark** | Ranger (spell) | Marked target, each weapon hit | +1d6 |
| **Hex** | Warlock (spell) | Hexed target, each hit | +1d6 necrotic |
| **Agonizing Blast** | Warlock (invocation) | Eldritch Blast | +CHA modifier to each beam |
| **Savage Attacks** | Half-Orc | Melee **crit** | Roll one weapon damage die one extra time |
| **Brutal Critical** | Barbarian (L9/13/17) | Melee **crit** | +1/+2/+3 extra weapon dice |

### Sneak Attack progression
| Rogue level | Dice | | Rogue level | Dice |
|---|---|---|---|---|
| 1 | 1d6 | | 11 | 6d6 |
| 3 | 2d6 | | 13 | 7d6 |
| 5 | 3d6 | | 15 | 8d6 |
| 7 | 4d6 | | 17 | 9d6 |
| 9 | 5d6 | | 19 | 10d6 |

### Monk Martial Arts die
| Monk level | Die |
|---|---|
| 1–4 | 1d4 |
| 5–10 | 1d6 |
| 11–16 | 1d8 |
| 17–20 | 1d10 |

### Rage (uses per long rest)
| Level | Uses | | Level | Uses |
|---|---|---|---|---|
| 1 | 2 | | 12 | 5 |
| 3 | 3 | | 17 | 6 |
| 6 | 4 | | 20 | ∞ |

> **Crit rule reminder (already in our app):** on a critical hit you roll **all the damage dice twice** (weapon dice *and* bonus dice like Sneak Attack), then add modifiers once.

---

## 7. Races — ability bonuses & combat traits (SRD 5.1)

| Race | Ability increases | Speed | Combat-relevant traits |
|---|---|---|---|
| **Dwarf** | +2 CON | 25 | Darkvision; poison resistance/advantage. **Hill:** +1 WIS, +1 HP/level. **Mountain:** +2 STR, light/medium armor prof. Training: battleaxe, handaxe, light hammer, warhammer. |
| **Elf** | +2 DEX | 30 | Darkvision; advantage vs charm; can't be put to sleep. **High:** +1 INT, longsword/shortsword/shortbow/longbow prof, 1 wizard cantrip. **Wood:** +1 WIS, speed 35. **Drow:** +1 CHA, superior darkvision, sunlight sensitivity, rapier/shortsword/hand crossbow prof. |
| **Halfling** | +2 DEX | 25 | **Lucky** (reroll natural 1s); advantage vs fear; can move through larger creatures. **Lightfoot:** +1 CHA. **Stout:** +1 CON, poison resistance. |
| **Human** | +1 to all | 30 | — (versatile, no combat trait) |
| **Dragonborn** | +2 STR, +1 CHA | 30 | **Breath Weapon** (action, save, damage by ancestry; 2d6 L1–5, 3d6 L6–10, 4d6 L11–15, 5d6 L16+); resistance to its damage type. |
| **Gnome** | +2 INT | 25 | Darkvision; advantage on INT/WIS/CHA saves vs magic. **Forest:** +1 DEX. **Rock:** +1 CON. |
| **Half-Elf** | +2 CHA, +1 to two others | 30 | Darkvision; advantage vs charm. |
| **Half-Orc** | +2 STR, +1 CON | 30 | Darkvision; **Relentless Endurance** (drop to 1 HP instead of 0, 1/long rest); **Savage Attacks** (extra die on melee crit). |
| **Tiefling** | +2 CHA, +1 INT | 30 | Darkvision; fire resistance; minor innate spells. |

**Dragonborn damage type by ancestry:** Black/Copper = Acid · Blue/Bronze = Lightning · Brass/Gold/Red = Fire · Green = Poison · Silver/White = Cold.

---

## 8. How this maps to DragonBook features (proposed)

Ordered from quick wins to bigger systems:

1. **Weapon picker upgrade** — replace the flat list with the full table above incl. **properties**. Picking a weapon sets damage die *and* shows tags (Finesse, Versatile, Light…). *(No new character data needed.)*
2. **1H / 2H toggle** for Versatile weapons → switches damage die live.
3. **Add level + ability scores → auto to-hit & auto damage modifier** (uses §1 + proficiency table). Player stops typing bonuses.
4. **Attack types beyond "weapon"**: add **Off-hand / bonus-action attack** and **Unarmed strike** as attack kinds, so a turn can chain (main attack → bonus attack).
5. **Combo riders** — toggles on an attack that add dice when active: Sneak Attack, Rage, Hunter's Mark, Hex, Divine Smite (with a slot picker), Improved Divine Smite. These plug straight into the dice tray.
6. **Class presets** — when you pick a class+level, suggest the right combos (e.g. Rogue → Sneak Attack die auto-set; Barbarian → Rage damage).
7. **Race traits** — auto ability-score bonuses on character creation; Dragonborn **Breath Weapon** as a special non-weapon attack.

> Each of 4–6 reuses the tumbling-dice engine and the "Advantage? / Roll damage" flow we already built — they just add more dice or a bonus-attack step.
