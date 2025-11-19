// Accept ImageComponent prop for framework-agnostic image rendering
import type { ReviewProps } from "../../types/charter";
import { resolveBadges } from "./reviewBadges";

function formatDate(iso: string): string {
  if (!iso) return "";
  try {
    const normalized = iso.length === 10 ? `${iso}T00:00:00` : iso;
    return new Date(normalized).toLocaleDateString("en-MY", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "Asia/Kuala_Lumpur",
    });
  } catch {
    return iso;
  }
}
export function Review(
  props: ReviewProps & { ImageComponent?: React.ComponentType<any> }
) {
  const {
    reviewerName,
    reviewerInitials,
    createdAt,
    tripName,
    overallRating,
    review,
    badges = [],
    media = [],
    id,
    ImageComponent,
  } = props;
  const resolvedBadges = resolveBadges(badges);
  return (
    <article className="flex flex-col h-full p-5 transition border shadow-sm rounded-3xl border-black/10 bg-white/95 hover:shadow-md">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 text-sm font-semibold text-gray-700 uppercase bg-gray-100 rounded-full">
            {reviewerInitials || reviewerName.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">
              {reviewerName}
            </div>
            <div className="text-xs text-gray-500">
              {formatDate(createdAt)} · {tripName}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {/* Stars component should be injected by consumer if needed */}
          <span className="text-xs font-semibold text-gray-500">
            {overallRating.toFixed(1)} / 5
          </span>
        </div>
      </header>

      {review && (
        <p className="mt-4 text-sm leading-6 text-gray-700">{review}</p>
      )}

      {media.length > 0 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {media.map((item) => {
            if (item.type === "image") {
              return (
                <div
                  key={item.id}
                  className="relative w-20 overflow-hidden bg-gray-100 h-15 shrink-0 rounded-xl"
                >
                  {ImageComponent ? (
                    <ImageComponent
                      src={item.url}
                      alt={item.alt}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              );
            }
            return (
              <div
                key={item.id}
                className="relative w-20 overflow-hidden bg-gray-900 h-15 shrink-0 rounded-xl"
              >
                <video
                  className="object-cover w-full h-full"
                  controls
                  preload="metadata"
                  muted
                  playsInline
                  poster={item.poster}
                >
                  <source src={item.url} type="video/mp4" />
                </video>
              </div>
            );
          })}
        </div>
      )}

      {resolvedBadges.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-3 mt-4 border-t border-gray-200 border-dashed">
          {resolvedBadges.map((badge) => (
            <div
              key={`${id}-${badge.id}`}
              className="relative inline-flex group"
            >
              <div
                tabIndex={0}
                className="flex items-center gap-1 rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <img
                  src={badge.iconUrl}
                  alt={badge.label}
                  className="object-contain w-4 h-4"
                />
                <span>{badge.label}</span>
              </div>
              <span className="absolute z-20 hidden px-3 py-2 mt-2 text-xs font-medium text-center text-white -translate-x-1/2 bg-gray-900 rounded-lg shadow-lg pointer-events-none left-1/2 top-full w-44 group-hover:flex group-focus-within:flex">
                <span className="leading-snug">{badge.description}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

// Default export for compatibility
export default Review;
