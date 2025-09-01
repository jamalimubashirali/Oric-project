import { useState, useEffect } from 'react';

const useImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4); // Assuming 4 images
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { currentSlide, sliderRef };
};

export default useImageSlider;