import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

const textBox: string = "rounded-2xl p-4";

export const components = {
  h1: (props: Props) => (
    <h1
      class={`${textBox} bg-lightning-700 text-lightning-300 header flex justify-center`}
    >
      {props.children}
    </h1>
  ),
  h2: (props: Props) => (
    <h2
      class={`${textBox} bg-lightning-700 text-lightning-300 subheader flex justify-center`}
    >
      {props.children}
    </h2>
  ),
  h3: (props: Props) => (
    <h3
      class={`${textBox} bg-lightning-800 text-lightning-200 subsubheader flex justify-center`}
    >
      {props.children}
    </h3>
  ),
  h4: (props: Props) => (
    <h4
      class={`${textBox} bg-lightning-900 text-lightning-100 subsubsubheader flex justify-center`}
    >
      {props.children}
    </h4>
  ),

  p: (props: Props) => <p class="m-4">{props.children}</p>,
};

export function Troll(props: Props) {
  return (
    <div
      class="flex justify-center p-5 m-5"
      style=" background-position:50% 50%;background-image:url(https://hsr.keqingmains.com/wp-content/uploads/2023/08/408001-1.webp)"
    >
      <span class="header">Do NOT Build CRIT.</span>
    </div>
  );
}

export const Priority = {
  Item: (props: { name: string; image: string }) => (
    <div class="flex flex-col items-center">
      <img src={props.image} class="w-16 h-16" />
      <span class="subsubheader">{props.name}</span>
    </div>
  ),
  Arrow: () => (
    <span class="text-6xl mx-4 inline-flex items-center">{" > "}</span>
  ),

  Table: (props: Props) => (
    <div
      class={`${textBox} bg-lightning-950 border-lightning-800 border-4 flex justify-center text-4xl`}
    >
      {props.children}
    </div>
  ),
};
