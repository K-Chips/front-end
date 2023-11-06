import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { cn } from '@/utils/cn';

import { sizePattern, variantPattern } from './styles';
import { Size, Variant } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, size, variant, ...props }: ButtonProps, ref) => {
    const patternedSize = sizePattern(size);
    const patternedVariant = variantPattern(variant);

    return (
      <button
        ref={ref}
        className={cn(patternedSize, patternedVariant, className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
