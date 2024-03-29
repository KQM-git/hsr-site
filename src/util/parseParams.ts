import splitLines from "./splitLines";

export const STAT_REGEX = /#(\d+)\[(i|f\d)\](%?)/gi;

export type Node = TextNode | ElementNode;
export interface TextNode {
  type: "text";
  value: string;
}
export interface ElementNode {
  type: "element";
  tag: string;
  value?: string;
  children: Node[];
}
export type ParseNode = Node & { state?: any };
export function parse(text: string): Node[] {
  const root: ParseNode[] = [];
  const currentStack: ParseNode[] = [];

  const getCurrent = () => currentStack[0];
  const cleanText = () => {
    while (getCurrent()?.type == "text") currentStack.shift();
  };
  const append = (node: ParseNode) => {
    currentStack.unshift(node);
    if (currentStack.length == 1) root.push(getCurrent());
    else if (currentStack[1].type == "element")
      currentStack[1].children.push(getCurrent());
  };

  for (let i = 0; i < text.length; i++) {
    const c = text[i],
      nc = text[i + 1];
    if (c == "<") {
      if (nc !== "/") {
        // Creation of <BLAH
        cleanText();
        append({
          type: "element",
          tag: "",
          value: undefined,
          children: [],
          state: "TAG",
        });
      } else {
        // Closing of </BLAH
        cleanText();
        getCurrent().state = "CLOSING";
      }
    } else if (c == ">" && getCurrent().state == "CLOSING") {
      // </BLAH>|
      delete getCurrent().state;
      currentStack.shift();
    } else if (
      c == ">" &&
      (getCurrent().state == "TAG" || getCurrent().state == "VALUE")
    ) {
      // <BLAH>|
      getCurrent().state = "INTERNAL";
    } else {
      // Create text node if needed for <tag>BLAH or start with BLAH
      if (currentStack.length == 0 || getCurrent().state == "INTERNAL") {
        append({
          type: "text",
          value: "",
        });
      }

      // Handling of other chars
      const current = getCurrent();
      if (current.type == "text") {
        // Append to text
        current.value = current.value + c;
      } else if (current.type == "element") {
        switch (current.state) {
          case "TAG": {
            if (c == "=") {
              current.state = "VALUE";
              break;
            }
            // Append to tag creation
            current.tag = current.tag + c;
            break;
          }
          case "VALUE": {
            // Append to value parsing
            current.value = (current.value ?? "") + c;
            break;
          }
        }
      }
    }
  }
  return root;
}

export function stringify(nodes: Node[]): string {
  return nodes.map(stringifyHelper).join("");
}

export function stringifyHelper(node: Node): string {
  if (node.type === "text") return node.value;

  const children = stringify(node.children);
  switch (node.tag) {
    case "unbreak":
      return `<span>${children}</span>`;
    case "u":
      return `<u>${children}</u>`;
    case "b":
      return `<b>${children}</b>`;
    case "i":
      return `<i>${children}</i>`;
    case "s":
      return `<s>${children}</s>`;
    case "color":
      return `<span style="color: ${node.value}">${children}</span>`;
    case "size":
      return `<span style="fontSize: ${node.value}px">${children}</span>`;
    case "align":
      return `<span style="textAlign: ${
        node.value as "left" | "right" | "center"
      }>${children}</span>`;
    case "value":
      return `<span title="Raw value: ${node.value}" class="value">${children}</span>`;
    case "br":
      return `<br><br/>`;
    default:
      throw `Unsupported tag ${node.tag}`;
  }
}

//nd down b/c mihoyo
export function fixed(val: number, precision: number): string {
  const decimals = Math.floor(Math.log10(val));
  return (val - 0.05 * 10 ** decimals).toFixed(precision - decimals);
}

export function round(
  val: number,
  decimals: string,
  percentage: string
): string {
  if (percentage) val *= 100;
  return (
    (decimals === "i"
      ? String(Math.floor(val))
      : fixed(val, Number(decimals.slice(1)))) + percentage
  );
}

export function parseParams(data: string, params: number[]) {
  const replaced = splitLines(
    data.replaceAll(
      STAT_REGEX,
      (_, index: string, decimals: string, percentage: string) => {
        const value = params[Number.parseInt(index) - 1];
        const rounded = round(value, decimals, percentage);
        return `<value=${value}>${rounded}</value>`;
      }
    )
  ).join("<br></br>");

  return stringify(parse(replaced));
}
