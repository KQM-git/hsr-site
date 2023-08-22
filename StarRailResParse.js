const fs = require("fs");
const prettier = require("prettier");

let properties = {},
  descriptions = {},
  paths = {},
  elements = {},
  skills = {},
  characters = {},
  eidolons = {},
  traces = {};

let data = {};
const charData = JSON.parse(
  fs.readFileSync(`index_new/en/characters.json`, "utf8")
);

function loadProperties() {
  const data = JSON.parse(
    fs.readFileSync(`index_new/en/properties.json`, "utf8")
  );
  Object.values(data).forEach((v) => (properties[v.type] = v));
}

function loadDescriptions() {
  const data = JSON.parse(
    fs.readFileSync(`index_new/en/descriptions.json`, "utf8")
  );
  Object.values(data).forEach((v) => (descriptions[v.id] = v));
}

function loadPaths() {
  const data = JSON.parse(fs.readFileSync(`index_new/en/paths.json`, "utf8"));
  Object.values(data).forEach((v) => (paths[v.id] = v));
}

function loadElements() {
  const data = JSON.parse(
    fs.readFileSync(`index_new/en/elements.json`, "utf8")
  );
  Object.values(data).forEach((v) => (elements[v.id] = v));
}

function loadSkills() {
  data = JSON.parse(
    fs.readFileSync(`index_new/en/character_skills.json`, "utf8")
  );
  Object.entries(data).forEach(([k, v]) => {
    delete v.id;
    skills[k] = {
      name: v.name,
      maxLevel: v.max_level,
      element: v.element,
      type: v.type,
      typeText: v.type_text,
      effect: v.effect,
      effectText: v.effectText,
      simpleDescription: v.simple_desc,
      description: v.desc,
      params: v.params,
      icon: v.icon,
    };
  });
}

function convertDesc(data) {
  if (data.length <= 0) return "";

  const [{ type, value }] = data;
  const num = `${(value * 100).toFixed(1)}%`;
  return `${properties[type].name} increases by ${num}`;
}

const SKILL_ICON_MAP = {
  basic_atk: "Normal",
  skill: "BP",
  technique: "Maze",
  talent: "Passive",
  ultimate: "Ultra_on",
  skilltree1: "SkillTree1",
  skilltree2: "SkillTree2",
  skilltree3: "SkillTree3",
  rank1: "Rank1",
  rank2: "Rank2",
  rank4: "Rank4",
  rank6: "Rank6",
};

function loadTraces() {
  data = JSON.parse(
    fs.readFileSync(`index_new/en/character_skill_trees.json`, "utf8")
  );

  Object.entries(data).forEach(([k, v]) => {
    let icon = v.icon;
    if (!v.icon.includes("property")) {
      const oldIcon = v.icon.match(/\d+_(.+)\.png/);
      let charId = k.slice(0, 4);
      if (charId >= 8000) charId--;
      icon = `icon/skill/SkillIcon_${charId}_${SKILL_ICON_MAP[oldIcon[1]]}.png`;
    }

    // traces for skills are weird
    if (v.level_up_skills.length > 0) {
      v.name = skills[v.level_up_skills[0].id].name;
      v.desc = skills[v.level_up_skills[0].id].description;
      v.params = skills[v.level_up_skills[0].id].params;
      return;
    }
    const minAsc = Math.min.apply(
      Math,
      v.levels.map((l) => l.promotion)
    );

    traces[k] = {
      id: k,
      name: v.name,
      maxLevel: v.max_level,
      description: v.desc || convertDesc(v.levels[0].properties),
      params: v.params,
      levels: v.levels,
      icon: icon,
      major: !!v.desc, // minor traces need auto generated description

      minAsc: minAsc,
    };
  });
  Object.values(charData).forEach((c) => {
    traces[c.skill_trees.slice(-1)[0]].minLevel = 80;
    traces[c.skill_trees.slice(-2)[0]].minLevel = 75;
  });
  Object.values(data).forEach((v) => {
    // prePoints -> parent
    v.pre_points
      .map((id) => traces[id])
      .forEach(
        (trace) => (trace.children = [...(trace.children || []), traces[v.id]])
      );
  });
  Object.entries(data).forEach(([k, v]) => {
    if (v.pre_points.length > 0) delete traces[k];
  });
}

function loadEidolons() {
  data = JSON.parse(
    fs.readFileSync(`index_new/en/character_ranks.json`, "utf8")
  );
  Object.entries(data).forEach(([k, v]) => {
    if (!v.icon.includes("property")) {
      const oldIcon = v.icon.match(/\d+_(.+)\.png/);
      let charId = k.slice(0, 4);
      if (charId >= 8000) charId--;
      if (oldIcon)
        v.icon = `icon/skill/SkillIcon_${charId}_${
          SKILL_ICON_MAP[oldIcon[1]]
        }.png`;
    }
    delete v.id;
    delete v.level_up_skills;
    eidolons[k] = v;
  });
}

function loadCharacters() {
  Object.entries(charData).forEach(([k, v]) => {
    characters[k] = {
      id: k,
      name: v.name === "{NICKNAME}" ? `Trailblazer (${v.element})` : v.name,
      description: Object.values(descriptions)
        .filter((d) => d.title.includes(v.name))[0]
        ?.desc.replace("{NICKNAME}", "Trailblazer"),
      element: elements[v.element].name,
      path: paths[v.path].name,
      rarity: v.rarity,
      maxSkillPoints: v.max_sp,
      icon: v.icon,
      preview: v.preview,
      portrait: v.portrait,
      skills: v.skills.map((skillId) => skills[skillId]),
      eidolons: v.ranks.map((eidolonId) => eidolons[eidolonId]),
      traces: v.skill_trees.map((traceId) => traces[traceId]).filter((a) => a),
    };
  });
}

function loadAscensions() {
  data = JSON.parse(
    fs.readFileSync(`index_new/en/character_promotions.json`, "utf8")
  );
  Object.entries(data).forEach(
    ([k, v]) =>
      (characters[k].stats = v.values.map((s) => ({
        health: s.hp,
        attack: s.atk,
        defense: s.def,
        speed: s.spd,
        taunt: s.taunt,
        critRate: s.crit_rate,
        critDmg: s.crit_dmg,
      })))
  );
  // data.materials unused
}

function load() {
  loadProperties();
  loadDescriptions();
  loadPaths();
  loadElements();
  loadSkills();
  loadEidolons();
  loadTraces();
  loadCharacters();
  loadAscensions();
}

function recursePrint(traces, tabs = 0) {
  for (let trace of traces) {
    console.log(`${"  ".repeat(tabs)}${trace.id}: ${trace.name}`);
    if (trace.children) {
      recursePrint(trace.children, tabs + 1);
    }
  }
}

async function run() {
  load();

  // const temp = characters[DEBUG_CHAR];
  // console.log(temp);
  // console.log(Object.keys(temp));
  // recursePrint(characters[DEBUG_CHAR].traces);
  console.log(Object.keys(characters));

  // stelle > caelus
  delete characters["8001"];
  delete characters["8003"];

  if (fs.existsSync("kqm")) fs.rmSync("kqm", { recursive: true });
  fs.mkdirSync("kqm/characters/", { recursive: true });
  Object.values(characters).forEach(async (char) =>
    fs.writeFileSync(
      `kqm/characters/${char.name.replace(" ", "_")}.json`,
      await prettier.format(JSON.stringify(char, null, "\t"), {
        parser: "json",
      })
    )
  );
}

run();
