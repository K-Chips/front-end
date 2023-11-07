import React, { InputHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
  return <input className={cn('py-[16px] px-[24px]', className)} {...props} />;
};

export default Input;
