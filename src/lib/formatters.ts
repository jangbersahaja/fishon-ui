const currencyFormatter = new Intl.NumberFormat("en-MY", {
  style: "currency",
  currency: "MYR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export type DecimalLike =
  | number
  | null
  | undefined
  | { toNumber?: () => number; toString(): string };

export function toFiniteNumber(value: DecimalLike): number | null {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }
  if (
    value &&
    typeof value === "object" &&
    typeof value.toNumber === "function"
  ) {
    const num = value.toNumber();
    return Number.isFinite(num) ? num : null;
  }
  if (value === null || value === undefined) return null;
  const parsed = Number.parseFloat(String(value));
  return Number.isFinite(parsed) ? parsed : null;
}

export function formatCurrency(value: DecimalLike): string {
  const num = toFiniteNumber(value);
  return num === null ? "—" : currencyFormatter.format(num);
}
