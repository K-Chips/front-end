import React, { PropsWithChildren } from 'react';

interface FlexProps extends PropsWithChildren {}

const Flex = ({ children }: FlexProps) => {
  return <div className="flex">{children}</div>;
};

export default Flex;
