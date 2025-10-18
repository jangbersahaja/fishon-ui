export type DecimalLike = number | null | undefined | {
    toNumber?: () => number;
    toString(): string;
};
export declare function toFiniteNumber(value: DecimalLike): number | null;
export declare function formatCurrency(value: DecimalLike): string;
//# sourceMappingURL=formatters.d.ts.map