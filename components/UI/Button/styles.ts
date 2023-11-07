import { match } from 'ts-pattern';

import { Size, Variant } from './types';

export const sizeStyles = {
  small: 'py-[4px] px-[8px]',
  normal: 'py-[10px] px-[20px]',
  large: 'py-[20px] px-[40px]',
};

export const variantStyles = {
  primary:
    'bg-white font-bold rounded-[24px] hover:bg-primary hover:text-fontWhite',
  secondary: 'bg-primary text-fontWhite rounded-[24px]',
  tertiary: 'bg-black text-fontWhite',
};

export const variantPattern = (variant?: Variant) =>
  match(variant)
    .with('primary', (variant) => variantStyles[variant])
    .with('secondary', (variant) => variantStyles[variant])
    .with('tertiary', (variant) => variantStyles[variant])
    .otherwise(() => variantStyles.primary);

export const sizePattern = (size?: Size) =>
  match(size)
    .with('small', (size) => sizeStyles[size])
    .with('normal', (size) => sizeStyles[size])
    .with('large', (size) => sizeStyles[size])
    .otherwise(() => sizeStyles.normal);
