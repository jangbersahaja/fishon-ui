import type { GuestFeedbackProps } from "../../types/charter";

function formatDate(iso: string | undefined) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("en-MY", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "Asia/Kuala_Lumpur",
    });
  } catch {
    return iso;
  }
}

export function GuestFeedback({
  reviews,
  ratingAvg,
  ratingCount,
  summariseBadges,
}: GuestFeedbackProps) {
  if (ratingCount === 0) return null;

  const badgeSummary = summariseBadges(reviews);
  if (badgeSummary.length === 0) return null;

  const totalBadges = badgeSummary.reduce((sum, item) => sum + item.count, 0);
  const topBadges = badgeSummary.slice(0, 8);
  const highlightBadges = badgeSummary.slice(0, 3).map((item) => item.badge);

  return (
    <section className="p-5 mt-8 bg-white border rounded-2xl border-black/10 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold sm:text-lg">Guest feedback</h3>
          <p className="text-xs text-gray-500 sm:text-sm">
            Based on recent verified trips
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border rounded-full border-black/10">
            {/* Stars component should be injected by consumer */}
            <span className="font-medium">{ratingAvg.toFixed(1)}</span>
          </span>
          <span className="text-gray-500">
            {ratingCount} review{ratingCount === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      <div className="grid gap-4 mt-4 lg:grid-cols-3">
        <div className="p-4 bg-white border rounded-2xl border-black/10 lg:col-span-2">
          <h4 className="text-sm font-semibold">Badge highlights</h4>
          {topBadges.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-2 mt-3">
                {topBadges.map(({ badge, count }) => (
                  <span key={badge.id} className="relative inline-flex group">
                    <div
                      tabIndex={0}
                      className="flex flex-col items-center gap-1 text-sm text-amber-900"
                    >
                      <img
                        src={badge.iconUrl}
                        alt={badge.label}
                        className="object-contain w-20 h-20 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                      <span className="text-xs font-semibold tracking-wide uppercase">
                        {badge.label}
                      </span>
                      <span className="absolute top-3 right-3 text-[11px] font-semibold text-white bg-[#ec2227] rounded-full px-2 py-0.5">
                        {count}
                      </span>
                    </div>
                    <span className="absolute z-20 hidden w-48 px-3 py-2 mt-2 text-xs font-medium text-center text-white -translate-x-1/2 bg-gray-900 rounded-lg shadow-lg pointer-events-none left-1/2 top-full group-hover:flex group-focus-within:flex">
                      <span className="leading-snug">{badge.description}</span>
                    </span>
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Badges surface what guests called out most often after their
                trips.
              </p>
            </>
          ) : (
            <p className="mt-3 text-sm text-gray-500">
              No badge highlights yet — check back after the next trip.
            </p>
          )}
        </div>

        <div className="p-4 bg-white border rounded-2xl border-black/10">
          <h4 className="text-sm font-semibold">At a glance</h4>
          <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
            <div className="p-3 border rounded-lg border-black/5 bg-gray-50">
              <div className="text-xs text-gray-500">Avg. rating</div>
              <div className="text-base font-semibold">
                {ratingAvg.toFixed(1)} / 5
              </div>
            </div>
            <div className="p-3 border rounded-lg border-black/5 bg-gray-50">
              <div className="text-xs text-gray-500">Total badges</div>
              <div className="text-base font-semibold">{totalBadges}</div>
            </div>
            <div className="col-span-2 p-3 border rounded-lg border-black/5 bg-gray-50">
              <div className="text-xs text-gray-500">Recent activity</div>
              <div className="text-sm">{formatDate(reviews[0]?.createdAt)}</div>
            </div>
          </div>
        </div>
      </div>

      {highlightBadges.length > 0 && (
        <p className="mt-4 text-xs text-gray-500">
          Guests most often praise{" "}
          {highlightBadges.map((badge) => badge.label).join(", ")}
        </p>
      )}
    </section>
  );
}
