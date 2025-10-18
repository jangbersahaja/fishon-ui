// Accept ImageComponent prop for framework-agnostic image rendering
import type { ReviewProps } from "../../types/charter";
import { resolveBadges } from "./reviewBadges";

function formatDate(iso: string): string {
  if (!iso) return "";
  try {
    const normalized = iso.length === 10 ? `${iso}T00:00:00` : iso;
    return new Date(normalized).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
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
    <article className="flex h-full flex-col rounded-3xl border border-black/10 bg-white/95 p-5 shadow-sm transition hover:shadow-md">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold uppercase text-gray-700">
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
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {media.map((item) => {
            if (item.type === "image") {
              return (
                <div
                  key={item.id}
                  className="relative h-15 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100"
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
                className="relative h-15 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-900"
              >
                <video
                  className="h-full w-full object-cover"
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
        <div className="mt-4 flex flex-wrap gap-2 border-t border-dashed border-gray-200 pt-3">
          {resolvedBadges.map((badge) => (
            <span
              key={`${id}-${badge.id}`}
              className="group relative inline-flex"
            >
              <span
                tabIndex={0}
                className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden w-44 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-medium text-white shadow-lg group-hover:flex group-focus-within:flex">
                <span className="leading-snug">{badge.description}</span>
              </span>
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

// Default export for compatibility
export default Review;
