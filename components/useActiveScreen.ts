import { useCallback, useEffect, useRef, useState } from "react";

export default function useActiveScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ind = entry.target.getAttribute("data-index");
            if (ind) {
              setActiveIndex(parseInt(ind));
            }
          }
        });
      },
      {
        threshold: 0.25,
      },
    ),
  );

  const addObserver = useCallback((element: Element) => {
    observer.current.observe(element);
  }, []);

  useEffect(() => {
    return () => observer.current.disconnect();
  }, []);

  return { addObserver, activeIndex };
}

export const useObserveRef = ({
  addObserver,
}: {
  addObserver: (element: Element) => void;
}) => {
  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef.current) {
      addObserver(elementRef.current);
    }
  }, []);

  return elementRef;
};
