import { UseSelectOptionsParams } from '../type';

export const useSelectOptions = <Option,>({
  options,
  getLabel,
  keyExtractor,
}: UseSelectOptionsParams<Option>) => {
  return (
    <>
      {options.map((item: Option, index) => (
        <option key={keyExtractor(item)} value={index}>
          {getLabel(item)}
        </option>
      ))}
    </>
  );
};
