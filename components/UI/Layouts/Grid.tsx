import { HTMLAttributes } from 'react';

import { cn } from '@/utils';

import { getAlignClass, getJustifyClass, LayoutBasicProps } from './styles';

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
