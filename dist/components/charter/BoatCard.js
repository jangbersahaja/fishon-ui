import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function BoatCard({ charter }) {
    const boat = charter.boat;
    if (!boat)
        return null;
    return (_jsxs("div", { className: "p-5 mt-6 bg-white border rounded-2xl border-black/10 sm:p-6", children: [_jsx("h3", { className: "text-base font-semibold sm:text-lg", children: "Boat" }), _jsxs("ul", { className: "grid grid-cols-1 gap-2 mt-2 text-sm text-gray-700 sm:grid-cols-2", children: [boat.name && (_jsxs("li", { children: [_jsx("strong", { children: "Name:" }), " ", boat.name] })), boat.type && (_jsxs("li", { children: [_jsx("strong", { children: "Type:" }), " ", boat.type] })), typeof boat.lengthFeet === "number" && (_jsxs("li", { children: [_jsx("strong", { children: "Length:" }), " ", boat.lengthFeet, " ft"] })), typeof boat.capacity === "number" && (_jsxs("li", { children: [_jsx("strong", { children: "Capacity:" }), " ", boat.capacity, " pax"] })), Array.isArray(boat.features) && boat.features.length > 0 && (_jsxs("li", { className: "sm:col-span-2", children: [_jsx("strong", { children: "Features:" }), " ", boat.features.join(", ")] }))] })] }));
}
export default BoatCard;
