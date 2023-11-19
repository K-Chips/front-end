import { HTMLAttributes } from 'react';

export type TagType = 'h1' | 'h2' | 'h3' | 'p' | 'span';
export type VariantType = 'h1' | 'h2' | 'h3' | 'p1' | 'p2' | 'p3' | 'p4';

export type HeadingType = HTMLAttributes<HTMLHeadingElement>;
export type ParagraphType = HTMLAttributes<HTMLParagraphElement>;
export type SpanType = HTMLAttributes<HTMLSpanElement>;

export type TypographyProps = (HeadingType | ParagraphType | SpanType) & {
  variant?: VariantType;
};
