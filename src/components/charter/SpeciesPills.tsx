"use client";
import clsx from "clsx";
// Accept ImageComponent prop for framework-agnostic image rendering

// Rich pill item supports separate english & local names + optional thumbnail image.
export type SpeciesPillItem = {
  id?: string;
  label?: string; // fallback simple label
  english?: string; // english/common name
  local?: string; // local name
  imageSrc?: string | null; // optional tiny image
};

type SpeciesPillsProps = {
  items: (string | SpeciesPillItem)[];
  className?: string;
  size?: "sm" | "md" | "lg";
  readOnly?: boolean;
  onRemoveAction?: (item: SpeciesPillItem) => void;
  removableIconLabel?: string;
  showImage?: boolean;
  stackedNames?: boolean; // if true show english over local stacked, else inline
  ImageComponent?: React.ComponentType<any>;
};

// Shared pill renderer so form selection & preview use identical visual language
export function SpeciesPills(props: SpeciesPillsProps) {
  const {
    items,
    className,
    size = "sm",
    readOnly = true,
    onRemoveAction,
    removableIconLabel = "Remove",
    showImage = true,
    stackedNames = true,
    ImageComponent,
  } = props;
  const sizeStyles: Record<
    typeof size,
    { pad: string; text: string; img: number }
  > = {
    sm: { pad: "px-2 py-0.5", text: "text-[10px]", img: 30 },
    md: { pad: "px-3 py-1", text: "text-xs", img: 35 },
    lg: { pad: "px-4 py-1.5", text: "text-sm", img: 40 },
  } as const;
  const current = sizeStyles[size];
  return (
    <div className={clsx("flex flex-wrap items-center gap-2", className)}>
      {items.map((raw, i) => {
        const item: SpeciesPillItem =
          typeof raw === "string" ? { label: raw, english: raw } : raw;
        const english = item.english || item.label || "Unknown";
        const local = item.local;
        const hasBoth = Boolean(local && local !== english);
        const pillClasses = clsx(
          "group inline-flex items-center rounded-full border border-neutral-200 bg-white font-medium text-slate-700 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-slate-400/30",
          current.pad,
          current.text,
          !readOnly &&
            onRemoveAction &&
            "pr-1.5 cursor-pointer hover:border-red-300 hover:bg-red-50/40"
        );
        return (
          <span
            key={item.id || english + i}
            className={pillClasses}
            {...(!readOnly && onRemoveAction
              ? {
                  onClick: () => onRemoveAction(item),
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: (e: React.KeyboardEvent) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onRemoveAction(item);
                    }
                  },
                }
              : {})}
          >
            {showImage && item.imageSrc ? (
              <span className="relative inline-flex items-center justify-center w-20 mr-2 overflow-hidden rounded-l-full h-15 bg-white/50 ">
                {ImageComponent ? (
                  <ImageComponent
                    src={item.imageSrc}
                    alt={english}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <img
                    src={item.imageSrc || undefined}
                    alt={english}
                    className="object-contain w-full h-full"
                  />
                )}
              </span>
            ) : null}
            {stackedNames && hasBoth ? (
              <span className="flex flex-col leading-tight">
                <span className="font-semibold text-slate-800">{english}</span>
                <span className="font-normal text-[9px] text-slate-500">
                  {local}
                </span>
              </span>
            ) : (
              <div className="flex flex-col leading-tight">
                <span>{english}</span>
                {hasBoth && (
                  <span className="font-normal text-slate-500">{local}</span>
                )}
              </div>
            )}
            {!readOnly && onRemoveAction && (
              <button
                type="button"
                aria-label={`${removableIconLabel} ${english}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveAction(item);
                }}
                className="ml-1 rounded-full px-1 text-[10px] font-bold text-red-400 transition-colors hover:bg-red-100 hover:text-red-600"
              >
                ×
              </button>
            )}
          </span>
        );
      })}
    </div>
  );
}
