import type { Character } from "types/game-data";

const data = new Map<string, Character>();

export async function getCharacter(name: string) {
  if (!data.has(name))
    data.set(name, await import(`../../data/characters/${name}.json`));
  return data.get(name);
}

export async function getImage(name: string, type: string) {
  const char = await getCharacter(name);
  switch (type) {
    case "Ultimate":
      return char?.skills.filter((s) => s.type === "Ultra")[0].icon;
    case "Skill":
      return char?.skills.filter((s) => s.type === "BPSkill")[0].icon;
    case "Talent":
      return char?.skills.filter((s) => s.type === "Talent")[0].icon;
    case "Basic":
      return char?.skills.filter((s) => s.type === "Normal")[0].icon;

    case "ultimate":
      return char?.skills.filter((s) => s.type === "Ultra")[0].icon;
    case "skill":
      return char?.skills.filter((s) => s.type === "BPSkill")[0].icon;
    case "talent":
      return char?.skills.filter((s) => s.type === "Talent")[0].icon;
    case "basic":
      return char?.skills.filter((s) => s.type === "Normal")[0].icon;
    case "technique":
      return char?.skills.filter((s) => s.type === "Maze")[0].icon;

    case "A2":
      return char?.traces.filter((t) => t.minAsc === 2)[0].icon;
    case "A4":
      return char?.traces.filter((t) => t.minAsc === 4)[0].icon;
    case "A6":
      return char?.traces.filter((t) => t.minAsc === 6)[0].icon;

    case "a2":
      return char?.traces.filter((t) => t.minAsc === 2)[0].icon;
    case "a4":
      return char?.traces.filter((t) => t.minAsc === 4)[0].icon;
    case "a6":
      return char?.traces.filter((t) => t.minAsc === 6)[0].icon;
  }
}

export async function getText(name: string, type: string) {
  const char = await getCharacter(name);

  switch (type) {
    case "basic":
      return char?.skills.filter((s) => s.type === "Normal")[0].name;
    case "skill":
      return char?.skills.filter((s) => s.type === "BPSkill")[0].name;
    case "ultimate":
      return char?.skills.filter((s) => s.type === "Ultra")[0].name;
    case "talent":
      return char?.skills.filter((s) => s.type === "Talent")[0].name;
    case "technique":
      return char?.skills.filter((s) => s.type === "Maze")[0].name;

    case "a2":
      return char?.traces.filter((t) => t.minAsc === 2)[0].name;
    case "a4":
      return char?.traces.filter((t) => t.minAsc === 4)[0].name;
    case "a6":
      return char?.traces.filter((t) => t.minAsc === 6)[0].name;
  }

  return `placeholder ${type}`;
}
