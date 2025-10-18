import type { CharterFormValues } from "@fishon/schemas";
export interface PoliciesCardProps {
    policies: Policies;
    pickup: CharterFormValues["pickup"];
}
interface Policies {
    catchAndKeep: boolean;
    catchAndRelease: boolean;
    childFriendly: boolean;
    wheelchairAccessible?: boolean | undefined;
    alcoholAllowed?: boolean | undefined;
    smokingAllowed?: boolean | undefined;
}
export declare function PoliciesCard({ policies, pickup }: PoliciesCardProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=PoliciesCard.d.ts.map