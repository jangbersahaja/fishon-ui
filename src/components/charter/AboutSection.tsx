"use client";

export interface AboutSectionProps {
  description: string;
  title?: string;
}

export default function AboutSection({
  description,
  title = "About this charter",
}: AboutSectionProps) {
  return (
    <section className="mt-0">
      <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
      <div className="prose prose-sm mt-2 max-w-none text-sm leading-6 text-gray-700">
        {(description || "").split(/\n{2,}/).map((p, i) => (
          <p key={i} className="mb-4 last:mb-0">
            {p
              .trim()
              .split(/\n/)
              .map((line, j, arr) =>
                j < arr.length - 1 ? (
                  <span key={j}>
                    {line}
                    <br />
                    <br />
                  </span>
                ) : (
                  line
                )
              )}
          </p>
        ))}
      </div>
      <div className="mt-4 h-px bg-black/10" />
    </section>
  );
}
