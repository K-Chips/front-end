type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface LayoutBasicProps {
  align?: Align;
  justify?: Justify;
}

export const alignStyles: { [key in Align]: string } = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

export const justifyStyles: { [key in Justify]: string } = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const getAlignClass = (align: Align) => alignStyles[align];
export const getJustifyClass = (justify: Justify) => justifyStyles[justify];
