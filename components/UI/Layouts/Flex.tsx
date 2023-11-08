import { HTMLAttributes } from 'react';

import {
  getAlignClass,
  getJustifyClass,
  LayoutBasicProps,
} from '@/components/UI/Layouts/styles';
import { cn } from '@/utils';

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
