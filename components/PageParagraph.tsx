export default function PageParagraph({
  children,
  isAccent = false,
  as = "p",
}: {
  children: React.ReactNode;
  isAccent?: boolean;
  as?: "p" | "div";
}) {
  const bgClass = isAccent ? ` bg-forest text-white py-5 ` : "";
  const Component = as;

  return (
    <Component
      className={`text-xl md:text-2xl md:leading-loose mt-5 md:mt-20 px-5 m-auto ${bgClass}`}
    >
      {children}
    </Component>
  );
}
