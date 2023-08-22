import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export const components = {
  h1: (props: Props) => (
    <h1
      class={`rounded-2xl p-4 bg-theme-700 text-theme-300 header flex justify-center`}
    >
      {props.children}
    </h1>
  ),
  h2: (props: Props) => (
    <h2
      class={`rounded-2xl p-4 bg-theme-700 text-theme-300 subheader flex justify-center`}
    >
      {props.children}
    </h2>
  ),
  h3: (props: Props) => (
    <h3
      class={`rounded-2xl p-4 bg-theme-800 text-theme-200 subsubheader flex justify-center`}
    >
      {props.children}
    </h3>
  ),
  h4: (props: Props) => (
    <h4
      class={`rounded-2xl p-4 bg-theme-900 text-theme-100 subsubsubheader flex justify-center`}
    >
      {props.children}
    </h4>
  ),

  p: (props: Props) => <p class="m-4">{props.children}</p>,
};
