export type SpeciesPillItem = {
    id?: string;
    label?: string;
    english?: string;
    local?: string;
    imageSrc?: string | null;
};
type SpeciesPillsProps = {
    items: (string | SpeciesPillItem)[];
    className?: string;
    size?: "sm" | "md" | "lg";
    readOnly?: boolean;
    onRemoveAction?: (item: SpeciesPillItem) => void;
    removableIconLabel?: string;
    showImage?: boolean;
    stackedNames?: boolean;
    ImageComponent?: React.ComponentType<any>;
};
export declare function SpeciesPills(props: SpeciesPillsProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SpeciesPills.d.ts.map