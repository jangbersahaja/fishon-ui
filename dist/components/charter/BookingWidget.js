"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Navigation hooks must be injected by consumer if needed
import { useState } from "react";
function todayIso() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
}
export default function BookingWidget({ trips, defaultPersons = 2, personsMax, childFriendly = true, preview = false, className = "", }) {
    // UI package: navigation and search params must be handled by consumer
    // Provide initial values only from props
    const readOnly = preview === true;
    let initAdults = Math.max(1, defaultPersons);
    let initChildren = 0;
    if (typeof personsMax === "number" && personsMax > 0) {
        // Clamp to max capacity (reduce children first, then adults)
        const total = initAdults + initChildren;
        if (total > personsMax) {
            const excess = total - personsMax;
            const reduceChildren = Math.min(initChildren, excess);
            initChildren -= reduceChildren;
            const remaining = excess - reduceChildren;
            initAdults = Math.max(1, initAdults - remaining);
            if (initAdults + initChildren > personsMax) {
                initAdults = Math.max(1, personsMax - initChildren);
            }
        }
    }
    const initDate = todayIso();
    const initDays = 1;
    const [adults, setAdults] = useState(initAdults);
    const [children, setChildren] = useState(initChildren);
    const [date, setDate] = useState(initDate);
    const [days, setDays] = useState(initDays);
    const MAX_DAYS = 14;
    function decDays() {
        if (readOnly)
            return;
        setDays((d) => Math.max(1, d - 1));
    }
    function incDays() {
        if (readOnly)
            return;
        setDays((d) => Math.min(MAX_DAYS, d + 1));
    }
    // UI package: navigation must be handled by consumer
    // Optionally, provide a callback prop for navigation if needed
    // function onBookingChange(...) { ... }
    const total = adults + children;
    const maxAllowed = personsMax !== null && personsMax !== void 0 ? personsMax : undefined;
    const overMax = maxAllowed !== undefined && total > maxAllowed;
    // Availability: for now, once a date is selected we show trips.
    // Hook up real availability later (API call) and set `available` accordingly.
    const available = !!date;
    function decAdults() {
        if (readOnly)
            return;
        setAdults((a) => Math.max(1, a - 1));
    }
    function incAdults() {
        if (readOnly)
            return;
        setAdults((a) => maxAllowed ? Math.min(maxAllowed - children, a + 1) : a + 1);
    }
    function decChildren() {
        if (readOnly)
            return;
        setChildren((c) => Math.max(0, c - 1));
    }
    function incChildren() {
        if (readOnly)
            return;
        setChildren((c) => {
            const nextRaw = c + 1;
            return maxAllowed ? Math.min(maxAllowed - adults, nextRaw) : nextRaw;
        });
    }
    // Sync URL with current selections after render to avoid Router updates during render
    // UI package: navigation must be handled by consumer
    // useEffect(() => { ... }, [adults, children, date, days, readOnly]);
    const containerClassName = [
        "rounded-2xl border border-black/10 bg-white p-5 sm:p-6 shadow-lg",
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (_jsxs("div", { className: containerClassName, children: [_jsx("div", { className: "flex items-baseline justify-between", children: _jsx("h3", { className: "text-base font-semibold sm:text-lg", children: "Check availability" }) }), _jsxs("div", { className: "mt-4", children: [_jsx("label", { className: "block text-xs font-medium text-gray-700", children: "Date" }), _jsx("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), className: "border rounded px-2 py-1 text-sm", disabled: readOnly })] }), _jsxs("div", { className: "mt-4", children: [_jsx("label", { className: "block text-xs font-medium text-gray-700", children: "Days" }), _jsxs("div", { className: "mt-1 flex h-10 items-center justify-between rounded-lg border border-gray-300 px-3", children: [_jsx("button", { type: "button", className: "h-7 w-7 rounded-full border border-gray-300 text-sm leading-none hover:bg-gray-50", onClick: decDays, "aria-label": "Decrease days", disabled: readOnly, children: "\u2212" }), _jsx("span", { className: "min-w-[2ch] text-sm text-center", children: days }), _jsx("button", { type: "button", className: "h-7 w-7 rounded-full border border-gray-300 text-sm leading-none hover:bg-gray-50", onClick: incDays, "aria-label": "Increase days", disabled: readOnly, children: "+" })] }), _jsxs("span", { className: "text-[11px] text-gray-500", children: ["up to ", MAX_DAYS, " days"] })] }), _jsxs("div", { className: "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3", children: [_jsx("div", { children: _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-medium text-gray-700", children: "Adults" }), _jsxs("div", { className: "mt-1 flex h-10 items-center justify-between rounded-lg border border-gray-300 px-3", children: [_jsx("button", { type: "button", className: "h-7 w-7 rounded-full border border-gray-300 text-sm leading-none hover:bg-gray-50", onClick: decAdults, "aria-label": "Decrease adults", disabled: readOnly, children: "\u2212" }), _jsx("span", { className: "min-w-[2ch] text-sm text-center", children: adults }), _jsx("button", { type: "button", className: "h-7 w-7 rounded-full border border-gray-300 text-sm leading-none hover:bg-gray-50", onClick: incAdults, "aria-label": "Increase adults", disabled: readOnly, children: "+" })] })] }) }), _jsx("div", { children: _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { className: "block text-xs font-medium text-gray-700", children: "Children" }), !childFriendly && (_jsx("span", { className: "text-[10px] text-gray-500", children: "Not child friendly" }))] }), _jsxs("div", { className: "mt-1 flex h-10 items-center justify-between rounded-lg border border-gray-300 px-3", children: [_jsx("button", { type: "button", className: "h-7 w-7 rounded-full border border-gray-300 text-sm leading-none hover:bg-gray-50 disabled:opacity-50", onClick: decChildren, "aria-label": "Decrease children", disabled: !childFriendly || readOnly, children: "\u2212" }), _jsx("span", { className: "min-w-[2ch] text-sm text-center", children: children }), _jsx("button", { type: "button", className: "h-7 w-7 rounded-full border border-gray-300 text-sm leading-none hover:bg-gray-50 disabled:opacity-50", onClick: incChildren, "aria-label": "Increase children", disabled: !childFriendly || readOnly, children: "+" })] })] }) }), maxAllowed !== undefined && (_jsxs("p", { className: "-mt-1 text-[11px] text-gray-500", children: ["Max ", maxAllowed, " guests."] })), overMax && (_jsx("p", { className: "-mt-1 text-[11px] text-red-600", children: "You\u2019ve exceeded the maximum capacity." }))] }), _jsx("div", { className: "mt-4", children: available ? (_jsx("div", { className: "space-y-3", children: trips.map((t, i) => (_jsxs("div", { className: "rounded-xl border border-black/10 p-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "font-semibold text-sm", children: t.name }), _jsxs("div", { className: "text-xs text-gray-600", children: [t.duration, t.maxAnglers ? ` • up to ${t.maxAnglers} anglers` : ""] }), t.startTimes && t.startTimes.length > 0 && (_jsxs("div", { className: "mt-1 text-xs text-gray-600", children: ["Starts: ", t.startTimes.join(", ")] })), t.description && (_jsx("div", { className: "mt-2 text-xs text-gray-700", children: t.description }))] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-sm font-semibold text-[#ec2227]", children: ["RM", t.price * days] }), days > 1 && (_jsxs("div", { className: "text-[11px] text-gray-500", children: ["total for ", days, " day", days > 1 ? "s" : ""] }))] })] }), _jsx("button", { type: "button", className: "mt-3 w-full rounded-xl bg-[#ec2227] px-4 py-2 text-sm font-semibold text-white hover:translate-y-px transition disabled:opacity-50", disabled: overMax, onClick: () => {
                                    // TODO: replace with real reserve flow (route to checkout or call API)
                                    console.log("Reserve", {
                                        tripIndex: i,
                                        date,
                                        days,
                                        adults,
                                        children,
                                    });
                                }, children: "Reserve Trip" })] }, t.name + i))) })) : (_jsx("p", { className: "text-xs text-gray-600", children: "Select a date to view available trips." })) })] }));
}
