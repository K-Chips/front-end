import { HTMLAttributes } from 'react';

import { cn } from '@/utils';

import { getAlignClass, getJustifyClass, LayoutBasicProps } from './styles';

interface ColumnProps
  extends LayoutBasicProps,
    HTMLAttributes<HTMLDivElement> {}

const Column = ({
  className,
  children,
  align = 'start',
  justify = 'start',
  ...props
}: ColumnProps) => {
  const alignClass = getAlignClass(align);
  const justifyClass = getJustifyClass(justify);

  return (
    <div
      className={cn(`flex flex-col`, alignClass, justifyClass, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Column;
