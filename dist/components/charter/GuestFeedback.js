import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function formatDate(iso) {
    if (!iso)
        return "—";
    try {
        return new Date(iso).toLocaleDateString("en-MY", {
            year: "numeric",
            month: "short",
            day: "numeric",
            timeZone: "Asia/Kuala_Lumpur",
        });
    }
    catch (_a) {
        return iso;
    }
}
export function GuestFeedback({ reviews, ratingAvg, ratingCount, summariseBadges, }) {
    var _a;
    if (ratingCount === 0)
        return null;
    const badgeSummary = summariseBadges(reviews);
    if (badgeSummary.length === 0)
        return null;
    const totalBadges = badgeSummary.reduce((sum, item) => sum + item.count, 0);
    const topBadges = badgeSummary.slice(0, 8);
    const highlightBadges = badgeSummary.slice(0, 3).map((item) => item.badge);
    return (_jsxs("section", { className: "p-5 mt-8 bg-white border rounded-2xl border-black/10 sm:p-6", children: [_jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-base font-semibold sm:text-lg", children: "Guest feedback" }), _jsx("p", { className: "text-xs text-gray-500 sm:text-sm", children: "Based on recent verified trips" })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-700", children: [_jsx("span", { className: "inline-flex items-center gap-2 px-3 py-1 bg-white border rounded-full border-black/10", children: _jsx("span", { className: "font-medium", children: ratingAvg.toFixed(1) }) }), _jsxs("span", { className: "text-gray-500", children: [ratingCount, " review", ratingCount === 1 ? "" : "s"] })] })] }), _jsxs("div", { className: "grid gap-4 mt-4 lg:grid-cols-3", children: [_jsxs("div", { className: "p-4 bg-white border rounded-2xl border-black/10 lg:col-span-2", children: [_jsx("h4", { className: "text-sm font-semibold", children: "Badge highlights" }), topBadges.length > 0 ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: topBadges.map(({ badge, count }) => (_jsxs("span", { className: "relative inline-flex group", children: [_jsxs("div", { tabIndex: 0, className: "flex flex-col items-center gap-1 text-sm text-amber-900", children: [_jsx("img", { src: badge.iconUrl, alt: badge.label, className: "object-contain w-20 h-20" }), _jsx("span", { className: "text-xs font-semibold tracking-wide uppercase", children: badge.label }), _jsx("span", { className: "absolute top-1.5 right-1.5 text-[11px] font-semibold text-white bg-[#ec2227] rounded-full px-2 py-0.5", children: count })] }), _jsx("span", { className: "absolute z-20 hidden w-48 px-3 py-2 mt-2 text-xs font-medium text-center text-white -translate-x-1/2 bg-gray-900 rounded-lg shadow-lg pointer-events-none left-1/2 top-full group-hover:flex group-focus-within:flex", children: _jsx("span", { className: "leading-snug", children: badge.description }) })] }, badge.id))) }), _jsx("p", { className: "mt-3 text-xs text-gray-500", children: "Badges surface what guests called out most often after their trips." })] })) : (_jsx("p", { className: "mt-3 text-sm text-gray-500", children: "No badge highlights yet \u2014 check back after the next trip." }))] }), _jsxs("div", { className: "p-4 bg-white border rounded-2xl border-black/10", children: [_jsx("h4", { className: "text-sm font-semibold", children: "At a glance" }), _jsxs("div", { className: "grid grid-cols-2 gap-3 mt-2 text-sm", children: [_jsxs("div", { className: "p-3 border rounded-lg border-black/5 bg-gray-50", children: [_jsx("div", { className: "text-xs text-gray-500", children: "Avg. rating" }), _jsxs("div", { className: "text-base font-semibold", children: [ratingAvg.toFixed(1), " / 5"] })] }), _jsxs("div", { className: "p-3 border rounded-lg border-black/5 bg-gray-50", children: [_jsx("div", { className: "text-xs text-gray-500", children: "Total badges" }), _jsx("div", { className: "text-base font-semibold", children: totalBadges })] }), _jsxs("div", { className: "col-span-2 p-3 border rounded-lg border-black/5 bg-gray-50", children: [_jsx("div", { className: "text-xs text-gray-500", children: "Recent activity" }), _jsx("div", { className: "text-sm", children: formatDate((_a = reviews[0]) === null || _a === void 0 ? void 0 : _a.createdAt) })] })] })] })] }), highlightBadges.length > 0 && (_jsxs("p", { className: "mt-4 text-xs text-gray-500", children: ["Guests most often praise", " ", highlightBadges.map((badge) => badge.label).join(", ")] }))] }));
}
