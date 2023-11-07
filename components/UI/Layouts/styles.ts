type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface LayoutBasicProps {
  align?: Align;
  justify?: Justify;
  gap?: string;
}

export const getAlignClass = (align: Align) => `items-${align}`;
export const getJustifyClass = (justify: Justify) => `justify-${justify}`;
export const getGapClass = (gap: string) => `gap-[${gap}]`;
