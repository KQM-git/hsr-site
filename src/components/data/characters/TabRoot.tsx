import type { ComponentChildren } from 'preact';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';

const tabs = ["Info", "Skills", "Eidolons", "Traces"];

interface Props {
  name: string;
  tabClassName: string;
  info: ComponentChildren;
  skills: ComponentChildren;
  eidolons: ComponentChildren;
  traces: ComponentChildren;
}
export default function CharTabRoot(props: Props) {
  const { name, tabClassName, info, skills, eidolons, traces } = props;
  const children = [info, skills, eidolons, traces];

  return (
    <Root defaultValue={tabs[0]}>
      <List className="grid grid-cols-4 max-w-full md:max-w-sm justify-around gap-2 xl:flex-col xl:w-40">
        {tabs.map((tab) => (
          <Trigger value={tab} className={tabClassName}>
            {tab}
          </Trigger>
        ))}
      </List>
      {children.map((child, i) => (
        <Content value={tabs[i]}>
          <img
            src={`/img/characters/full/${name}.png`}
            width={i ? "360" : "640"}
            height={i ? "360" : "640"}
            class={`${i ? "hidden" : "block"} scale-75 md:scale-100 md:block md:absolute ${i ? "md:-top-6 md:-right-6" : "md:-top-16 md:-right-16"}`}
            alt=""
          />
          {child}
        </Content>
      ))}
    </Root>
  )

}