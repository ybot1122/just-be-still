export default function HomePageInfoSection({
  children,
  isForest = false,
  header,
}: {
  children: React.ReactNode;
  isForest?: boolean;
  header: string;
}) {
  const bgClass = isForest ? " bg-forest text-white " : " text-black ";
  const textClass = isForest ? "" : " text-forest ";

  return (
    <section
      className={`flex flex-wrap justify-center items-center text-center w-full h-[100vh] ${bgClass}`}
    >
      <h2
        className={`${textClass} text-3xl md:text-6xl mt-10 md:mt-20 mx-5 w-full`}
      >
        {header}
      </h2>

      {children}
    </section>
  );
}
