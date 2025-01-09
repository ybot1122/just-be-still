export default function PageSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-center w-full max-w-[1024px] mx-auto px-5 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
