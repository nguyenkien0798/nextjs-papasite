import { useState, useEffect } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
  screen: string 
}

function getBreakPoint(windowWidth: number) {
  if (windowWidth) {
    if (windowWidth < 480) {
      return "sm";
    } else if (windowWidth < 1024) {
      return "md";
    } else if (windowWidth < 1200) {
      return "lg";
    } else {
      return "xlg";
    }
  } else {
    return '';
  }
}

function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
    screen: ''

  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        screen: getBreakPoint(window.innerWidth)
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}

export default useWindowSize