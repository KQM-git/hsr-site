import type { Character } from "types/game-data";

const data = new Map<string, Character>();

export async function getCharacter(name: string) {
  if (!data.has(name))
    data.set(name, await import(`../../data/characters/${name}.json`));
  return data.get(name);
}

async function getObject(name: string, type: string) {
  const char = await getCharacter(name);
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

export async function getImage(name: string, type: string) {
  return (await getObject(name, type))?.icon;
}

export async function getName(name: string, type: string) {
  return (await getObject(name, type))?.name;
}

export async function getDescription(name: string, type: string) {
  return (await getObject(name, type))?.description;
}

export async function getParams(name: string, type: string) {
  return (await getObject(name, type))?.params;
}
