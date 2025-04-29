
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HolographicTextProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  className?: string;
  glitch?: boolean;
  glow?: boolean;
}

const HolographicText = ({
  children,
  variant = 'h2',
  className,
  glitch = false,
  glow = false,
}: HolographicTextProps) => {
  const baseClasses = cn(
    'holo-text font-orbitron',
    {
      'text-4xl md:text-5xl lg:text-6xl font-bold': variant === 'h1',
      'text-3xl md:text-4xl font-bold': variant === 'h2',
      'text-2xl md:text-3xl font-semibold': variant === 'h3',
      'text-xl md:text-2xl font-medium': variant === 'h4',
      'text-lg font-medium': variant === 'span',
      'animate-hologram-flicker': true,
      'animate-glitch': glitch,
      'animate-glow': glow,
    },
    className
  );

  switch (variant) {
    case 'h1':
      return <h1 className={baseClasses}>{children}</h1>;
    case 'h2':
      return <h2 className={baseClasses}>{children}</h2>;
    case 'h3':
      return <h3 className={baseClasses}>{children}</h3>;
    case 'h4':
      return <h4 className={baseClasses}>{children}</h4>;
    case 'span':
      return <span className={baseClasses}>{children}</span>;
    default:
      return <h2 className={baseClasses}>{children}</h2>;
  }
};

export default HolographicText;
