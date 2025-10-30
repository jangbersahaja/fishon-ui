"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Anchor, MapPin, ShipIcon, X } from "lucide-react";
// Accept ImageComponent prop for framework-agnostic image rendering
import { useEffect } from "react";
export default function CaptainDetailModal(props) {
    const { captain, open, onOpenChange, ImageComponent } = props;
    useEffect(() => {
        if (!open)
            return;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onOpenChange(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onOpenChange]);
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);
    if (!open || !captain)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity", onClick: () => onOpenChange(false) }), _jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: _jsxs("div", { className: "relative w-full max-w-md rounded-3xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { onClick: () => onOpenChange(false), className: "absolute right-4 top-4 z-10 rounded-full bg-neutral-100 p-2 hover:bg-neutral-200 transition-colors", children: _jsx(X, { className: "h-5 w-5 text-neutral-600" }) }), _jsx("div", { className: "relative h-32 bg-gradient-to-br from-[#EC2227] to-[#EC2227]/80" }), _jsxs("div", { className: "relative -mt-16 px-6 pb-8 pt-8", children: [_jsx("div", { className: "mb-6 flex justify-center", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white", children: captain.avatarUrl ? (ImageComponent ? (_jsx(ImageComponent, { src: captain.avatarUrl, alt: captain.displayName, width: 128, height: 128, className: "h-full w-full object-cover" })) : (_jsx("img", { src: captain.avatarUrl, alt: captain.displayName, width: 128, height: 128, className: "h-full w-full object-cover" }))) : (_jsx("div", { className: "h-full w-full bg-gradient-to-br from-[#EC2227]/10 to-[#EC2227]/5 flex items-center justify-center", children: _jsx(Anchor, { className: "h-12 w-12 text-[#EC2227]/40" }) })) }), _jsxs("div", { className: "absolute -bottom-2 -right-2 rounded-full bg-[#EC2227] px-3 py-1 text-sm font-bold text-white shadow-lg border-4 border-white", children: [captain.experienceYrs, "y"] })] }) }), _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-neutral-900", children: captain.displayName }), _jsxs("div", { className: "mt-2 flex items-center justify-center gap-2 text-neutral-600", children: [_jsx(MapPin, { className: "h-5 w-5 text-[#EC2227]" }), _jsxs("span", { className: "font-medium", children: [captain.city, ", ", captain.state] })] })] }), _jsx("div", { className: "my-6 h-px bg-neutral-200" }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500", children: "About" }), _jsx("p", { className: "text-base leading-relaxed text-neutral-700", children: captain.bio || "Passionate fishing charter captain" })] }), _jsxs("div", { className: "mb-6 grid grid-cols-2 gap-3", children: [_jsxs("div", { className: "rounded-xl bg-neutral-50 p-4 text-center", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(ShipIcon, { className: "h-5 w-5 text-[#EC2227]" }), _jsx("span", { className: "text-xl font-bold text-neutral-900", children: captain.charterCount })] }), _jsx("p", { className: "text-xs font-medium text-neutral-600", children: "Available Trips" })] }), _jsxs("div", { className: "rounded-xl bg-neutral-50 p-4 text-center", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(Anchor, { className: "h-5 w-5 text-[#EC2227]" }), _jsx("p", { className: "text-lg font-bold text-neutral-900", children: captain.createdAt instanceof Date
                                                                ? captain.createdAt.toLocaleDateString("en-MY", {
                                                                    month: "short",
                                                                    year: "2-digit",
                                                                    timeZone: "Asia/Kuala_Lumpur",
                                                                })
                                                                : captain.createdAt })] }), _jsx("p", { className: "text-xs font-medium text-neutral-600 tracking-wide", children: "Fishon Captain Since" })] })] }), _jsx("a", { href: `/auth?next=/captain/form`, className: "block w-full rounded-xl bg-[#EC2227] py-3 text-center font-semibold text-white hover:bg-[#EC2227]/90 transition-colors shadow-md hover:shadow-lg", children: "Start Your Journey" }), _jsxs("p", { className: "mt-4 text-center text-xs text-neutral-600", children: ["Join ", captain.charterCount, "+ captains already earning on Fishon.my"] })] })] }) })] }));
}
