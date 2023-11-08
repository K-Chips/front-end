import React, { InputHTMLAttributes } from 'react';

import { cn } from '@/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn('py-[16px] px-[24px] outline-none', className)}
      {...props}
    />
  );
};

export default Input;
