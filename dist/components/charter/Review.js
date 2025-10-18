import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveBadges } from "./reviewBadges";
function formatDate(iso) {
    if (!iso)
        return "";
    try {
        const normalized = iso.length === 10 ? `${iso}T00:00:00` : iso;
        return new Date(normalized).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }
    catch (_a) {
        return iso;
    }
}
export function Review(props) {
    const { reviewerName, reviewerInitials, createdAt, tripName, overallRating, review, badges = [], media = [], id, ImageComponent, } = props;
    const resolvedBadges = resolveBadges(badges);
    return (_jsxs("article", { className: "flex h-full flex-col rounded-3xl border border-black/10 bg-white/95 p-5 shadow-sm transition hover:shadow-md", children: [_jsxs("header", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold uppercase text-gray-700", children: reviewerInitials || reviewerName.slice(0, 2).toUpperCase() }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold text-gray-900", children: reviewerName }), _jsxs("div", { className: "text-xs text-gray-500", children: [formatDate(createdAt), " \u00B7 ", tripName] })] })] }), _jsx("div", { className: "flex flex-col items-end gap-1", children: _jsxs("span", { className: "text-xs font-semibold text-gray-500", children: [overallRating.toFixed(1), " / 5"] }) })] }), review && (_jsx("p", { className: "mt-4 text-sm leading-6 text-gray-700", children: review })), media.length > 0 && (_jsx("div", { className: "mt-3 flex gap-2 overflow-x-auto", children: media.map((item) => {
                    if (item.type === "image") {
                        return (_jsx("div", { className: "relative h-15 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100", children: ImageComponent ? (_jsx(ImageComponent, { src: item.url, alt: item.alt, fill: true, sizes: "128px", className: "object-cover" })) : (_jsx("img", { src: item.url, alt: item.alt, className: "object-cover w-full h-full" })) }, item.id));
                    }
                    return (_jsx("div", { className: "relative h-15 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-900", children: _jsx("video", { className: "h-full w-full object-cover", controls: true, preload: "metadata", muted: true, playsInline: true, poster: item.poster, children: _jsx("source", { src: item.url, type: "video/mp4" }) }) }, item.id));
                }) })), resolvedBadges.length > 0 && (_jsx("div", { className: "mt-4 flex flex-wrap gap-2 border-t border-dashed border-gray-200 pt-3", children: resolvedBadges.map((badge) => (_jsxs("span", { className: "group relative inline-flex", children: [_jsxs("span", { tabIndex: 0, className: "inline-flex items-center gap-1 rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400", children: [_jsx("span", { children: badge.icon }), _jsx("span", { children: badge.label })] }), _jsx("span", { className: "pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden w-44 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-medium text-white shadow-lg group-hover:flex group-focus-within:flex", children: _jsx("span", { className: "leading-snug", children: badge.description }) })] }, `${id}-${badge.id}`))) }))] }));
}
// Default export for compatibility
export default Review;
