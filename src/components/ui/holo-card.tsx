
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HoloCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glowEffect?: boolean;
}

const HoloCard = ({ children, className, hoverable = false, glowEffect = false }: HoloCardProps) => {
  return (
    <div
      className={cn(
        'holo-card p-6',
        {
          'transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-holo-primary/30': hoverable,
          'holo-glow': glowEffect,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default HoloCard;
