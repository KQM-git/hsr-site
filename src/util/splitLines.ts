export default function splitLines(s: string) {
  return s.replaceAll("\\n", "\n").split(/\r?\n/);
}
