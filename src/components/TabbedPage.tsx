import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import type { ComponentChild, ComponentChildren, VNode } from "preact";

export type TabNames = {
  [key: string]: string;
};

export function Tab(props: { children: ComponentChildren; id: string }) {
  return <>{props.children}</>;
}

export interface TabRootProps {
  children?: ComponentChildren;
  tabNames: TabNames;

  listClass: string;
  triggerClass: string;
}

export function TabbedPage(props: TabRootProps) {
  const { tabNames, listClass, triggerClass } = props;
  const tabs = Object.keys(tabNames);
  const children: ComponentChild[] = Array.isArray(props.children)
    ? props.children
    : [props.children];

  return (
    <Root defaultValue={tabs[0]}>
      <List className={listClass}>
        {tabs.map((id) => (
          <Trigger value={id} className={triggerClass}>
            {tabNames[id]}
          </Trigger>
        ))}
      </List>
      {tabs.map((id) => (
        <Content value={id}>
          {children.filter((child) => (child as VNode<any>).props["id"] === id)}
        </Content>
      ))}
    </Root>
  );
}
