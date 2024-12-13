import { useCallback, useEffect, useRef, useState } from "react";

export default function useActiveScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [observerReady, setObserverReady] = useState(false);

  const observer = useRef<IntersectionObserver>();

  const addObserver = useCallback(
    (element: Element) => {
      if (observerReady && observer.current) {
        observer.current.observe(element);
      }
    },
    [observerReady],
  );

  useEffect(() => {
    observer.current = new IntersectionObserver(
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
    );
    setObserverReady(true);
    return () => observer.current && observer.current.disconnect();
  }, [setObserverReady]);

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
  }, [addObserver]);

  return elementRef;
};
