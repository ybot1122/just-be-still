export default function PageParagraph({
  children,
  isAccent = false,
  as = "p",
  className = "",
}: {
  children: React.ReactNode;
  isAccent?: boolean;
  as?: "p" | "div";
  className?: string;
}) {
  const bgClass = isAccent ? "pageParagraphAccent" : "pageParagraph";
  const Component = as;

  return (
    <Component className={`${bgClass} mt-5 md:mt-20 ${className}`}>
      {children}
    </Component>
  );
}
