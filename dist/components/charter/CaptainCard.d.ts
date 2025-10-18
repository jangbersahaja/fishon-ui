export interface CaptainCardData {
    id: string;
    displayName: string;
    bio: string;
    experienceYrs: number;
    avatarUrl: string | null;
    firstName: string;
    lastName: string;
    state: string;
    city: string;
    charterCount: number;
    createdAt: Date;
}
interface CaptainCardProps {
    captain: CaptainCardData;
}
export default function CaptainCard({ captain }: CaptainCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CaptainCard.d.ts.map