/**
 * Operational Schedule Card Component
 *
 * Displays charter's operational schedule with visual day indicators
 * for CUSTOM schedules.
 */

interface OperationalScheduleCardProps {
  scheduleType: "EVERYDAY" | "WEEKDAYS" | "WEEKENDS" | "CUSTOM";
  operationalDays?: number[]; // 0-6 (Sunday-Saturday)
  className?: string;
}

const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_FULL = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function OperationalScheduleCard({
  scheduleType,
  operationalDays = [],
  className = "",
}: OperationalScheduleCardProps) {
  // Render schedule description based on type
  const renderScheduleDescription = () => {
    switch (scheduleType) {
      case "EVERYDAY":
        return (
          <p className="text-sm text-gray-700">
            Available <span className="font-semibold">7 days a week</span>
          </p>
        );

      case "WEEKDAYS":
        return (
          <p className="text-sm text-gray-700">
            Available{" "}
            <span className="font-semibold">Monday through Friday</span>
          </p>
        );

      case "WEEKENDS":
        return (
          <p className="text-sm text-gray-700">
            Available <span className="font-semibold">Saturday and Sunday</span>
          </p>
        );

      case "CUSTOM":
        if (operationalDays.length === 0) {
          return (
            <p className="text-sm text-gray-500">
              Custom schedule (contact captain for details)
            </p>
          );
        }

        // Sort days and format list
        const sortedDays = [...operationalDays].sort((a, b) => a - b);
        const dayNames = sortedDays.map((day) => DAYS_FULL[day]);

        return (
          <div>
            <p className="text-sm text-gray-700 mb-3">
              Available on specific days:
            </p>
            <div className="flex flex-wrap gap-2">
              {DAYS_SHORT.map((day, index) => {
                const isOperational = operationalDays.includes(index);
                return (
                  <div
                    key={day}
                    className={[
                      "flex items-center justify-center w-10 h-10 text-xs font-medium rounded-full border-2 transition-colors",
                      isOperational
                        ? "bg-green-50 border-green-500 text-green-700"
                        : "bg-gray-50 border-gray-200 text-gray-400",
                    ].join(" ")}
                    title={DAYS_FULL[index]}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Operating days: {dayNames.join(", ")}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={[
        "rounded-2xl border border-black/10 bg-white p-5 sm:p-6",
        className,
      ].join(" ")}
    >
      <h3 className="text-base font-semibold sm:text-lg mb-3">
        Operational Schedule
      </h3>
      {renderScheduleDescription()}
    </div>
  );
}
