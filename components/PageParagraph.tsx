export default function PageParagraph({
  children,
  isAccent = false,
  as = "p",
  className = "",
  rawHtml,
}: {
  children?: React.ReactNode;
  isAccent?: boolean;
  as?: "p" | "div";
  className?: string;
  rawHtml?: string;
}) {
  const bgClass = isAccent ? "pageParagraphAccent" : "pageParagraph";
  const Component = as;

  if (rawHtml) {
    return (
      <Component
        className={`${bgClass} mt-5 md:mt-20 ${className}`}
        dangerouslySetInnerHTML={rawHtml ? { __html: rawHtml } : undefined}
      />
    );
  }

  return (
    <Component className={`${bgClass} mt-5 md:mt-20 ${className}`}>
      {children}
    </Component>
  );
}
