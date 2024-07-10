export default function HomePageInfoSection({
  children,
  isForest = false,
  header,
  id,
}: {
  children: React.ReactNode;
  isForest?: boolean;
  header: string;
  id: string;
}) {
  const bgClass = isForest ? " bg-forest text-white " : " text-black ";
  const textClass = isForest ? "" : " text-forest ";

  return (
    <section
      className={`flex flex-wrap justify-center items-center text-center w-full h-[100vh] ${bgClass}`}
      id={id}
    >
      <h2 className={`${textClass} text-3xl md:text-5xl mt-10 mx-5 w-full`}>
        {header}
      </h2>

      {children}
    </section>
  );
}
