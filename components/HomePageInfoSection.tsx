import { useCallback, useEffect, useRef } from "react";

export default function HomePageInfoSection({
  children,
  isForest = false,
  header,
  onInView,
}: {
  children: React.ReactNode;
  isForest?: boolean;
  header?: string;
  onInView: () => void;
}) {
  const bgClass = isForest ? " bg-forest text-white " : " text-black ";
  const textClass = isForest ? "" : " text-forest ";

  const elementRef = useRef(null);

  const handleIntersection = useCallback((inView: boolean) => {
    if (inView) {
      onInView();
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          handleIntersection(entry.isIntersecting);
        });
      },
      {
        threshold: 1.0,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  return (
    <section
      className="section tall:snap-start tall:snap-always"
      ref={elementRef}
    >
      <div
        className={`flex flex-wrap justify-center items-center text-center w-full tall:h-[100vh] ${bgClass}`}
      >
        {header && (
          <h2
            className={`${textClass} text-3xl md:text-5xl mt-20 mx-5 w-full mb-10 tall:mb-0`}
          >
            {header}
          </h2>
        )}

        {children}
      </div>
    </section>
  );
}
