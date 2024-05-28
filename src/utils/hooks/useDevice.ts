// @ts-nocheck
import { SCREEN_DIMENSIONS } from "@/constants/config";
import { useEffect, useState } from "react";

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

export interface DimensionsProp {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  width?: number;
  height?: number;
}

const useDevice = (): DimensionsProp => {
  const [dimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: dimensions?.width <= SCREEN_DIMENSIONS?.mobile,
    isTablet:
      dimensions?.width <= SCREEN_DIMENSIONS.tablet &&
      dimensions?.width > SCREEN_DIMENSIONS.mobile,
    isDesktop: dimensions.width > SCREEN_DIMENSIONS.tablet,
    ...dimensions,
  };
};

export default useDevice;
