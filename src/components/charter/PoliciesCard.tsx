import type { CharterFormValues } from "@fishon/schemas";

export interface PoliciesCardProps {
  policies: CharterFormValues["policies"];
  pickup: CharterFormValues["pickup"];
}

export function PoliciesCard({ policies, pickup }: PoliciesCardProps) {
  if (!policies && !pickup) return null;

  return (
    <section className="p-5 mt-6 bg-white border rounded-2xl border-black/10 sm:p-6">
      <h3 className="text-base font-semibold sm:text-lg">
        Policies &amp; info
      </h3>
      <div className="grid grid-cols-1 gap-4 mt-2 text-sm text-gray-700 sm:grid-cols-2">
        {policies && (
          <ul className="space-y-1">
            <li>
              <strong>Catch &amp; keep:</strong>{" "}
              {policies.catchAndKeep ? "Allowed" : "No"}
            </li>
            <li>
              <strong>Catch &amp; release:</strong>{" "}
              {policies.catchAndRelease ? "Yes" : "No"}
            </li>
            <li>
              <strong>Child friendly:</strong>{" "}
              {policies.childFriendly ? "Yes" : "No"}
            </li>
            {"wheelchairAccessible" in policies && (
              <li>
                <strong>Wheelchair accessible:</strong>{" "}
                {policies.wheelchairAccessible ? "Yes" : "No"}
              </li>
            )}
            {"alcoholAllowed" in policies && (
              <li>
                <strong>Alcohol:</strong>{" "}
                {policies.alcoholAllowed ? "Allowed" : "Not allowed"}
              </li>
            )}
            {"smokingAllowed" in policies && (
              <li>
                <strong>Smoking:</strong>{" "}
                {policies.smokingAllowed ? "Allowed" : "Not allowed"}
              </li>
            )}
          </ul>
        )}
        {pickup && (
          <ul className="space-y-1">
            <li>
              <strong>Pickup:</strong>{" "}
              {pickup.available ? "Available" : "Not available"}
            </li>
            {"fee" in pickup && pickup.fee !== undefined && (
              <li>
                <strong>Pickup fee:</strong> RM{pickup.fee}
              </li>
            )}
            {Array.isArray(pickup.areas) && pickup.areas.length > 0 && (
              <li>
                <strong>Areas:</strong> {pickup.areas.join(", ")}
              </li>
            )}
            {pickup.notes && (
              <li>
                <strong>Notes:</strong> {pickup.notes}
              </li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
