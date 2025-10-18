import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function AboutSection({ description, title = "About this charter", }) {
    return (_jsxs("section", { className: "mt-0", children: [_jsx("h3", { className: "text-base font-semibold sm:text-lg", children: title }), _jsx("div", { className: "mt-2 text-sm leading-6 prose-sm prose text-gray-700 max-w-none", children: (description || "").split(/\n{2,}/).map((p, i) => (_jsx("p", { className: "mb-4 last:mb-0", children: p
                        .trim()
                        .split(/\n/)
                        .map((line, j, arr) => j < arr.length - 1 ? (_jsxs("span", { children: [line, _jsx("br", {}), _jsx("br", {})] }, j)) : (line)) }, i))) }), _jsx("div", { className: "h-px mt-4 bg-black/10" })] }));
}
