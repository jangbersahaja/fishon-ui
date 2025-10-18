import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
// Shared pill renderer so form selection & preview use identical visual language
export function SpeciesPills(props) {
    const { items, className, size = "sm", readOnly = true, onRemoveAction, removableIconLabel = "Remove", showImage = true, stackedNames = true, ImageComponent, } = props;
    const sizeStyles = {
        sm: { pad: "px-2 py-0.5", text: "text-[10px]", img: 30 },
        md: { pad: "px-3 py-1", text: "text-xs", img: 35 },
        lg: { pad: "px-4 py-1.5", text: "text-sm", img: 40 },
    };
    const current = sizeStyles[size];
    return (_jsx("div", { className: clsx("flex flex-wrap items-center gap-2", className), children: items.map((raw, i) => {
            const item = typeof raw === "string" ? { label: raw, english: raw } : raw;
            const english = item.english || item.label || "Unknown";
            const local = item.local;
            const hasBoth = Boolean(local && local !== english);
            const pillClasses = clsx("group inline-flex items-center rounded-full border border-neutral-200 bg-white font-medium text-slate-700 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-slate-400/30", current.pad, current.text, !readOnly &&
                onRemoveAction &&
                "pr-1.5 cursor-pointer hover:border-red-300 hover:bg-red-50/40");
            return (_jsxs("span", Object.assign({ className: pillClasses }, (!readOnly && onRemoveAction
                ? {
                    onClick: () => onRemoveAction(item),
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onRemoveAction(item);
                        }
                    },
                }
                : {}), { children: [showImage && item.imageSrc ? (_jsx("span", { className: "relative inline-flex items-center justify-center w-20 mr-2 overflow-hidden rounded-l-full h-15 bg-white/50 ", children: ImageComponent ? (_jsx(ImageComponent, { src: item.imageSrc, alt: english, fill: true, className: "object-contain" })) : (_jsx("img", { src: item.imageSrc || undefined, alt: english, className: "object-contain w-full h-full" })) })) : null, stackedNames && hasBoth ? (_jsxs("span", { className: "flex flex-col leading-tight", children: [_jsx("span", { className: "font-semibold text-slate-800", children: english }), _jsx("span", { className: "font-normal text-[9px] text-slate-500", children: local })] })) : (_jsxs("div", { className: "flex flex-col leading-tight", children: [_jsx("span", { children: english }), hasBoth && (_jsx("span", { className: "font-normal text-slate-500", children: local }))] })), !readOnly && onRemoveAction && (_jsx("button", { type: "button", "aria-label": `${removableIconLabel} ${english}`, onClick: (e) => {
                            e.stopPropagation();
                            onRemoveAction(item);
                        }, className: "ml-1 rounded-full px-1 text-[10px] font-bold text-red-400 transition-colors hover:bg-red-100 hover:text-red-600", children: "\u00D7" }))] }), item.id || english + i));
        }) }));
}
