// Characters
export interface Character {
  id: string;
  name: string;
  description: string;
  element: string;
  path: string;
  rarity: number;
  maxSkillPoints: number;

  icon: string;
  preview: string;
  portrait: string;

  skills: CharacterSkill[];
  eidolons: Eidolon[];
  traces: CharacterTrace[];
  stats: CharacterStats[];
}

export interface CharacterSkill {
  name: string;
  maxLevel: number;
  element: string;
  type: string;
  typeText: string;
  effect: string;
  simpleDescription: string;
  description: string;
  params: number[][];
  icon: string;
}

export interface Eidolon {
  name: string;
  rank: number;
  desc: string;
  icon: string;
}

export interface CharacterTrace {
  id: string;
  name: string;
  maxLevel: number;
  description: string;
  params: number[][];
  icon: string;
  children?: CharacterTrace[];
  major?: boolean;

  levels: any[]; //TODO, write out types or simplify

  // calculated fields
  minAsc?: number;
  minLevel?: number;
}

export interface CharacterStat {
  base: number;
  step: number;
}

export interface CharacterStats {
  health: CharacterStat;
  attack: CharacterStat;
  defense: CharacterStat;
  speed: CharacterStat;
  taunt: CharacterStat;
  critRate: CharacterStat;
  critDmg: CharacterStat;
}

// Lightcones

export interface Lightcone {
  name: string;
  baseType: string;
  stars: number;
  stats: LightconeStats[];
  superimposition: LightconeSuperimposition;
}

export interface LightconeStats {
  level: number;
  maxLevel: number;
  hpBase: number;
  hpAdd: number;
  attackBase: number;
  attackAdd: number;
  defenseBase: number;
  defenseAdd: number;
}

export interface LightconeSuperimposition {
  name: string;
  desc: string;
  params: number[][];
}

// Relics

export interface Relic {
  name: string;
  bonuses: RelicBonus[];
}
export interface RelicBonus {
  count: number;
  desc: string;
  params: number[];
}

// Enemies
export interface Enemy {
  name: string;
  faction: string;
  variants: EnemyVariant[];
}
export interface EnemyVariant {
  attack: number;
  def: number;
  hp: number;
  speed: number;
  toughness: number;
  effectResBase: number;
  weaknesses: string[];
  id?: number;
  dmgRES: Record<string, number>;
  debuffRES: Record<string, number>;
  skills: EnemySkill[];
}
export interface EnemySkill {
  name: string;
  type: string;
  desc: string;
  phases?: number[];
  threat?: true;
}

// Curios
export interface Curio {
  name: string;
  desc: string;
  params: number[];
  fixedDesc: string;
  fixedParams: number[];
}
