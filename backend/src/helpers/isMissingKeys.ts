export function isMissingKeys(
  data: Record<string, string>,
  keys: string[]
): boolean {
  return keys.some((key) => data[key] === undefined);
}
