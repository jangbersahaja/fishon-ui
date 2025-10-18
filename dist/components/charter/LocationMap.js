"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function LocationMap({ title, mapEmbedSrc, }) {
    return (_jsxs("section", { className: "mt-8", children: [_jsxs("div", { className: "px-0", children: [_jsx("h3", { className: "text-base font-semibold sm:text-lg", children: "Location map" }), _jsx("p", { className: "mt-1 text-xs text-gray-500", children: "Centered on the meeting point." })] }), _jsx("div", { className: "relative mt-3", children: _jsx("iframe", { title: `Map of ${title}`, src: mapEmbedSrc, className: "block w-full rounded-lg", style: { aspectRatio: "16 / 9", border: 0 }, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })] }));
}
