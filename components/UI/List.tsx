import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

import { cn } from '@/utils';

import ListItem from './ListItem';

interface ListProps<T>
  extends PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
  > {
  items: T[];
  render: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  right?: ReactNode;
}

const List = <T,>({
  render,
  items,
  children,
  keyExtractor,
  className,

  right,
}: ListProps<T>) => {
  return (
    <ul className={cn(className)}>
      {items.map((item) => (
        <ListItem right={right} key={keyExtractor(item)}>
          {render(item)}
        </ListItem>
      ))}
      {children}
    </ul>
  );
};

export default List;
