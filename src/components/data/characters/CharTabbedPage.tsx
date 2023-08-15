import { Tab, TabbedPage, type TabNames } from "components/TabbedPage";
import type { ComponentChildren } from "preact";
import tabGradients from "styles/dynamic/tab-gradients";
import type { Character } from "types/game-data";
import CharInfo from "./CharInfo.astro";

const charTabNames: TabNames = {
  info: "Info",
  skills: "Skills",
  eidolons: "Eidolons",
  traces: "Traces",
};

type CharTabbedPage = {
  char: Character;
} & {
  // godspeed to those trying to understand this
  // i am a key of a key that keys the keyhole keying keys
  // kill me
  [key: keyof typeof charTabNames]: ComponentChildren;
};

export default function CharTabbedPage(props: CharTabbedPage) {
  const char = props.char;
  const { element, portrait } = char;

  return (
    <TabbedPage
      tabNames={charTabNames}
      listClass="grid grid-cols-4 max-w-full md:max-w-sm justify-around gap-2 xl:flex-col relative z-10"
      triggerClass={`tab ${tabGradients[element]}`}
    >
      {Object.keys(charTabNames).map((id, i) => (
        <Tab id={id}>
          <img
            slot={id}
            src={`/${portrait}`}
            width={i ? "360" : "640"}
            height={i ? "360" : "640"}
            class={`${
              i ? "hidden" : "block"
            } scale-75 md:scale-100 md:block md:absolute ${
              i ? "md:-top-6 md:-right-6" : "md:-top-16 md:-right-16"
            }`}
            alt=""
          />
          {props[id]}
        </Tab>
      ))}
    </TabbedPage>
  );
}
