/**
 * Operational Schedule Card Component
 *
 * Displays charter's operational schedule with visual day indicators
 * for CUSTOM schedules.
 */
interface OperationalScheduleCardProps {
    scheduleType: "EVERYDAY" | "WEEKDAYS" | "WEEKENDS" | "CUSTOM";
    operationalDays?: number[];
    className?: string;
}
export declare function OperationalScheduleCard({ scheduleType, operationalDays, className, }: OperationalScheduleCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=OperationalScheduleCard.d.ts.map