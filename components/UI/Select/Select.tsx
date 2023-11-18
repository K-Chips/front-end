import { cn } from '@/utils';

import { useSelect, useSelectOptions } from './hooks';
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
  keyExtractor,
}: UseSelectParams<Option> & UseSelectOptionsParams<Option> & SelectProps) => {
  const selectProps = useSelect({ selectedOption, options, onChange });

  const selectOptions = useSelectOptions({ options, getLabel, keyExtractor });

  return (
    <select {...selectProps} className={cn(`flex flex-col`, className)}>
      {selectOptions}
    </select>
  );
};

export default Select;
