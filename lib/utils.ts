// TypeScript version of the `cn` helper
export function cn(...args: Array<string | false | null | undefined | (string | false | null | undefined)[]>) {
  return args
    .flatMap((a) => (Array.isArray(a) ? a : [a]))
    .filter(Boolean)
    .join(" ");
}
