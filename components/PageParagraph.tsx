export default function ({
  children,
  isAccent = false,
}: {
  children: React.ReactNode;
  isAccent?: boolean;
}) {
  const bgClass = isAccent ? ` bg-forest text-white py-5 ` : "";

  return (
    <p
      className={`text-xl md:text-2xl md:leading-loose mt-5 md:mt-20 px-5 m-auto ${bgClass}`}
    >
      {children}
    </p>
  );
}
