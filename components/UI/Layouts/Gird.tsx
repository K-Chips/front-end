import { HTMLAttributes } from 'react';

import {
  getAlignClass,
  getGapClass,
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
  gap = '0',
  ...props
}: GridProps) => {
  const flowClass = flow === 'row' ? 'grid' : 'grid grid-flow-col';
  const alignClass = getAlignClass(align);
  const justifyClass = getJustifyClass(justify);
  const gapClass = getGapClass(gap);

  return (
    <div
      className={cn(flowClass, alignClass, justifyClass, gapClass, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
