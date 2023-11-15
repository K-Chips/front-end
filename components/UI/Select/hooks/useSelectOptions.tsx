import { UseSelectOptionsParams } from '../type';

export const useSelectOptions = <Option,>({
  options,
  getLabel,
}: UseSelectOptionsParams<Option>) => {
  return (
    <>
      {options.map((item: Option, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <option key={index} value={index}>
          {getLabel(item)}
        </option>
      ))}
    </>
  );
};
