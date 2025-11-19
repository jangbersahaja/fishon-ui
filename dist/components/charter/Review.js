import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveBadges } from "./reviewBadges";
function formatDate(iso) {
    if (!iso)
        return "";
    try {
        const normalized = iso.length === 10 ? `${iso}T00:00:00` : iso;
        return new Date(normalized).toLocaleDateString("en-MY", {
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
export function Review(props) {
    const { reviewerName, reviewerInitials, createdAt, tripName, overallRating, review, badges = [], media = [], id, ImageComponent, } = props;
    const resolvedBadges = resolveBadges(badges);
    return (_jsxs("article", { className: "flex flex-col h-full p-5 transition border shadow-sm rounded-3xl border-black/10 bg-white/95 hover:shadow-md", children: [_jsxs("header", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "flex items-center justify-center w-12 h-12 text-sm font-semibold text-gray-700 uppercase bg-gray-100 rounded-full", children: reviewerInitials || reviewerName.slice(0, 2).toUpperCase() }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold text-gray-900", children: reviewerName }), _jsxs("div", { className: "text-xs text-gray-500", children: [formatDate(createdAt), " \u00B7 ", tripName] })] })] }), _jsx("div", { className: "flex flex-col items-end gap-1", children: _jsxs("span", { className: "text-xs font-semibold text-gray-500", children: [overallRating.toFixed(1), " / 5"] }) })] }), review && (_jsx("p", { className: "mt-4 text-sm leading-6 text-gray-700", children: review })), media.length > 0 && (_jsx("div", { className: "flex gap-2 mt-3 overflow-x-auto", children: media.map((item) => {
                    if (item.type === "image") {
                        return (_jsx("div", { className: "relative w-20 overflow-hidden bg-gray-100 h-15 shrink-0 rounded-xl", children: ImageComponent ? (_jsx(ImageComponent, { src: item.url, alt: item.alt, fill: true, sizes: "128px", className: "object-cover" })) : (_jsx("img", { src: item.url, alt: item.alt, className: "object-cover w-full h-full" })) }, item.id));
                    }
                    return (_jsx("div", { className: "relative w-20 overflow-hidden bg-gray-900 h-15 shrink-0 rounded-xl", children: _jsx("video", { className: "object-cover w-full h-full", controls: true, preload: "metadata", muted: true, playsInline: true, poster: item.poster, children: _jsx("source", { src: item.url, type: "video/mp4" }) }) }, item.id));
                }) })), resolvedBadges.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 pt-3 mt-4 border-t border-gray-200 border-dashed", children: resolvedBadges.map((badge) => (_jsxs("span", { className: "relative inline-flex group", children: [_jsxs("span", { tabIndex: 0, className: "inline-flex items-center gap-1 rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400", children: [_jsx("img", { src: badge.iconUrl, alt: badge.label, className: "object-contain w-4 h-4" }), _jsx("span", { children: badge.label })] }), _jsx("span", { className: "absolute z-20 hidden px-3 py-2 mt-2 text-xs font-medium text-center text-white -translate-x-1/2 bg-gray-900 rounded-lg shadow-lg pointer-events-none left-1/2 top-full w-44 group-hover:flex group-focus-within:flex", children: _jsx("span", { className: "leading-snug", children: badge.description }) })] }, `${id}-${badge.id}`))) }))] }));
}
// Default export for compatibility
export default Review;
