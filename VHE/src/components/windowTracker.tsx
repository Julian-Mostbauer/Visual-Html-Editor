import { useState, useEffect } from 'react';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  
  return new WindowInfoSave(width, height);
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export class WindowInfoSave {
  xLen;
  yLen;

  constructor(xLen: number, yLen: number) {
    this.xLen = xLen;
    this.yLen = yLen;
  }
}