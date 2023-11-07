import { HTMLAttributes } from 'react';

import {
  getAlignClass,
  getJustifyClass,
  LayoutBasicProps,
} from '@/components/UI/Layouts/styles';
import { cn } from '@/utils';

interface GridProps extends LayoutBasicProps, HTMLAttributes<HTMLDivElement> {
  flow?: 'row' | 'col';
}

const Grid = ({
  className,
  children,
  flow = 'row',
  align = 'start',
  justify = 'start',
  ...props
}: GridProps) => {
  const flowClass = flow === 'row' ? 'grid' : 'grid grid-flow-col';
  const alignClass = getAlignClass(align);
  const justifyClass = getJustifyClass(justify);

  return (
    <div
      className={cn(flowClass, alignClass, justifyClass, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
