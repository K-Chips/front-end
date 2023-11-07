import { HTMLAttributes } from 'react';

import { cn } from '@/utils';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {}

const Flex = ({ className, children, ...props }: FlexProps) => {
  return (
    <div className={cn(`flex flex-row`, className)} {...props}>
      {children}
    </div>
  );
};

export default Flex;
