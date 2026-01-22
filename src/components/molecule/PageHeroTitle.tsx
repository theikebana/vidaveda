type Align = "left" | "center" | "right";

interface PageHeroTitleProps {
  title: string;
  eyebrow?: string;
  align?: Align;
  className?: string;
}

export default function PageHeroTitle({
  title,
  eyebrow,
  align = "center",
  className = "",
}: PageHeroTitleProps) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <header
      className={`flex flex-col gap-2  ${alignment} ${className}`}
    >
      {eyebrow && (
        <p className="text-h2 font-satisfy text-primary-gold ">
          {eyebrow}
        </p>
      )}

      <h1 className="text-h1 font-unbounded">
        {title}
      </h1>
    </header>
  );
}
