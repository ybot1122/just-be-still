export default function PageSection({
  children,
  centered = true,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}) {
  const c_class = centered ? "text-center" : "";
  return (
    <div
      className={`${c_class} w-full max-w-[1024px] mx-auto px-5 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
