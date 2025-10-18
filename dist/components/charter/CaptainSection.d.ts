export type CharterLike = {
    location?: string;
    fishingType?: string;
    captain?: {
        name: string;
        avatarUrl?: string;
        yearsExperience: number;
        crewCount: number;
        intro?: string;
    } | null;
};
export interface CaptainSectionProps {
    charter: CharterLike;
    title?: string;
}
export default function CaptainSection({ charter, title, }: CaptainSectionProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=CaptainSection.d.ts.map