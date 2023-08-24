import type { Character } from "types/game-data";

const data = new Map<string, Character>();

await Promise.all(
  Object.values(import.meta.glob("../../data/characters/*.json")).map(
    async (charFile) => {
      const char = (await charFile()) as Character;
      data.set(char.name.replace(" ", "_"), char);
    }
  )
);

export function getCharacter(name: string) {
  return data.get(name);
}

export function getCharacters() {
  return Array.from(data.values());
}

export function getCharacterIndexes() {
  return Array.from(data.keys());
}

function getObject(name: string, type: string) {
  const char = getCharacter(name);
  switch (type) {
    case "Ultimate":
      return char?.skills.filter((s) => s.type === "Ultra")[0];
    case "Skill":
      return char?.skills.filter((s) => s.type === "BPSkill")[0];
    case "Talent":
      return char?.skills.filter((s) => s.type === "Talent")[0];
    case "Basic":
      return char?.skills.filter((s) => s.type === "Normal")[0];

    case "ultimate":
      return char?.skills.filter((s) => s.type === "Ultra")[0];
    case "skill":
      return char?.skills.filter((s) => s.type === "BPSkill")[0];
    case "talent":
      return char?.skills.filter((s) => s.type === "Talent")[0];
    case "basic":
      return char?.skills.filter((s) => s.type === "Normal")[0];
    case "technique":
      return char?.skills.filter((s) => s.type === "Maze")[0];

    case "A2":
      return char?.traces.filter((t) => t.minAsc === 2)[0];
    case "A4":
      return char?.traces.filter((t) => t.minAsc === 4)[0];
    case "A6":
      return char?.traces.filter((t) => t.minAsc === 6)[0];

    case "a2":
      return char?.traces.filter((t) => t.minAsc === 2)[0];
    case "a4":
      return char?.traces.filter((t) => t.minAsc === 4)[0];
    case "a6":
      return char?.traces.filter((t) => t.minAsc === 6)[0];
  }
}

export function getImage(name: string, type: string) {
  return getObject(name, type)?.icon;
}

export function getName(name: string, type: string) {
  return getObject(name, type)?.name;
}

export function getDescription(name: string, type: string) {
  return getObject(name, type)?.description;
}

export function getParams(name: string, type: string) {
  return getObject(name, type)?.params;
}
