export default function PageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-center w-full max-w-[1024px] mx-auto px-5 md:px-20">
      {children}
    </div>
  );
}
