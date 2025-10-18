import type { CaptainCardData } from "./CaptainCard";
interface CaptainDetailModalProps {
    captain: CaptainCardData | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    ImageComponent?: React.ComponentType<any>;
}
export default function CaptainDetailModal(props: CaptainDetailModalProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=CaptainDetailModal.d.ts.map