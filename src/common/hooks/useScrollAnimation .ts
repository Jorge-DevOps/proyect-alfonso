import { useEffect, useState } from "react";

interface Props {
  target: HTMLElement | null;
}

const useScrollAnimation = (props: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const { target } = props;
    if (!target) return;

    const handleScroll = () => {
      if (target.getBoundingClientRect().top < window.innerHeight) {
        setIsAnimating(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [props.target]);

  return { isAnimating };
};

export default useScrollAnimation;
