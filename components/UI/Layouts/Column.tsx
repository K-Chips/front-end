import { HTMLAttributes } from 'react';

import {
  getAlignClass,
  getJustifyClass,
  LayoutBasicProps,
} from '@/components/UI/Layouts/styles';
import { cn } from '@/utils';

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
