import { FC } from 'react';

import { cn } from '@/utils';

import { TagType, TypographyProps, VariantType } from './types';

const Typography: FC<TypographyProps> = ({
  children,
  variant = 'p1',
  className,
  ...props
}) => {
  const variants: { [key in VariantType]: string } = {
    h1: 'text-4xl font-bold',
    h2: 'text-xl font-bold',
    h3: 'text-base font-bold',
    p1: 'text-base font-normal',
    p2: 'text-sm font-normal',
    p3: 'text-xs font-normal',
    p4: 'text-2xs font-normal',
  };

  const getTagClass = (variant: VariantType) => {
    switch (variant) {
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'p1':
      case 'p2':
      case 'p3':
      case 'p4':
        return 'p';
      default:
        return 'span';
    }
  };

  const Tag = getTagClass(variant) as TagType;

  return (
    <Tag className={cn(variants[variant], className)} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
