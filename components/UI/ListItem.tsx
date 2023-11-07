import React, {
  DetailedHTMLProps,
  LiHTMLAttributes,
  PropsWithChildren,
} from 'react';

interface Props
  extends PropsWithChildren<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  > {
  right?: React.ReactNode;
}

const ListItem = ({ right, children, ...props }: Props) => {
  return (
    <li {...props}>
      {children}
      {right}
    </li>
  );
};

export default ListItem;
