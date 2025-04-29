
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface HoloButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  glitch?: boolean;
}

const HoloButton = forwardRef<HTMLButtonElement, HoloButtonProps>(
  ({ className, variant = 'default', size = 'default', glitch = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'holo-button',
          {
            'px-5 py-2 text-sm': size === 'sm',
            'px-8 py-3': size === 'default',
            'px-12 py-4 text-lg': size === 'lg',
            'bg-transparent border-2': variant === 'outline',
            'hover:animate-glitch': glitch,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

HoloButton.displayName = 'HoloButton';

export { HoloButton };
