import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/utils';

import { sizePattern, variantPattern } from './styles';
import { Size, Variant } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  text?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, size, variant, text, ...props }: ButtonProps,
    ref,
  ) => {
    const patternedSize = sizePattern(size);
    const patternedVariant = variantPattern(variant);

    return (
      <button
        ref={ref}
        className={cn(patternedSize, patternedVariant, className)}
        {...props}
      >
        {text}
        {children}
      </button>
    );
  },
);

export default Button;
