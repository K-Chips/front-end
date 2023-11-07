import { HTMLAttributes } from 'react';

import { cn } from '@/utils';

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {}

const Column = ({ className, children, ...props }: ColumnProps) => {
  return (
    <div className={cn(`flex flex-col`, className)} {...props}>
      {children}
    </div>
  );
};

export default Column;
