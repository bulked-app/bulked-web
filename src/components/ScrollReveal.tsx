import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

const ScrollReveal = ({ children, className = "" }: ScrollRevealProps) => {
  return <div className={className}>{children}</div>;
};

export default ScrollReveal;
