export function isMissingKeys(data: any, keys: string[]): boolean {
	return keys.some((key) => data[key] === undefined);
}