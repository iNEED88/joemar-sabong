export function fixDecimalPlaces(data: number) {
  return Math.floor(data * 100) / 100;
}
