import { HTMLAttributes } from 'react';

import { cn } from '@/utils';

import { getAlignClass, getJustifyClass, LayoutBasicProps } from './styles';

interface FlexProps extends LayoutBasicProps, HTMLAttributes<HTMLDivElement> {}

const Flex = ({
  className,
  children,
  align = 'start',
  justify = 'start',
  ...props
}: FlexProps) => {
  const alignClass = getAlignClass(align);
  const justifyClass = getJustifyClass(justify);

  return (
    <div
      className={cn(`flex flex-row`, alignClass, justifyClass, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
