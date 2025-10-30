import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export function OperationalScheduleCard({ scheduleType, operationalDays = [], className = "", }) {
    // Render schedule description based on type
    const renderScheduleDescription = () => {
        switch (scheduleType) {
            case "EVERYDAY":
                return (_jsxs("p", { className: "text-sm text-gray-700", children: ["Available ", _jsx("span", { className: "font-semibold", children: "7 days a week" })] }));
            case "WEEKDAYS":
                return (_jsxs("p", { className: "text-sm text-gray-700", children: ["Available", " ", _jsx("span", { className: "font-semibold", children: "Monday through Friday" })] }));
            case "WEEKENDS":
                return (_jsxs("p", { className: "text-sm text-gray-700", children: ["Available ", _jsx("span", { className: "font-semibold", children: "Saturday and Sunday" })] }));
            case "CUSTOM":
                if (operationalDays.length === 0) {
                    return (_jsx("p", { className: "text-sm text-gray-500", children: "Custom schedule (contact captain for details)" }));
                }
                // Sort days and format list
                const sortedDays = [...operationalDays].sort((a, b) => a - b);
                const dayNames = sortedDays.map((day) => DAYS_FULL[day]);
                return (_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-700 mb-3", children: "Available on specific days:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: DAYS_SHORT.map((day, index) => {
                                const isOperational = operationalDays.includes(index);
                                return (_jsx("div", { className: [
                                        "flex items-center justify-center w-10 h-10 text-xs font-medium rounded-full border-2 transition-colors",
                                        isOperational
                                            ? "bg-green-50 border-green-500 text-green-700"
                                            : "bg-gray-50 border-gray-200 text-gray-400",
                                    ].join(" "), title: DAYS_FULL[index], children: day }, day));
                            }) }), _jsxs("p", { className: "text-xs text-gray-600 mt-2", children: ["Operating days: ", dayNames.join(", ")] })] }));
            default:
                return null;
        }
    };
    return (_jsxs("div", { className: [
            "rounded-2xl border border-black/10 bg-white p-5 sm:p-6",
            className,
        ].join(" "), children: [_jsx("h3", { className: "text-base font-semibold sm:text-lg mb-3", children: "Operational Schedule" }), renderScheduleDescription()] }));
}
