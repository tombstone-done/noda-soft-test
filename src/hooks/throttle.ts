import { useCallback, useState } from "react";

export const useThrottle = (callbackFn: () => void, delay: number) => {
  const [isFree, setIsFree] = useState(true);

  const throttledFunction = useCallback(() => {
    if (!isFree) return;

    callbackFn();
    setIsFree(false);
    setTimeout(() => setIsFree(true), delay);
  }, [isFree, callbackFn, delay]);

  return throttledFunction;
};
