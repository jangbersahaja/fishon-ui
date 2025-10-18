export declare const SPECIES_CATEGORIES: {
    readonly SALTWATER: "saltwater";
    readonly FRESHWATER: "freshwater";
    readonly SQUID: "squid";
};
export type SpeciesCategory = (typeof SPECIES_CATEGORIES)[keyof typeof SPECIES_CATEGORIES];
export interface SpeciesItem {
    id: string;
    english_name: string;
    local_name: string;
    image: string;
    category: SpeciesCategory;
}
export declare const ALL_SPECIES: SpeciesItem[];
export declare const SPECIES_BY_ID: Record<string, SpeciesItem>;
export declare const SPECIES_BY_CATEGORY: Record<SpeciesCategory, SpeciesItem[]>;
export type SpeciesId = keyof typeof SPECIES_BY_ID;
//# sourceMappingURL=species.d.ts.map