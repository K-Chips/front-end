import { cn } from '@/utils';

import { useSelect } from './hooks/useSelect';
import { useSelectOptions } from './hooks/useSelectOptions';
import { UseSelectOptionsParams, UseSelectParams } from './type';

interface SelectProps {
  className: string;
}

const Select = <Option,>({
  className,
  selectedOption,
  options,
  onChange,
  getLabel,
}: UseSelectParams<Option> & UseSelectOptionsParams<Option> & SelectProps) => {
  const selectProps = useSelect({ selectedOption, options, onChange });
  const selectOptions = useSelectOptions({ options, getLabel });

  return (
    <select {...selectProps} className={cn(`flex flex-col`, className)}>
      {selectOptions}
    </select>
  );
};

export default Select;
