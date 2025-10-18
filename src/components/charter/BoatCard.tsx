import type { CharterFormValues } from "@fishon/schemas";

export type BoatCardProps = {
  boat: CharterFormValues["boat"];
};

export function BoatCard({ boat }: BoatCardProps) {
  if (!boat) return null;
  return (
    <div className="p-5 mt-6 bg-white border rounded-2xl border-black/10 sm:p-6">
      <h3 className="text-base font-semibold sm:text-lg">Boat</h3>
      <ul className="grid grid-cols-1 gap-2 mt-2 text-sm text-gray-700 sm:grid-cols-2">
        {boat.name && (
          <li>
            <strong>Name:</strong> {boat.name}
          </li>
        )}
        {boat.type && (
          <li>
            <strong>Type:</strong> {boat.type}
          </li>
        )}
        {typeof boat.lengthFeet === "number" && (
          <li>
            <strong>Length:</strong> {boat.lengthFeet} ft
          </li>
        )}
        {typeof boat.capacity === "number" && (
          <li>
            <strong>Capacity:</strong> {boat.capacity} pax
          </li>
        )}
        {Array.isArray(boat.features) && boat.features.length > 0 && (
          <li className="sm:col-span-2">
            <strong>Features:</strong> {boat.features.join(", ")}
          </li>
        )}
      </ul>
    </div>
  );
}

export default BoatCard;
