export interface AboutSectionProps {
  description: string;
  title?: string;
}

export default function AboutSection({
  description,
  title = "About this charter",
}: AboutSectionProps) {
  return (
    <section className="mt-6">
      <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
      <div className="mt-2 text-sm leading-6 prose-sm prose text-gray-700 max-w-none">
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
      <div className="h-px mt-4 bg-black/10" />
    </section>
  );
}
