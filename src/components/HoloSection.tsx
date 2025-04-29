
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HoloSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

const HoloSection = ({ children, id, className, fullHeight = false }: HoloSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full py-16 relative',
        {
          'min-h-screen flex items-center': fullHeight,
        },
        className
      )}
    >
      <div className="noise-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default HoloSection;
